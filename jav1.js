/*Crie uma função chamada calcularAreaRetangulo que receba dois parâmetros:
base e altura. A função deve calcular e retornar o valor da área (área = base ×
altura).*/
/*Eu tive um pouco de dificuldade pois não sabia nada de função mas depois de entender como funciona um parâmetro eu fiz com que sempre que chamasse a varíavel de area chamasse a função para calcular a area do retângulo após digitar os valores pedidos.*/
var base = Number(prompt("Digite a base do retângulo: "))
var altura = Number(prompt("Digite a altura do retângulo: "));
var area = 0
function calcularAreaRetangulo(base,altura){
    return base * altura
}
area = calcularAreaRetangulo(base,altura)
console.log("A área do retângulo é: " + area)