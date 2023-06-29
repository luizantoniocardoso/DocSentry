"use client";
import React, { SetStateAction, use, useEffect, useRef, useState } from "react";
import ItemList from "./ItemList";
import Typography from "../Typography/Typography";
import Button from "../Buttons/Buttons";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Option from "../Select/Option";
import { z } from "zod";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { delay } from "@/utils/delay";
import Box from "../Box/Box";
import { useDebounce } from "@/hooks/useDebounce";
import { PlusIcon } from "@heroicons/react/outline";
import { User } from "@/types/user";
import { formatDate } from "@/utils/format-strings";

interface DocTypeDocList extends DocType {
  isOpen: true | false;
}

export default function DocsList() {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<any>();
  const [dataCriacao, setDataCriacao] = useState<any>();
  const [dataRevisao, setDataRevisao] = useState<any>();
  const [responsavel, setResponsavel] = useState<any>();
  const [docs, setDocs] = useState<DocTypeDocList[]>([]);
  const [docName, setDocName] = useState<string>("");
  const [filteredDocs, setFilteredDocs] = useState<DocTypeDocList[]>([]);

  const filteredValues = useDebounce(docName, 500);

  useEffect(() => {
    const filter = docs.filter(
      (doc) => doc.nome.toLowerCase() === docName.toLowerCase()
    );
    setFilteredDocs(filter);
  }, [filteredValues]);

  const editDocumentSchema = z.object({
    nome: z.string().nonempty("Campo obrigatório"),
    status: z.string().nonempty("Campo obrigatório"),
  });

  const addDocumentSchema = z.object({
    nome: z.string().nonempty("Campo obrigatório"),
    status: z.enum(["Concluido", "Pendente", "Em analise"]),
    responsavel: z.string().nonempty("Campo obrigatório"),
  });

  type AddDocumentSchema = z.infer<typeof addDocumentSchema>;

  type RegisterCredentials = z.infer<typeof editDocumentSchema>;

  const { register, handleSubmit } = useForm<RegisterCredentials>({
    resolver: zodResolver(editDocumentSchema),
  });

  const getDocs = async () => {
    const res = await fetch(`/api/docs/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setDocs(data);
    setDocs(data.map((doc: DocType) => ({ ...doc, isOpen: false })));

    return data;
  };

  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const res = await fetch(`/api/user/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setUsers(data);

    return data;
  };

  const addDocument = async (data: DocType) => {
    const response = await fetch("http://localhost:3000/documents", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = response.json();
    return result;
  };

  const submitEditDocumentForm = async ({
    nome,
    status,
  }: RegisterCredentials) => {
    setLoading(true);
    await delay(1000);
    await fetch(`/api/docs/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        status,
        id,
        dataCriacao,
        dataRevisao,
        responsavel,
      }),
    });
    getDocs();
    setLoading(false);
  };

  const {
    register: registerCreateDocument,
    handleSubmit: submitCreateDocument,
    formState: createDocStateForm,
    reset,
  } = useForm<AddDocumentSchema>({
    resolver: zodResolver(addDocumentSchema),
  });

  const submitCreateDocumentForm = async (data: AddDocumentSchema) => {
    const formData = {
      ...data,
      avatar: "https://i.pravatar.cc/300",
      dataCriacao: new Date(),
      dataRevisao: new Date(),
    };

    reset();

    try {
      await addDocument(formData);
      setOpenAddDocumentModal(false);
    } catch (error) {
      alert(error);
      setOpenAddDocumentModal(false);
    }
    getDocs();
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      await getDocs();
      await getUsers();
      setLoading(false);
      console.log(docs);
    })();
  }, []);

  const setIsOpen = (isOpen: boolean, id: number | undefined) => {
    setDocs(
      docs.map((doc) => {
        if (doc.id === id) {
          return {
            ...doc,
            isOpen: isOpen,
          };
        }
        return doc;
      })
    );
  };

  const colors = {
    Concluido: "bg-green-500",
    Pendente: "bg-red-500",
    "Em analise": "bg-yellow-500",
  };

  const tableHeaders = [
    "Nome",
    "Status",
    "Responsável",
    "Data de Criação",
    "Data de Revisão",
    "Ações",
  ];

  console.log(createDocStateForm.errors);

  const docsDataToMap = filteredDocs.length > 0 ? filteredDocs : docs;

  const [openAddDocumentModal, setOpenAddDocumentModal] = useState(false);

  return (
    <div className="grid w-full max-h-screen gap-4 p-6 mx-auto overflow-y-auto">
      <Box bgColor="light">
        <div className="flex items-center justify-between w-full">
          <div>
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDocName(e.target.value)
              }
              placeholder="Insira o nome do documento"
              label="Buscar pelo nome do documento"
            />
          </div>
          <div>
            <Button
              onClick={() => setOpenAddDocumentModal(true)}
              className="flex items-center gap-2"
            >
              <PlusIcon className="w-5" /> Adicionar documento
            </Button>
            <Modal
              title={"Cadastrar Documento"}
              isOpen={openAddDocumentModal}
              onClose={() => setOpenAddDocumentModal(false)}
            >
              <form onSubmit={submitCreateDocument(submitCreateDocumentForm)}>
                <div className="grid gap-3 mt-4">
                  <Input
                    type="text"
                    label="Nome do documento"
                    placeholder="Insira o nome do documento"
                    {...registerCreateDocument("nome")}
                  />
                  <Select
                    placeholder="Status"
                    label="Status"
                    defaultValue={""}
                    {...registerCreateDocument("status")}
                  >
                    <Option value={""} disabled>
                      Status
                    </Option>
                    <Option value={"Concluido"}>Concluido</Option>
                    <Option value={"Pendente"}>Pendente</Option>
                    <Option value={"Em análise"}>Em análise</Option>
                  </Select>
                  <Select
                    placeholder="Responsável"
                    label="Responsável"
                    {...registerCreateDocument("responsavel")}
                  >
                    <Option value={""} disabled>
                      Responsável
                    </Option>
                    {users.map((user) => (
                      <Option value={user.name}>{user.name}</Option>
                    ))}
                  </Select>
                  <Button type="submit">Cadastrar</Button>
                </div>
              </form>
            </Modal>
          </div>
        </div>
      </Box>
      <Box bgColor="light">
        <table className="w-full">
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th className="px-4 py-2 text-left">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {docsDataToMap.map((doc) => {
              return (
                <tr className="border-b" key={doc.id}>
                  <td className="px-4 py-2">
                    {loading ? "Carregando" : doc.nome}
                  </td>
                  <td className={`px-4 py-2`}>
                    <div
                      className={`rounded-xs ${
                        colors[doc.status]
                      } text-center py-1 text-white`}
                    >
                      <Typography>{doc.status}</Typography>
                    </div>
                  </td>
                  <td className="px-4 py-2">{doc.responsavel}</td>
                  <td className="px-4 py-2">
                    {formatDate(String(doc.dataCriacao))}
                  </td>
                  <td className="px-4 py-2">
                    {formatDate(String(doc.dataRevisao))}
                  </td>
                  <td className="px-4 py-2">
                    <Button onClick={() => setIsOpen(true, doc.id)}>
                      Editar
                    </Button>
                  </td>
                  <Modal
                    title={`Editar ${doc.nome}`}
                    isOpen={doc.isOpen}
                    onClose={() => setIsOpen(false, doc?.id)}
                  >
                    <form
                      className="grid gap-2 mt-4"
                      onSubmit={handleSubmit(submitEditDocumentForm)}
                    >
                      <Input
                        type="text"
                        label="Nome do documento"
                        defaultValue={doc.nome}
                        {...register("nome")}
                      />
                      <Select
                        label="Status"
                        defaultValue={doc.status}
                        {...register("status")}
                      >
                        <Option disabled>Status</Option>
                        <Option>Concluido</Option>
                        <Option>Pendente</Option>
                        <Option>Em análise</Option>
                      </Select>
                      <Input type="File" label="Documento" />
                      <Button
                        type="submit"
                        onClick={() => {
                          setId(doc.id);
                          setIsOpen(false, doc.id);
                          setDataCriacao(doc.dataCriacao);
                          setDataRevisao(doc.dataRevisao);
                          setResponsavel(doc.responsavel);
                        }}
                      >
                        Editar
                      </Button>
                    </form>
                  </Modal>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>
    </div>
  );
}
