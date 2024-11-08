import { Button, Dialog, Flex } from "@radix-ui/themes";
import React from "react";

type ConfirmationDialogProps = {
  onConfirm: () => void | Promise<void>;
  button: React.ReactNode;
  description?: string;
};

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  button,
  onConfirm,
  description = "Você tem certeza que deseja realizar essa ação?",
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{button}</Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Confirmar ação</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {description}
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={onConfirm} color="red">Confirmar</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ConfirmationDialog;
