/*Crie duas funções para cálculo total de um carrinho de compras:
• a) calcularSubtotalItem(item): Recebe um objeto item com as propriedades
preco e quantidade, e retorna o valor total do item (subtotal = preco ×
quantidade).
• b) calcularTotalCarrinho(carrinho): Recebe um array de objetos (itens do
carrinho). A função deve percorrer a lista, chamar internamente a função
calcularSubtotalItem para cada produto e retornar o valor total acumulado da
compra.*/
/*Eu tive mais facilidade nessa, apenas precisei criar uma função que pede a quantidade de produtos e coloca cada produto num array usando for depois em outras funções eu calculo o subtotal  o total do carrinho e imprimo o resultado.*/
function receberArrayObjetos(){
    const arrayObj = []
    let qtd = Number(prompt("Digite a quantidade de produtos do carrinho"))

    for(let i = 0; i < qtd; i++){
    const obj = {
        preco: Number(prompt(`Digite o preço do ${i + 1}º produto`)),
        quantidade: Number(prompt(`Digite a quantidade do ${i + 1}º produto`)),
    }
    arrayObj.push(calcularSubtotal(obj))
    }
    return arrayObj
}

function calcularSubtotal(obj){
    let sub = obj.preco * obj.quantidade  
    return sub
}

function calcularTotal(car){
    let somas = 0
    for(let i = 0; i < car.length; i++){
        somas += car[i]
    }
    return somas
}

function imprimirTotal(resultado){
    console.log(`O total da comprsa é de: ${resultado} R$`)
}

let car = receberArrayObjetos()
let resultado = calcularTotal(car)
imprimirTotal(resultado)
