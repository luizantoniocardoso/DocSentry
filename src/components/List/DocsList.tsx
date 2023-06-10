"use client";
import React, { useState } from "react";
import ItemList from "./ItemList";
import Typography from "../Typography/Typography";
import Button from "../Buttons/Buttons";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Option from "../Select/Option";

interface DocListProps {
  documents: DocType[];
  // users: User[];
}

export default function DocsList({ documents }: DocListProps) {
  return (
    <ul className="grid gap-4  w-full">
      {documents.map((doc) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <ItemList key={doc.id}>
            <div className="flex items-center justify-between">
              <div>
                <Typography>{doc.nome}</Typography>
              </div>
              <div>
                <Button onClick={() => setIsOpen(true)}>Editar</Button>
              </div>
            </div>

            <Modal
              title={`Editar ${doc.nome}`}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            >
              <form className="mt-4 grid gap-2">
                <Input
                  type="text"
                  label="Nome do documento"
                  defaultValue={doc.nome}
                />
                <Select defaultValue={doc.status} label="Status">
                  <Option disabled>Status</Option>
                  <Option>Concluido</Option>
                  <Option>Pendente</Option>
                  <Option>Em análise</Option>
                </Select>
                <Input type="File" label="Documento" />
              </form>
            </Modal>
          </ItemList>
        );
      })}
    </ul>
  );
}
