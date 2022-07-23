import React, { createContext, useState } from "react";
import { useAuth } from "./auth";

type PropsAuthorization = {
  paginaAtual: string;
  authorization2:boolean;
  setPaginaAtual: React.Dispatch<React.SetStateAction<string>>;
};
const DEFAULT_VALUE = {
  paginaAtual: "",
  authorization2:false,
  setPaginaAtual: () => {},
};

export const AuthorizationContext =
  createContext<PropsAuthorization>(DEFAULT_VALUE);
const ContextProvider = ({ children }: any) => {
  const [paginaAtual, setPaginaAtual] = useState(
    DEFAULT_VALUE.paginaAtual
  );
  const authorization2 = useAuth()
  

  return (
    <AuthorizationContext.Provider value={{ paginaAtual,authorization2, setPaginaAtual }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export default ContextProvider;
