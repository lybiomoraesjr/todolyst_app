import { createContext, ReactNode } from "react";

export type TaskContextDataProps = {};

export const TaskContext = createContext<TaskContextDataProps>(
  {} as TaskContextDataProps
);

type TaskContextProviderProps = {
  children: ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  return <TaskContext.Provider value={{}}>{children}</TaskContext.Provider>;
};
