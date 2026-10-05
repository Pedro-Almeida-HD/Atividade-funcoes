/*Crie duas funções para gerenciar a fila de reprodução de um usuário: 
• a) converterParaSegundos(minutos, segundos): Recebe os minutos e 
segundos de uma faixa e retorna a duração total convertida apenas para 
segundos (totalSegundos = (minutos × 60) + segundos). 
• b) calcularTempoPlaylist(playlist): Recebe um array de objetos (onde cada 
objeto é uma música com as propriedades {titulo, minutos, segundos}). A 
função deve percorrer a lista de músicas, chamar internamente a função 
converterParaSegundos para cada faixa e retornar a duração total de toda a 
playlist em segundos.*/
/*Foi bem facil, apenas tive que criar uma função que pedisse a quantidade de musicas e depois com um for pedia as informações da música e depois colocava tudo em um array de objeto então em outra função convertia os minutos para segundos e depois em mais outra calculava o tempo da play list com um for, e imprimia em uma frase.*/
function receberArrayObj(){
    const arrayObj = []
    let qtd = Number(prompt("Digite a quantidade de músicas na playlist:"))

    for(let i = 0; i < qtd; i++){
    const obj = {
        titulo: prompt(`Digite o titulo da ${i + 1}ª música: `),
        minutos: Number(prompt(`Digite a quantidade de minutos que tem a ${i + 1}ª música: `)),
        segundos: Number(prompt(`Digite a quantidade de segundos restantes da ${i + 1}ª música: `)),
    }
    arrayObj.push(converterParaSegundos(obj))
    }
    return arrayObj
}

function converterParaSegundos(play){
    let totalS = (play.minutos * 60) + play.segundos
    return totalS
}

function calcularTempoPlaylist(play){
    let totalPlay = 0
    for(let i = 0; i < play.length; i ++){
        totalPlay += play[i]
    }
    return totalPlay
}

function imprimirResultado(resultado){
    console.log(`O tempo total da playlist em segundos é de ${resultado} segundos!`)
}

let play = receberArrayObj()
let resultado = calcularTempoPlaylist(play)
imprimirResultado(resultado)