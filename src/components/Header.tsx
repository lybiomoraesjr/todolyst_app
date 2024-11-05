import {
  Avatar,
  Button,
  Container,
  DropdownMenu,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import React from "react";
import { useAuth } from "../hooks/useAuth";
import ConfirmationDialog from "./ConfirmationDialog";
import DropDown from "./DropDown";

type HeaderProps = {
  name: string;
};

const Header: React.FC<HeaderProps> = ({ name }) => {
  const { user, signOut } = useAuth();

  const INITIAL_LETTER = name.charAt(0);

  return (
    <Container>
      <Flex align="center" justify="between">
        <Heading as="h1" size="6" align="center">
          To-do Lyst
        </Heading>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">
              <Avatar
                fallback={INITIAL_LETTER}
                radius="full"
                variant="solid"
                size="1"
              />
              {name}
              <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item color="red" onClick={signOut}>
              Sair
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
    </Container>
  );
};

export default Header;
