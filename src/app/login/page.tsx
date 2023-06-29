"use client";
import LoginForm from "@/components/Forms/LoginForm";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import React from "react";

const Login = () => {
  // const logged = parseCookies()?.logged_in;
  // const { push } = useRouter();
  // if (logged) push("/home/dashboard");
  return (
    <div className="flex items-center justify-center w-screen min-h-screen">
      <div className="flex p-8 bg-white w-1/2 rounded-md shadow-lg">
        <div className="w-1/2">
          <div className="mt-10 mb-4 mr-6 text-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="max-w-full mx-auto h-60"
            />
          </div>
        </div>
        <div className="2xl:w-1/2 w-2/3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
