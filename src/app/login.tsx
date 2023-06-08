import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-white to-gray-300">
      <div className="bg-white p-8 rounded shadow-lg rounded-md flex">
        <div className="w-1/2">
          <div className="text-center mb-4 mt-10 mr-6">
            <img src="https://github.com/guilhermebp030504/Projeto_front/raw/main/DocSentry-Projeto_front/logo.jpeg" alt="Logo" className="mx-auto h-60 max-w-full" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="p-8 rounded shadow-lg rounded-md bg-blue-100">
            <h2 className="text-2xl mb-4 text-gray-900 text-center">Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="usuario" className="text-gray-900 block mb-2">Usuário</label>
                <input type="text" id="usuario" className="w-full text-black p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="text-gray-900 block mb-2">Senha</label>
                <input type="password" id="password" className="w-full text-black p-2 border border-gray-300 rounded" />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
