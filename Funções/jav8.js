/*Crie duas funções para autenticação de acesso:
a) validarSenha(senha): retorna true se a string senha tiver pelo menos 6
caracteres, ou false caso contrário.
b) autenticarUsuario(usuario, senha): chama internamente a função
validarSenha. Se a senha for válida, retorna "Acesso concedido para
[usuario]". Caso contrário, retorna "Senha muito curta para o usuário
[usuario]". */
/*Eu tive mais dificuldade, e tive que perguntar a ia oque havia de errado, e descobri que era apenas erros de escrita, e falta de algumas letras mas consegui, eu criei uma função que recebe a senha e valida ela verificando a quantidade de letras depois em outra função recebo o usuário e caso a senha seja true então exibe a mensagem pedida e caso false mostre a outra mensagem.*/
function validandoSenha(){
    function lesenha(){
        let senha = String(prompt("Qual a sua senha ? "))
        return senha 
    }
    function validarSenha(s){
        if(s.length >= 6){
            return true
        }else{
            return false
        }
    }
    let s = lesenha()
    return validarSenha(s)
}
function autenticandoUsuario(){
    function leusuario(){
        let usuario = String(prompt("Qual o seu nome ? "))
        return usuario
    }
    function autenticarSenha(u){
        if(validandoSenha() == true){
            alert(`Acesso concedido para o usuário ${u}`)
        }else{
            alert(`A senha é muito curta para o usuário ${u}`)
        }
    }
    let u = leusuario()
    autenticarSenha(u)
}
autenticandoUsuario()