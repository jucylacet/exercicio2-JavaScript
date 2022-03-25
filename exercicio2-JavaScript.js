//Exercício Estruturas de Sequência

// 1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console ///

let nome = prompt ("Digite seu nome aqui:");
console.log("O seu nome é:" + nome);
alert( "O seu nome é: " + nome);

//  2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números.

let numero = parseInt(prompt('Digite um número:'));
let numero2 = parseInt(prompt('Digite outro número:'));

let resultado = (numero + numero2);

console.log(resultado);

// 3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.

let nota1 = parseInt(prompt("Digite aqui a primeira nota:"));
let nota2 = parseInt(prompt("Digita aqui a segunda nota:"));

let resultado = (nota1 + nota2) / 2;

console.log(resultado);

// 4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele.

let idade = parseInt (prompt("Digite o ano que você nasceu:"));
 let resultado = (2022- idade);
 console.log("A sua idade é: "  + resultado);

// 5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

let valor = parseInt (prompt("Digite o valor/hora:"));
let horas = parseInt (prompt("Digite o numero de horas de trabalho:"));

let resultado = (valor * horas) * 30;

console.log(resultado);

//  6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).

let numero = prompt("Digite aqui um número:");

let F= numero;
let C = (5*(F-32)) /9;

console.log("Farenheint", numero);
console.log("Graus", C)