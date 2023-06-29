"use client";
import React, { useState } from "react";
import Input from "../Input/Input";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import Button from "../Buttons/Buttons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { delay } from "@/utils/delay";
import { setCookie } from "nookies";
import Link from "next/link";

export default function RegisterForm() {
  const registerSchema = z.object({
    email: z.string().nonempty("Campo obrigatório"),
    name: z.string().nonempty("Campo obrigatório"),
    username: z.string().nonempty("Campo obrigatório"),
    password: z.string().nonempty("Campo obrigatório"),
  });

  type RegisterCredentials = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>({
    resolver: zodResolver(registerSchema),
  });

  const { push } = useRouter();

  const [loading, setLoading] = useState(false);

  const submitRegisterForm = async ({ email, name, username, password  }: RegisterCredentials) => {
    setLoading(true);
    try {
      await delay(1000);

      const response = await fetch("/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
        body: JSON.stringify({
          email,
          name,
          username,
          password,
        }),
      });


      const result = await response.json();
      console.log(result);
      if(result){
        setLoading(false);
        push("/login");
        
      } else {
        alert("Credenciais inválidas");
      }

      setLoading(false);
      return;
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box>
      <fieldset disabled={loading} className="grid gap-4 place-items-center">
        <Typography variant="h5" className="text-center">
          Register
        </Typography>
        <form onSubmit={handleSubmit(submitRegisterForm)}>
         
          <div>
            <Input
              {...register("email")}
              placeholder="Email"
              errorMessage={errors.email?.message}
              label="Email"
              type="text"
              className="w-full p-2 text-black border border-gray-300 rounded"
            />
          </div>
          <div>
            <Input
              {...register("name")}
              placeholder="Nome"
              errorMessage={errors.name?.message}
              label="Nome"
              type="text"
              className="w-full p-2 text-black border border-gray-300 rounded"
            />
          </div>
          <div>
            <Input
              {...register("username")}
              placeholder="Usuário"
              errorMessage={errors.username?.message}
              label="Usuário"
              type="text"
              className="w-full p-2 text-black border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <Input
              {...register("password")}
              placeholder="Senha"
              errorMessage={errors.password?.message}
              label="Senha"
              labelColor="black"
              type="password"
            />
          </div>
          <Button type="submit">Cadastrar</Button>
          <div className="flex items-center justify-center w-full mt-5">
            <Link  href="/login">Login</Link>
          </div>
        </form>
      </fieldset>
    </Box>
  );
}
