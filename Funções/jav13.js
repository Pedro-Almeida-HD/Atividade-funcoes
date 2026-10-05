/*Crie uma função que apresente um menu ao usuário com as seguintes opções:
a. Converter de real para euro
b. Converter de euro para real
c. Converter de real para dólar
d. Converter de dólar para real
e. Fechar o programa.
O programa deve apresentar esse menu em loop até o usuário selecionar fechar
programa. Caso ele escolha outras opções, o usuário deve entrar com os dados
e o resultado deve ser mostrado na tela. Após mostrar o resultado da conversão
pedida, o programa volta para o menu */
/*Foi mediana pois eu não estava lembrando como montar um switch case, mas depois que eu pesquisei eu consegui entender, ai foi so criar uma função que quando chamada criasse uma variavel que mostrasse as opções e pedia pra escolher depois no switch calculava era pedido e calculado o valor pedido. */
function conversão(){
    let opcoes = Number(prompt("Digite a opção que deseja: \n 1.Converter de real para euro. \n 2.Converter de euro para real. \n 3.Converter de real para dólar. \n 4.Converter de dólar para real. \n 5.Fechar o programa."))
    switch(opcoes){
        case 1: 
            let realpEuro = Number(prompt("DIgite o valor a ser convertido: "))
            let euro = realpEuro * 5.88
            alert(`O resultado convertido é de ${euro}`)
            break;

        case 2: 
            let europReal = Number(prompt("Digite o valor a ser convertido: "))
            let real = europReal / 5.88 
            alert(`O resultado convertido é de ${real}`)
            break;

        case 3:
            let realpDolar = Number(prompt("Digite o valor a ser convertido: "))
            let dolar = realpDolar * 5.23
            alert(`O resultado convertido é de ${dolar}`)
            break;

        case 4:
            let dolarpReal = Number(prompt("Digite o valor a ser convertido: "))
            let real2 = dolarpReal / 5.23
            alert(`O resultado convertido é de ${real2}`)
            break;

        case 5: 
            alert(`Programa encerrado`)
            break;

        default: 
            alert(`Inválido`)
            break;
    }
    if(menu !== 5){
        conversão()
    }
}
 
conversão()
