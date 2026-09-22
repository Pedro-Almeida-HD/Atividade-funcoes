/*Crie uma função chamada calcularAreaRetangulo que receba dois parâmetros:
base e altura. A função deve calcular e retornar o valor da área (área = base ×
altura).*/
/*Primeiramente não tive muita dificuldade mas eu tive que refazer a questão pois eu não estava pedindo os valores dentro da propria mas não foi tão dificil apenas crio as variaveis do parametro dentro da função e calculo a variavel area dentro dela e retorno para ela então eu peço a função no final.*/
function calcularAreaRetangulo(base, altura){
    var base = Number(prompt("Qual a base do retângulo: "))
    var altura = Number(prompt("Qual a altura do retângulo: "))
    var area = base * altura
    return area
}
console.log("A area do retangulo é " + calcularAreaRetangulo())