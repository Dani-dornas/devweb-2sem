import axios from "axios";
const url = "http://servicodados.ibge.gov.br/api/v1/localidades/estados";
axios
  .get(url)
  .then(({ data }) => {
    data.forEach((elemento: any) => {
      console.log(elemento.nome, elemento.sigla);
    });
  })
  .catch((e) => console.log(e.message));
