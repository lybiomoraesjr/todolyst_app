import React from "react";
import { Button, Container } from "@radix-ui/themes";

const SignIn = () => {
  return (
    <Container size="1">
      <Button variant="solid">
        Acessar
      </Button>

      <Button variant="outline">
        Criar Conta
      </Button>
    </Container>
  );
};

export default SignIn;
