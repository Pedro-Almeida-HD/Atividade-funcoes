/*Crie uma função chamada calcularJurosSimples que receba três parâmetros:
capital, taxa (em porcentagem) e tempo (em meses). A função deve calcular e
retornar o valor dos juros:
juros = capital × (
taxa
100 ) × tempo*/
/*A questão foi bem facil apenas precisava pedir o capital taxa e tempo em meses em funções diferentes então calculo o juros em outra função e imprimo em outra, não tive nenhuma dificuldade */
function receberCapital(){
    let capital = Number(prompt("Qual o capital ? "))
    return capital 
}
function receberTaxa(){
    let taxa = Number(prompt("Qual a taxa de juros ?"))
    return taxa
}
function receberTempo(){
    let tempo = Number(prompt("Quantos meses a taxa de juros se acumulou ? "))
    return tempo
}
function calcularJurosSimples(cap, tax, temp){
    let juros = cap * (tax/100) * temp
    return juros 
}
function imprimirJuros(juros){
    console.log("O juros ficou no valor de R$"+juros)
}
let cap = receberCapital()
let tax = receberTaxa()
let temp = receberTempo()
let juros = calcularJurosSimples(cap, tax, temp)
imprimirJuros(juros)
