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

  const submitRegisterForm = async ({ username, password }: RegisterCredentials) => {
    setLoading(true);
    try {
      await delay(1000);

      const response = await fetch("http://localhost:3000/users");

      const result = await response.json();

      const user = result.find(
        (user: UserCredentials) => user.username === username
      );

      if (user && user.password === password) {
        setCookie(null, "user", JSON.stringify(user), {
          maxAge: 60 * 60 * 6, //6 hours
        });

        setLoading(false);
        push("home/dashboard");
        return user;
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
          <Button type="submit">Entrar</Button>
          <div className="flex items-center justify-center w-full mt-5">
            <Link  href="/login">Login</Link>
          </div>
        </form>
      </fieldset>
    </Box>
  );
}
