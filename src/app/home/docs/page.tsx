import Box from "@/components/Box/Box";
import Button from "@/components/Buttons/Buttons";
import Input from "@/components/Input/Input";
import ItemList from "@/components/List/ItemList";
import Typography from "@/components/Typography/Typography";
import React, { useEffect } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Modal from "@/components/Modal/Modal";
import DocsList from "@/components/List/DocsList";

export default async function Docs() {


  return (
    <div className="grid w-full max-h-screen gap-4 p-6 mx-auto overflow-y-auto">
      <Box bgColor="light">
        <div className="flex items-center justify-between w-full">
          <div>
            <Input
              placeholder="Insira o nome do documento"
              label="Buscar pelo nome do documento"
            />
          </div>
          <div>
            <Button className="flex items-center gap-2">
              <PlusIcon className="w-5" /> Adicionar documento
            </Button>
          </div>
        </div>
      </Box>
      <div className="w-full">
        <Box bgColor="light">
          <DocsList />
        </Box>
      </div>
    </div>
  );
}
