import { Button, Container } from "@radix-ui/themes";
import Header from "../components/Header";
import TaskDialog from "../components/TaskDialog";
import { PlusIcon } from "@radix-ui/react-icons";
import Select from "../components/Select";
import TaskCard from "../components/TaskCard";

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
        onInteraction={async (taskId) => {}}
      />

      <Select
        label="Filtrar por"
        options={[
          { value: "all", label: "Todas as tarefas" },
          { value: "pending", label: "Tarefas pendentes" },
          { value: "completed", label: "Tarefas completadas" },
          { value: "priority", label: "Tarefas  por prioridade" },
        ]}
        onChange={(value) => {}}
      />

      <TaskCard />
    </Container>
  );
};

export default TodoList;
