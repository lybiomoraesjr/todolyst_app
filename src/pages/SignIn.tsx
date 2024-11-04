import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Heading as="h1" size="8" align="center">
        To-do Lyst
      </Heading>

      <Flex direction="column" gap="2" align="center" justify="center">
        <Heading as="h2" size="4" align="center">
          Acesse a conta
        </Heading>
        <Box width="200px">
          <TextField.Root size="1" placeholder="E-mail" />
        </Box>

        <Box width="200px">
          <TextField.Root size="1" placeholder="Senha" />
        </Box>

        <Button variant="solid" style={{ width: "200px" }}>
          Acessar
        </Button>

        <Text as="p">Ainda não tem acesso?</Text>

        <Button
          variant="outline"
          style={{ width: "200px" }}
          onClick={() => navigate("/signup")}
        >
          Criar conta
        </Button>
      </Flex>
    </Container>
  );
};

export default SignIn;
