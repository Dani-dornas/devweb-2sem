import { useContext, useState } from "react";
import contexto from "./Contexto";

function Entrada() {
    const [nome, setNome] = useState("");
    const {add} = useContext(contexto);

    return (
        <div>
            <label htmlFor="">Nome</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            <button onClick={() => add(nome)}>Salvar</button>
        </div>
    );
}

export default Entrada