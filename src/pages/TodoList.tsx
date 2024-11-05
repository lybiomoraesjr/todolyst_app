import { Button, Container, Flex, Tabs, TextField } from "@radix-ui/themes";
import Header from "../components/Header";
import TaskDialog from "../components/TaskDialog";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import TaskCard from "../components/TaskCard";
import { useTask } from "../hooks/useTask";

const TodoList = () => {
  const { tasks } = useTask();

  return (
    <Container>
      <Header name="Lybio" />

      <Flex justify="between" align="end" wrap="wrap" gap="5">
        <TextField.Root
          placeholder="Search the docs…"
          style={{ minWidth: "150px", flex: "1" }}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>

        <Tabs.Root defaultValue="all" style={{ flex: "1" }}>
          <Tabs.List>
            <Tabs.Trigger value="all">Todas</Tabs.Trigger>
            <Tabs.Trigger value="priority">Prioridade</Tabs.Trigger>
            <Tabs.Trigger value="upcoming">Próximas</Tabs.Trigger>
            <Tabs.Trigger value="completed">Concluídas</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>

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
      </Flex>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          startDate={task.startDate}
          endDate={task.endDate}
          priority={task.priority}
        />
      ))}
    </Container>
  );
};

export default TodoList;
