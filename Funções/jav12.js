/*Escreva uma função chamada verificarOrcamento que receba dois parâmetros:
valorProduto e saldoDisponivel. A função deve retornar true se o saldo for suficiente
para comprar o produto (saldo maior ou igual ao valor) e false caso contrário.*/
/* */
function receberValoProduto(){
    let produto = Number(prompt("Qual o valor do produto ? "))
    return produto
}
function receberSaldo(){
    let saldo = Number(prompt("Qual o saldo disponivel ? "))
    return saldo
}
function verificarOrcamento(prdt, saldo){
    if(saldo >= prdt){
        return true
    }else{
        return false
    }
}
function imprimirResultado(orcamento){
    console.log(orcamento)
}
let prdt = receberValoProduto()
let saldo = receberSaldo()
let orcamento = verificarOrcamento(prdt, saldo)
imprimirResultado(orcamento)