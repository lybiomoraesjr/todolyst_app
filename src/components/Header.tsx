import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import Button from "./Button";
import { useAuth } from "../hooks/useAuth";

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Flex align="center" justify="between" style={{ padding: "1rem 0" }}>
        <Heading as="h1" size="6" align="center">
          To-do Lyst
        </Heading>

        <Text as="p" size="2" color="gray">
          Olá, Lybio
        </Text>

        <Button title="sair" variant="solid" onClick={signOut} />
      </Flex>
    </Container>
  );
};

export default Header;
