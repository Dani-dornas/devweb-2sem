import x from "./index";

const carros = ["Gol","Corsa","Uno","Fiesta"];
const motos = ["CG", "XRE", "Biz"];
const veiculos = [...carros, ...motos];

veiculos.forEach((item, indice) => console.log(indice + ':' + x(item)));