function criarCookie(nome, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + valor + "; " + dtExpira;
    //cookie final = nomeUsuario=nome; expires= Tue, 01 Jan 2115 12:00:00 UTC 
}

function lerCookie(nome){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

function verificarCookie(){
    var username=lerCookie("nomeUsuario");
    if(username != ""){
        alert("Bem vindo novamente " + username);
    }else{
        username =  prompt("Crie um nome de usuário:");
        password = prompt("Crie sua senha: ");
        if (username != "" && username != null){
            criarCookie("nomeUsuario", username, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
}
function alterar(){
    var username = prompt('Insira o username antigo: ')
    var username=lerCookie(username);
    apagarCookie(username);
    username =  prompt("Insira o novo nome de usuário: ");
    while(username == "" || username == null){
        username =  prompt("Insira o novo nome de usuário: ");
    }
    password = prompt("Digite a nova senha: ");
    while(password == "" || password == null){
        password =  prompt("Digite a nova senha: ");
    }
        if (username != "" && username != null){
            criarCookie(username, username, " Tue, 01 Jan 2115 12:00:00 UTC ");
    }
}

function apagarCookie(username){
    var username=lerCookie(username);
    criarCookie(username, username, " Tue, 01 Jan 2005 12:00:00 UTC ");
}

function cadastrar(){
    username =  prompt("Crie um nome de usuário:");
    password = prompt("Crie sua senha: ");
    if (username != "" && username != null){
        criarCookie(username, username, " Tue, 01 Jan 2115 12:00:00 UTC ");
    }
}




//Faça uma aplicação com login e senha onde o usuário pode se manter logado usando cookies.
//O usuário deve poder cadastrar novo usuário e senha e também alterar a senha do seu usuário.
//A aplicação deve também ter uma opção sair, que obriga o usuário a logar novamente na pró-
//xima vez que utilizar a aplicação.

var res = 1
while(res != 0){
    res = parseInt(prompt(`Insira a opção que deseja: \n[1] Cadastrar\n[2] Alterar Login/Senha\n[3] Remover Usuário\n[4] Atualizar`))
    switch(res){
        case 1:
            cadastrar()
            reload()
            break;
        case 2:
            alterar()
            reload()
            break;
        case 3:
            username = prompt("Escolha o usuário para remover: ")
            apagarCookie(username);
            reload()
            break;
        default:
            reload()
    }
}
