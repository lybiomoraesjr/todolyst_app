import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/Input";
import Button from "../components/Button";

type FormDataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup.string().required("Informe o e-mail").email("E-mail inválido."),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 dígitos."),
});

const SignIn = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = async () => {};

  return (
    <Container>
      <Heading as="h1" size="8" align="center">
        To-do Lyst
      </Heading>

      <Flex direction="column" gap="2" align="center" justify="center">
        <Heading as="h2" size="4" align="center">
          Acesse a conta
        </Heading>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              label="E-mail"
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
              label="Senha"
              placeholder="Senha"
              errorMessage={errors.password?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Button title="Acessar" onClick={handleSubmit(handleSignIn)} />

        <Text as="p">Ainda não tem acesso?</Text>

        <Button
          title="Criar conta"
          variant="outline"
          onClick={() => navigate("/signup")}
        />
      </Flex>
    </Container>
  );
};

export default SignIn;
