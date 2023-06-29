"use client";
import React, { use, useState } from "react";
import ItemList from "./ItemList";
import Typography from "../Typography/Typography";
import Button from "../Buttons/Buttons";
import RegisterModal from "../Modal/RegisterModal";
import Input from "../Input/Input";
import { PlusIcon } from "@heroicons/react/outline";
import EditModal from "../Modal/EditModal";

interface DocListProps {
  // documents: DocType[];
  users: any[];
}

export default function UsersList({ users }: DocListProps): JSX.Element {
  const [register, setRegister] = useState(false);
  return (
    <ul className="grid gap-4 w-full">
      <div className="flex justify-end">
        <Button
          onClick={() => setRegister(true)}
          className="flex max-w-xs gap-2 items-center"
        >
          <PlusIcon className="w-5" /> Adicionar Usuario
        </Button>
      </div>
      <RegisterModal isOpen={register} onClose={() => setRegister(false)} />
      {users.map((user) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <ItemList key={user.id}>
            <div className="flex items-center justify-between">
              <div>
                <Typography>{user.name}</Typography>
              </div>
              <div>
                <Button onClick={() => setIsOpen(true)}>Editar</Button>
              </div>
            </div>

            <EditModal
              title={`Editar ${user.name}`}
              user={user}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            >
              <form className="mt-4 grid gap-2">
                <Input
                  type="text"
                  label="Nome do Usuario"
                  defaultValue={user.nome}
                />
                <Input type="File" label="userFoto" />
              </form>
            </EditModal>
          </ItemList>
        );
      })}
    </ul>
  );
}
