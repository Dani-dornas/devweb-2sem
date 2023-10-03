import { useContext } from "react";
import contexto from "./Contexto";

function Saida() {
    const {lista} = useContext(contexto);

    return (
        <div>
            <p> Quantidade: {lista.length}</p>
            <ol>
                {
                    lista.map((item, i) => (
                        <li key={i} > {item} </li>
                    ))
                }
            </ol>
        </div>
    );
}

export default Saida