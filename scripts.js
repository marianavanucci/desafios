console.log('oi');
console.log('tudo bem?');

// QUESTÃO 1

// Você possui um array A de dados com 1000 elementos, 
// todos eles números inteiros únicos que servem para 
// identificar clientes numa plataforma. Faça o que se pede:

// a) Escreva um algoritmo que permita ordenar esses elementos

var numberArray = [40, 1, 5, 200];

function compararNumeros(a, b) {
  return a - b;
}


console.log('numberArray:', numberArray.join());
console.log('Ordenada sem função de comparação:', numberArray.sort());
console.log('Ordenada com compararNumeros:', numberArray.sort(compararNumeros));


// b) Escreva um algoritmo que permita encontrar, 
// dentre esses 1000 elementos do array A,
// um elemento especificado pelo usuário.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element == 8);

console.log(found);
// expected output: 8




// c) Imagine que você possua outro array B com 1000 elementos também. 
// Escreva um código para retornar o elemento do array B a partir 
// do índice do elemento do array A encontrado no item anterior.







// // o array a ser ordenado
// var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// // array temporário que armazena os objetos com o índice e o valor para ordenação
// var mapped = list.map(function(el, i) {
//   return { index: i, value: el.toLowerCase() };
// })

// // ordenando o array mapeado contendo os dados resumidos
// mapped.sort(function(a, b) {
//   return +(a.value > b.value) || +(a.value === b.value) - 1;
// });

// // container para o resultado ordenado
// var result = mapped.map(function(el){
//   return list[el.index];
// });