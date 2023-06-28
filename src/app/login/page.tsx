import LoginForm from "@/components/Forms/LoginForm";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center w-screen items-center min-h-screen">
      <div className="bg-white p-8 shadow-lg rounded-md flex">
        <div className="w-1/2">
          <div className="text-center mb-4 mt-10 mr-6">
            <img
              src="../../img/logo.png"
              alt="Logo"
              className="mx-auto h-60 max-w-full"
            />
          </div>
        </div>
        <div className="w-1/2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
