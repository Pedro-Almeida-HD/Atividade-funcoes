/*Escreva uma função chamada ehPar que receba um número como parâmetro e
retorne true se o número for par e false caso seja ímpar*/
/**/

function LeNumero(){
        let numero = Number(prompt("Digite um número: "))
        return numero
}

function ehPar(numero){
    if(numero % 2 == 0){
        return true
    }else{
        return false
    }
}

function imprimeResposta(r){
    if(r == true){
        alert("o numero eh par")
    }
}

let n = LeNumero()
let resposta = ehPar(n)
imprimeResposta(resposta)

