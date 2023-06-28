import RegisterForm from "@/components/Forms/RegisterFrom";
import React from "react";

const Register = () => {
  return (
    <div className="flex items-center justify-center w-screen min-h-screen">
      <div className="flex self-center justify-center p-8 bg-white rounded-md shadow-lg">
        <div className="flex content-center self-center w-1/2 ">
          <div className="flex items-center self-center mt-10 mb-4 mr-6 text-center" >
            <img
              src="../../img/logo.png"
              alt="Logo"
              className="max-w-full mx-auto h-60 "
            />
          </div>
        </div>
        <div className="flex content-center self-center w-1/2">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
