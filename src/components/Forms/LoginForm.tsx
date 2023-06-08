import React from "react";
import Input from "../Input/Input";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import Button from "../Buttons/Buttons";

export default function LoginForm() {
  return (
    <Box>
      <div className="grid gap-4 place-items-center">
        <Typography variant="h5" className="text-center">
          Login
        </Typography>
        <form>
          <div className="mb-4">
            <Input
              label="Usuário"
              type="text"
              className="w-full text-black p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <Input label="Senha" labelColor="black" type="password" />
          </div>
          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </Box>
  );
}
