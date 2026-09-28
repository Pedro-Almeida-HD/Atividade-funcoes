/*Crie duas funções para avaliar o desempenho de um aluno:
a) calcularMediaArray(notas): recebe um array de números (notas) e retorna
a média aritmética simples dessas notas.
b) avaliarAluno(aluno): recebe um objeto aluno contendo as propriedades
nome e notas (onde notas é um array com 3 notas). A função deve chamar
internamente a função calcularMediaArray. Se a média for ≥ 60, retorna
"Aprovado", caso contrário, retorna "Reprovado". */
/*Foi mais dificil, tive que pedir um pouco de ajuda para a IA mas depois entendi melhor, primeiro recebo o nome do aluno em um objeto e as notas em um array com sistema de repetição e coloco as notas no objeto em uma função depois na outra eu calculo percorrendo o array e fazendo a media e depois em uma terceira função verifico a situação do aluno e por fim imprimo uma mensagem.*/
function leAluno(){
  const aluno ={
    nome: String(prompt("Digite o nome do aluno"))
  }   
  const nota = []
  for(let i = 0; i< 3; i++){
    nota[i] = Number(prompt(`Digite a ${i+1}º nota do aluno ${aluno.nome}`))
  }
  aluno.notas = nota
  return aluno
}
function calcularMediaArray(valores){
     let soma = 0
     for(let item of valores){
        soma += item
     }
     soma = soma/3
     return soma
}
function avaliarAluno(estudante){
  let resultado = calcularMediaArray(estudante.notas)
  if(resultado >= 60){
    let situacao = "Aprovado"
    return situacao
  } else{
    let situacao = "Reprovado"
    return situacao
  }
}
function imprimirSituacao(aluno, s){
  alert(`O aluno ${aluno.nome} está ${s}`)
}
let obj = leAluno()
let s = avaliarAluno(obj)
imprimirSituacao(obj, s)