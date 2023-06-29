import Box from "@/components/Box/Box";
import Button from "@/components/Buttons/Buttons";
import Input from "@/components/Input/Input";
import ItemList from "@/components/List/ItemList";
import Typography from "@/components/Typography/Typography";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Modal from "@/components/Modal/Modal";
import DocsList from "@/components/List/DocsList";

export default async function Docs() {
  const documentResponse = await fetch("http://localhost:3000/documents", {
    next: { revalidate: 1 },
  });

  const documentsResult: DocType[] = await documentResponse.json(); // retorno de todos os documentos

  return (
    <div className="max-h-screen p-6 overflow-y-auto grid gap-4 mx-auto w-full backdrop-saturate-200 border-double">
      <Box bgColor="light" className="rounded-lg shadow-xl p-4">
        <div className="flex items-center justify-between w-full">
          <div>
            <Input
              placeholder="Insira o nome do documento"
              label="Buscar pelo nome do documento"
              className="w-72"
            />
          </div>
          <div>
            <Button className="flex gap-2 items-center">
              <PlusIcon className="w-5" /> Adicionar documento
            </Button>
          </div>
        </div>
      </Box>
      <div className="w-full">
        <Box bgColor="light" className="rounded-lg shadow-xl p-4 backdrop-saturate-200 border-double	">
          <DocsList documents={documentsResult} />
        </Box>
      </div>
    </div>
  );
}
