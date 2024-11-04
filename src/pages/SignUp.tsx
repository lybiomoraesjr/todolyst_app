import { Container, Flex, Heading } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/Input";
import Button from "../components/Button";

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
              label="Nome"
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

        <Controller
          control={control}
          name="password_confirm"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Confirme a Senha"
              placeholder="Confirme a Senha"
              errorMessage={errors.password_confirm?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Button title="Criar e acessar" onClick={handleSubmit(handleSignUp)} />

        <Button
          title="Voltar para o Login"
          variant="outline"
          onClick={() => navigate("/")}
        />
      </Flex>
    </Container>
  );
};

export default SignUn;
