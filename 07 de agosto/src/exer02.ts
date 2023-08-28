//EXER 02

//import formatar from "./exercicio1";
/*
const nomes = ["Ana","Pedro","Lucas","Maria"];
for(let i = 0; i < nomes.length; i++){
console.log(x(nomes[i]));
}
*/

import x from "./index";
const nomes = ["Ana","Pedro","Lucas","Maria"];
nomes.forEach((item, indice) => console.log(indice + ':' + x(item)));