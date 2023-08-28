const item = (entrada: string): string => `\t<li>${entrada}</li>\n`;

function listar(elementos: string[]): string {
  let soma = elementos.reduce(function (total, e) {
    return total + item(e);
  }, "");
  return `<ul>\n${soma}</ul>\n`;
}

const frutas = ["Manga", "Laranja", "Maça", "Uva"];
const resultado = listar(frutas);
console.log(resultado);
