import { createContext } from "react";

interface Props {
    lista: string[];
    add: (nome: string) => void;
}

const contexto = createContext({} as Props);
export default contexto;