import React from "react";
import Input from "../Input/Input";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import Button from "../Buttons/Buttons";

export default function LoginForm() {
  return (
    <Box>
      <form className="max-w-3xl grid gap-2">
        <Typography leading={false} variant="h5">
          LoginForm
        </Typography>
        <Input label="Usuário" />
        <Input label="Senha" />
        <Button>Login</Button>
      </form>
    </Box>
  );
}
