import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function AddDocumentForm() {
  const addDocumentSchema = z.object({
    nome: z.string().nonempty("Campo obrigatório"),
    status: z.string().nonempty("Campo obrigatório"),
    responsavel: z.string().nonempty("Campo obrigatório"),
  });

  type AddDocumentSchema = z.infer<typeof addDocumentSchema>;

  const { register, handleSubmit } = useForm<AddDocumentSchema>({
    resolver: zodResolver(addDocumentSchema),
  });

  const addDocument = async (data: DocType) => {
    const response = await fetch("localhost:3000/documents", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = response.json();
    return result;
  };
  const submitCreateDocumentForm = async (data: DocType) => {
    try {
      await addDocument(data);
    } catch (error) {
      alert(error);
    }
  };

  return <form>AddDocumentForm</form>;
}
