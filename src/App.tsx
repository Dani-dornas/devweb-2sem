import { useState } from "react";
import Entrada from "./Entrada";
import Saida from "./Saida";
import contexto from "./Contexto";


function App() {
  const [lista, setLista] = useState([] as string[]);

  function add(nome: string) {
    const temp = [...lista, nome];
    setLista(temp);
  }

  return (
    <div>
      <contexto.Provider value={{ lista, add }}>
        <Entrada />
        <Saida />
      </contexto.Provider>
    </div>
  );
}

export default App;
