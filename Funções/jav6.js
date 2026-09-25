/*Crie uma função chamada formatarPessoa que receba um objeto representando
uma pessoa com as propriedades nome, idade e profissao. A função deve retornar
uma frase formatada no padrão: "Olá, meu nome é [nome], tenho [idade] anos e
trabalho como [profissao]." */
/*Eu tive pouca dificuldade pois estava com dificuldade na parte de objetos pois não lembrava como se escrevia um mas depois de ver no w3schools consegui fazer a questão, primeiro fiz 3 funções para pedir o nome idade e profissão da pessoa então retorno tudo isso e crio variaveis fora das funções para igualar as respostas a elas, então em uma função crio um objeto onde essas variáveis são usadas para colocar as caracteristcas no objeto, então imprimo tudo em uma ultima função. */
function receberNome(){
    let nome = prompt("Qual o seu primeiro nome ? ")
    return nome
}
function receberIdade(){
    let idade = Number(prompt("Qual a sua idade ? "))
    return idade
}
function receberProfissao(){
    let profissao = prompt("Qual a sua profissão ? ")
    return profissao
}
function formatarPessoa(n, i, p){
    let pessoa = {
        nome: n,
        idade: i,
        profissão: p,
    }
    return pessoa
}
function imprimirFrase(){
    console.log(`Olá, meu nome é ${individuo.nome}, tenho ${individuo.idade} ano e trabalho como ${individuo.profissão}.`)
}

let n = receberNome()
let i = receberIdade()
let p = receberProfissao()
let individuo = formatarPessoa(n, i, p)
imprimirFrase(individuo)