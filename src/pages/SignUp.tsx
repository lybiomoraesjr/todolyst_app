import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  TextField,
} from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/Input";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  email: yup.string().required("Informe o e-mail").email("E-mail inválido."),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 dígitos"),
  password_confirm: yup
    .string()
    .required("Confirme a senha.")
    .oneOf([yup.ref("password"), ""], "A confirmação da senha não confere"),
});

const SignUn = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = async () => {};

  return (
    <Container>
      <Heading as="h1" size="8" align="center">
        To-do Lyst
      </Heading>

      <Flex direction="column" gap="2" align="center" justify="center">
        <Heading as="h2" size="4" align="center">
          Crie sua conta
        </Heading>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Nome"
              errorMessage={errors.name?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="E-mail"
              errorMessage={errors.email?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Senha"
              errorMessage={errors.password?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="password_confirm"
          render={({ field: { onChange, value } }) => (
            <Input
              name="password_confirm"
              placeholder="Confirme a Senha"
              errorMessage={errors.password_confirm?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Button
          variant="solid"
          style={{ width: "200px" }}
          onClick={handleSubmit(handleSignUp)}
        >
          Criar e acessar
        </Button>

        <Button
          variant="outline"
          style={{ width: "200px" }}
          onClick={() => navigate("/")}
        >
          Voltar para o Login
        </Button>
      </Flex>
    </Container>
  );
};

export default SignUn;
