/*Crie duas funções para processar o valor de uma venda:
a) aplicarDesconto(valor, percentual): recebe o valor e a porcentagem de
desconto, retornando o valor com o desconto aplicado.
b) processarVenda(valorBruto): recebe o valor bruto. Se for maior que 100,
chama internamente a função aplicarDesconto (com 10% de desconto) e
retorna o valor ajustado. Caso contrário, retorna o valor bruto sem
alterações.*/
/*A questão não foi difícil mas tive um pouco de dificuldade em fazer a segunda função mas depois de tentar algumas coisas eu consegui, também tive alguns problemas pois esqueci de retornar algum valor na primeira função para o funcionamento da segunda, mas não foi algo difícil, eu tive que fazer a primeira função pedir o valor e o desconto depois disso eu calculo e imprimo e por fim retorno o valor final tudo isso em uma função com 4 outras funções dentro dela, depois chamo a segunda função que chama uma função que verifica se o valor é maior que 100, se for aplica um desconto que é feito com outra função se não o valor continua o mesmo então imprimo o valor retornado.*/
function valorBruto(){
    function levalor(){
        let valor = Number(prompt("Qual o valor da compra ? "))
        return valor
    }
    function ledesconto(){
        let percentual = Number(prompt("Qual o percentual de desconto da compra ?"))
        return percentual
    }
    function aplicarDesconto(v, p){
        let valorFinal = v * (1 - p/100)
        return valorFinal
    }
    function imprimirValorFinal(vf){
        alert(`O valor final é de R$${vf}`)
    }
    let v = levalor()
    let p = ledesconto()
    let vf = aplicarDesconto(v, p)
    imprimirValorFinal(vf)
    return vf
}
let vb = valorBruto()

function processarVenda(vb){
    function aplicandoDesconto(){
        let t = vb * (1 - 10/100)
        return t
    }
    function verificaçãodoValorBruto(vb){
        if(vb >= 100){
            let total = aplicandoDesconto()
            return total
        }else{
            let total = vb
            return total
        }
    }
    function imprimirTotalcomousemDesconto(final){
        alert(`O total é R$${final}`)
    }
    let final = verificaçãodoValorBruto(vb)
    imprimirTotalcomousemDesconto(final)
}
processarVenda(vb)