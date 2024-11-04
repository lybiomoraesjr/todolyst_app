import { Container } from "@radix-ui/themes";
import Header from "../components/Header";
import TodoCard from "../components/TodoCard";

const TodoList = () => {
  return (
    <Container>
      <Header />
      
      <TodoCard />
    </Container>
  );
};

export default TodoList;
