import { Dialog, Transition } from "@headlessui/react";
import RegisterForm from "../Forms/RegisterForm";
import React, { useState, Fragment, ReactNode } from "react";
import Input from "../Input/Input";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import Button from "../Buttons/Buttons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { delay } from "@/utils/delay";
import { parseCookies, setCookie } from "nookies";
import Link from "next/link";
import { getCookieParser } from "next/dist/server/api-utils";
import { on } from "events";

interface ModalProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  title?: ReactNode;
  children?: ReactNode;
}

export default function RegisterModal({
  title,
  children,
  isOpen,
  onClose,
}: ModalProps) {
  const registerSchema = z.object({
    email: z.string().nonempty("Campo obrigatório"),
    name: z.string().nonempty("Campo obrigatório"),
    username: z.string().nonempty("Campo obrigatório"),
    password: z.string().nonempty("Campo obrigatório"),
  });
  const logged = parseCookies()?.logged_in;

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

  const submitRegisterForm = async ({
    email,
    name,
    username,
    password,
  }: RegisterCredentials) => {
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
      if (result) {
        setLoading(false);
        onClose(false);
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
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <Box bgColor="light">
                    <fieldset
                      disabled={loading}
                      className="grid gap-4 place-items-center"
                    >
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
                            defaultValue={""}
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
                            defaultValue={""}
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
                            defaultValue={""}
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
                            defaultValue={""}
                          />
                        </div>
                        <Button type="submit">Cadastrar</Button>
                        <div className="flex items-center justify-center w-full mt-5">
                          {!logged ? (
                            <Link href="/login">Login</Link>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </form>
                    </fieldset>
                  </Box>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
