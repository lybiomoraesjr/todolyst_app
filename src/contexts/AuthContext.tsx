import { createContext, ReactNode, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";
import { storageUserRemove } from "../storage/storageUser";
import { storageAuthTokenRemove } from "../storage/storageAuthToken";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  const signIn = async (email: string, password: string) => {};

  const signOut = () => {
    try {
      setUser({} as UserDTO);
      storageUserRemove();
      storageAuthTokenRemove();
    } catch (error) {
      throw error;
    }

    return (
      <AuthContext.Provider
        value={{
          user,
          signIn,
          signOut,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
};
