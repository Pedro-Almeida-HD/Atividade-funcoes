/* Crie uma função chamada calcularIMC que receba o peso (kg) e a altura (m). A
função deve calcular o IMC e retornar uma string com a classificação:
• IMC < 18.5: "Abaixo do peso"
• IMC entre 18.5 e 24.9: "Peso normal"
• IMC ≥ 25.0: "Sobrepeso" */
/*Foi Facil apenas criei uma função que pedisse altura e peso e armazenasse em variáveis e então calculei em outra variável e fazer um if e else que verificasse  como estava o IMC de uma pessoa. */
function calcularIMC(){
    let peso = Number(prompt("Qual o seu peso ? "))
    let altura = Number(prompt("Qual a sua altura ? "))
    let IMC = peso / (altura * altura)
    if(IMC > 25){
        return console.log("Sobrepeso")
    }if(IMC > 18.5 && IMC < 25){
        return console.log("Peso normal")
    }else{
        return console.log("Abaixo do peso")
    }
    
}
console.log(calcularIMC())