/*Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura
em Celsius e retorne a conversão para Fahrenheit (F = (C × 1.8) + 32). */
/*Eu achei a questão mediana pois ainda estou entendendo como funciona as funções ainda possuo dúvidas sobre o funcionamento dos parâmetros mas consegui fazer, pois so era necessário pedir o valor com a função lecelsius depois retornar e calcular para farenheit então retornar e imprimir a resposta em outra função*/
function lecelsius(){
    let c = Number(prompt("Qual a temperatura em celsius ? "))
    return c
}
function celsiusParaFahrenheit(celsius){
    let f = (celsius * 1.8) + 32
    return f
}
function imprimirResposta(Fahrenheit){
    alert(Fahrenheit)
}
let celsius = lecelsius()
let Fahrenheit = celsiusParaFahrenheit(celsius)
imprimirResposta(Fahrenheit)

