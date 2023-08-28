import axios from "axios";
interface Regiao {
  id: number;
  sigla: string;
  nome: string;
}

class Ibge {
  static async regioes(): Promise<Regiao[]> {
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/regioes";
    try {
      // o operador await faz esperar a requisição HTTP
      // usou-se o operador de desestruturação para obter apenas a propriedade data do JSON
      const { data } = await axios.get(url);
      return data;
    } catch (erro: any) {
      console.log(erro.message);
      return []; // o array será vazio em caso de falha
    }
  }
}

const r = Ibge.regioes();
r.then( (res) => console.log(res));
