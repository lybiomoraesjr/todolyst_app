import { Button, Container } from "@radix-ui/themes";
import Header from "../components/Header";
import TaskDialog from "../components/TaskDialog";
import { PlusIcon } from "@radix-ui/react-icons";

const TodoList = () => {
  return (
    <Container>
      <Header />

      <TaskDialog
        title="Criar Tarefa"
        description="Preencha os detalhes para criar uma nova tarefa"
        button={
          <Button>
            <PlusIcon /> Adicionar
          </Button>
        }
      />
    </Container>
  );
};

export default TodoList;
