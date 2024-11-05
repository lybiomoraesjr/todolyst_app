import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import Button from "./Button";
import { useAuth } from "../hooks/useAuth";
import ConfirmationDialog from "./ConfirmationDialog";

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container style={{ backgroundColor: "#f0f0f0", width: "100%" }}>
      <Flex align="center" justify="between">
        <Heading as="h1" size="6" align="center">
          To-do Lyst
        </Heading>

        <Text as="p" size="2" color="gray">
          Olá, Lybio
        </Text>

        <ConfirmationDialog
          onConfirm={signOut}
          button={<Button title="Sair" variant="solid" />}
        />
      </Flex>
    </Container>
  );
};

export default Header;
