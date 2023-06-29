"use client";
import React, { useState } from "react";
import Box from "@/components/Box/Box";
import Button from "@/components/Buttons/Buttons";
import Input from "@/components/Input/Input";
import { PlusIcon } from "@heroicons/react/outline";
import UserList from "@/components/List/UserList";
import RegisterModal from "@/components/Modal/RegisterModal";

export default async function Users() {
  const users: any[] = await fetch("http://localhost:3000/users").then(
    async (response) => [...(await response.json())]
  );

  return (
    <div className="max-h-screen p-6 overflow-y-auto grid gap-4 mx-auto w-full">
      <Box bgColor="light">
        <div className="flex items-center justify-between w-full">
          <div>
            <Input
              placeholder="Insira o nome do usuario"
              label="Buscar pelo nome do usuario"
            />
          </div>
        </div>
      </Box>
      <div className="w-full">
        <Box bgColor="light">
          <UserList users={users}></UserList>
        </Box>
      </div>
    </div>
  );
}
