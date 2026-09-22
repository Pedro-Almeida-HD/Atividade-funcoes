/*Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura
em Celsius e retorne a conversão para Fahrenheit (F = (C × 1.8) + 32).*/ 
/*A questão estava fácil  era preciso apenas criar a função que calcule o valor da temperatura para fahrenheit então é pedido a temperatura em celsius e depois quando é chamado a temperatura em farenheit  chama  a função e depois imprimi a variável farenheit*/
function celsiusParaFahrenheit(celsius){
    return (celsius * 1.8) + 32
}
var celsius = Number(prompt("Digite a temperatura em Celsius: "))
var farenheit = celsiusParaFahrenheit(celsius)
console.log("A temperatura em fahrenheit é: " + farenheit)