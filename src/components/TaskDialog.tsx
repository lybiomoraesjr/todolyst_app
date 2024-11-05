import { Button, Dialog, Flex } from "@radix-ui/themes";
import Input from "./Input";
import Select from "./Select";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { ReactNode, useState } from "react";
import { toast } from "react-toastify";

type FormDataProps = {
  title: string;
  priority: string;
  startDate: string;
  endDate: string;
};

const taskDialogSchema = yup.object({
  title: yup
    .string()
    .required("Informe o título")
    .max(50, "Máximo de 50 caracteres"),
  priority: yup.string().required("Informe a prioridade"),
  startDate: yup.string().required("Informe a data de início"),
  endDate: yup.string().required("Informe a data de fim"),
});

type TaskDialogProps = {
  title: string;
  description: string;
  button: ReactNode;
  onInteraction: (task: FormDataProps) => Promise<void>;
  initialTask?: FormDataProps;
};

const TaskDialog: React.FC<TaskDialogProps> = ({
  title,
  description,
  button,
  onInteraction,
  initialTask,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataProps>({
    defaultValues: initialTask || {},
    resolver: yupResolver(taskDialogSchema),
  });

  const handleSaveTask = async (data: FormDataProps) => {
    try {
      setIsLoading(true);
      await onInteraction(data);
      handleResetForm();
      setIsOpen(false);
      toast.success("Sucesso!");
    } catch (error) {
      toast.error("Erro!");

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetForm = (): void => {
    reset({
      title: "",
      priority: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger>{button}</Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {description}
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Controller
              control={control}
              name="title"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Título"
                  placeholder="Digite o título da tarefa"
                  errorMessage={errors.title?.message}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </label>
          <label>
            <Controller
              control={control}
              name="priority"
              render={({ field: { onChange, value } }) => (
                <Select
                  label="Prioridade"
                  options={[
                    { value: "alta", label: "Alta" },
                    { value: "media", label: "Média" },
                    { value: "baixa", label: "Baixa" },
                  ]}
                  errorMessage={errors.priority?.message}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </label>

          <label>
            <Controller
              control={control}
              name="startDate"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Data de início"
                  type="date"
                  placeholder="Data de início"
                  errorMessage={errors.startDate?.message}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </label>

          <label>
            <Controller
              control={control}
              name="endDate"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Data de fim"
                  type="date"
                  placeholder="Data de fim"
                  errorMessage={errors.endDate?.message}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button
              variant="soft"
              color="gray"
              disabled={isLoading}
              onClick={handleResetForm}
            >
              Cancelar
            </Button>
          </Dialog.Close>
          <Dialog.Close onClick={handleSubmit(handleSaveTask)}>
            <Button loading={isLoading} disabled={isLoading}>
              Salvar
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default TaskDialog;
