"use client";
import React, { use, useEffect, useRef, useState } from "react";
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

interface DocListProps {
  documents: DocType[];
  // users: User[];
}
interface docTypeDocList extends DocType {
  isOpen: true | false;
}


export default function DocsList() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [id, setId] = useState<any>();
  const [dataCriacao, setDataCriacao] = useState<any>();
  const [dataRevisao, setDataRevisao] = useState<any>();
  const [responsavel, setResponsavel] = useState<any>();
  const [docs, setDocs] = useState<docTypeDocList[]>([]);

  const editDocumentSchema = z.object({
    nome: z.string(),
  });

  type RegisterCredentials = z.infer<typeof editDocumentSchema>;

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterCredentials>({
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

  const submitEditDocumentForm = async ({nome}: RegisterCredentials) => {
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
      responsavel

    }),
  });
  getDocs();
  setLoading(false);  
  } 
  


  useEffect(() => {
    (async () => {
      setLoading(true);
      await getDocs();
      setLoading(false);
      console.log(docs);
    }
    )();

  }, []);

  const setIsOpen = ( isOpen: boolean, id: number ) => {
    setDocs(docs.map((doc) => {
      if(doc.id === id) {
      
        return {
          ...doc,
          isOpen: isOpen,
        };
      }
      return doc;
    }));
  }
  
  return (
    <ul className="grid w-full gap-4">
      {docs.map((doc) => {
        if(loading) {
          return <p>Carregando...</p>
        };
        return (
          <ItemList key={doc.id} >
            <div className="flex items-center justify-between">
              <div>
                <Typography>{doc.nome}</Typography>
              </div>
              <div>
                <Button onClick={() => setIsOpen(true, doc.id)}>Editar</Button>
              </div>
            </div>

            <Modal
              title={`Editar ${doc.nome}`}
              isOpen={doc.isOpen}
              onClose={() => setIsOpen(false, doc.id)}  
            >
              <form className="grid gap-2 mt-4" onSubmit={handleSubmit(submitEditDocumentForm)}>
                
                <Input
                  type="text"
                  label="Nome do documento"
                  defaultValue={doc.nome}
                  {...register("nome")}
                  
                />
                <Select label="Status"
                  defaultValue={doc.status}
                  onChange={(e) => setStatus(e.target.value)}>
                  <Option disabled>Status</Option>
                  <Option >Concluido</Option>
                  <Option >Pendente</Option>
                  <Option >Em análise</Option>
                </Select>
                <Input type="File" label="Documento" />
                <Button type="submit" onClick={() => {
                  setId(doc.id) 
                  setIsOpen(false, doc.id)
                  setDataCriacao(doc.dataCriacao)
                  setDataRevisao(doc.dataRevisao)
                  setResponsavel(doc.responsavel)
                }}>Editar</Button>
              </form>
            </Modal>
          </ItemList>
        );
      })}
    </ul>    
  );
}
  
