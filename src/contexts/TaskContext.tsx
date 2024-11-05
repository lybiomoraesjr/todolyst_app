import { createContext, ReactNode, useState } from "react";
import { TaskDTO } from "../dtos/TaskDTO";
import { mockTasks } from "../utils/mockTasks";

export type TaskContextDataProps = {
  tasks: TaskDTO[];
  setTasks: (tasks: TaskDTO[]) => void;
  fetchTasks: () => Promise<void>;
  createTask: () => Promise<void>;
  updateTask: () => Promise<void>;
  deleteTask: () => Promise<void>;
};

export const TaskContext = createContext<TaskContextDataProps>(
  {} as TaskContextDataProps
);

type TaskContextProviderProps = {
  children: ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [tasks, setTasks] = useState<TaskDTO[]>(mockTasks);

  const fetchTasks = async () => {};

  const createTask = async () => {};

  const updateTask = async () => {};

  const deleteTask = async () => {};

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        createTask,
        updateTask,
        deleteTask,
        fetchTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
