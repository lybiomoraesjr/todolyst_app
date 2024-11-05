import { TaskDTO } from "../dtos/TaskDTO";

export const mockTasks: TaskDTO[] = [
  {
    id: "1",
    title: "Estudar React",
    priority: "Alta",
    status: "Pendente",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-11-05"),
  },
  {
    id: "2",
    title: "Implementar autenticação JWT",
    priority: "Média",
    status: "Em andamento",
    startDate: new Date("2024-11-03"),
    endDate: new Date("2024-11-10"),
  },
  {
    id: "3",
    title: "Revisar estrutura de dados",
    priority: "Baixa",
    status: "Concluída",
    startDate: new Date("2024-10-25"),
    endDate: new Date("2024-10-30"),
  },
];
