import { useContext, createContext } from "react";
import axios from "axios";
const context = createContext();

export function AxiosProvider({ children }) {
  const api = axios.create({
    baseURL: "http://localhost:3333",
  });

  return <context.Provider value={api}>{children}</context.Provider>;
}

export function useAxios() {
  return useContext(context);
}
