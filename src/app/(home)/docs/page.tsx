import Box from "@/components/Box/Box";
import Button from "@/components/Buttons/Buttons";
import Input from "@/components/Input/Input";
import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
import DocsList from "@/components/List/DocsList";

export default async function Docs() {
  return (
    <div className="w-full">
      <DocsList />
    </div>
  );
}
