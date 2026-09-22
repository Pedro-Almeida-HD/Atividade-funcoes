/*Escreva uma função chamada ehPar que receba um número como parâmetro e
retorne true se o número for par e false caso seja ímpar*/
/*A Atividade foi facil apenas precisava criar a funçao que pedisse um número  e verificasse usando % 2 == 0 se era par então é imprimido true se não false.*/
function ehPar(){
    var numero = Number(prompt("Digite um número: "))
    if(numero % 2 == 0){
        return true
    }else{
        return false
    }
}
console.log(ehPar())

