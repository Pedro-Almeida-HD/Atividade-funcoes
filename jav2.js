/*Escreva uma função chamada ehPar que receba um número como parâmetro e
retorne true se o número for par e false caso seja ímpar*/
/*Primeiramente eu achei mais facil por ser bem simples apenas não sabia como verificar se era par mas depois que é feito isto com o % 2 eu pude criar um if que retorna se % 2 for igual a 0 é par mas se não é false ai depois peço um número que é verificado em outro if else fora do escopo que chama a função e caso for true que o numero é par então exibe a mensagem*/
function ehPar(numero){
    if(numero % 2 ==0){
        return true
    }else{
        return false
    }
}
var numero =Number(prompt("Digite um número: "))
if(ehPar(numero)==true){
    console.log("O número " + numero + " é par")
}else{
    console.log("O número " + numero + " é ímpar")
}
