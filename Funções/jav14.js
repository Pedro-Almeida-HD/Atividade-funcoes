/*Crie uma função chamada exibirResumoProduto que receba um objeto
representando um item do estoque com as propriedades nome, preco e quantidade.
A função deve retornar uma string formatada no padrão:
"Produto: [nome] | Preço: R$ [preco] | Estoque: [quantidade] unidades." */
/*Foi bem simples e facil apenas criei uma função que recebesse um objeto e suas caracteristicas, retornei, igualei a uma variavel então criei outra função que exibisse o a string formatada. */
function receberProduto(){
    let produto = {
        nome: prompt("Qual o nome do produto ? "),
        preco: Number(prompt("Qual o preco do produto ? ")),
        quantidade: Number(prompt("Qual a quantidade do produto ? ")),
    }
    return produto
}
function exibirResumoProduto(prdt){
    console.log(`Produto: ${prdt.nome} | Preço: R$${prdt.preco} | Estoque: ${prdt.preco} unidades.`)
}
let prdt = receberProduto()
exibirResumoProduto(prdt)