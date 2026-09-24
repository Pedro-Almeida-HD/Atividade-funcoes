/*Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura
em Celsius e retorne a conversão para Fahrenheit (F = (C × 1.8) + 32). */
/*Achei facil apenas tive que criar uma função que quando for chamada peça o valor em celsius e armazene em uma variavel depois em outra variavel calculo o valor na formula e returno fahrenheit.*/
function celsiusParaFahrenheit(){
    let celsius = Number(prompt("Qual a temperatura em celsius ? "))
    let Fahrenheit = (celsius * 1.8) + 32
    return Fahrenheit
}
console.log(celsiusParaFahrenheit())