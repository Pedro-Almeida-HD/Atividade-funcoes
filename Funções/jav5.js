/*Crie uma função chamada somarElementos que receba um array de números
como parâmetro, percorra o vetor, some todos os valores e retorne o total.*/
/*A questão foi mediana, pois eu tive dúvidas na hora de usar os arrays e somar o conteúdo dentro deles, mas tirando isso não tive muitos problemas, primeiro eu recebe os numero de elementos em uma função que então é armazenado em uma variável que é retornada para outra variável fora da função então na próxima função eu criei um array usando a quantidade de elementos como parâmetro e fiz essa quantidade ser percorrida por um for que dava push adicionando os elementos para o array que é retornado, depois é igualado a outra variável fora da função que é usada como parâmentro para a outra função de soma dos elementos que tive um pouco de dificuldade pois não lembrava como fazia mas depois descobri que precisava criar uma varíavel e igualala a zero e então com um for fazia ela somar cada elemento do array e depois era retornada para que fosse impressa.*/
function receberElementos(){
    let quantidade = Number(prompt("Quantos elementos deseja adicionar ? "))
    return quantidade
}
function percorrerElementos(quantidade){
    let elementos = []
    let qtds = quantidade
    for(let i = 0; i < qtds; i++ ){
        let elemento = Number(prompt("Digite o elemento " + (i + 1) + " : "))
        elementos.push(elemento)
    }
    return elementos
}
function somarElementos(el){
    let soma = 0
    for(let i = 0; i < el.length; i++){
        soma += el[i]
    }
    return soma
}
function imprimirSoma(soma){
    console.log(soma)
}
let quantidade = receberElementos()
let el = percorrerElementos(quantidade)
let soma = somarElementos(el)
imprimirSoma(soma)