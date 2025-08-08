
function criarCookie(nome, valor, expira) {
    var dtExpira = "expires=" + expira;
    document.cookie = nome + "=" + valor + "; " + dtExpira;
}

function lerCookie(nome) {
    var vnome = nome + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(vnome) == 0) {
            return c.substring(vnome.length, c.length);
        }
    }
    return "";
}

function verificarCookie() {
    var estilo = lerCookie("estilo");
    var reverso = lerCookie("reverso");
    if ( estilo != "" && reverso != "") {
        return {estilo, reverso };
    } else {
        var estilo = prompt("Escolha um estilo de exibição:\n[1] Maiúscula\n[2] Minúscula\n[3] Alternada");
        var reverso = prompt("Deseja ver a palavra ao contrário?\n[1] Sim\n[2] Não");
        if (estilo != "" && reverso != "") {
            criarCookie("estilo", estilo, "Tue, 01 Jan 2115 12:00:00 UTC");
            criarCookie("reverso", reverso, "Tue, 01 Jan 2115 12:00:00 UTC");
        }
        return {estilo, reverso };
    }
}

function alternado(palavra) {
    var lista = []
    for (let i in palavra) {
        if (i % 2 == 0) {
            lista.push(palavra[i].toUpperCase());
        } else {
            lista.push(palavra[i].toLowerCase());
        }
    }
    return lista.join('');
}

function exibirPalavra(palavra) {
    var { estilo, reverso } = verificarCookie();
    if (estilo == "1") {
        palavra = palavra.toUpperCase();
    } else if (estilo == "2") {
        palavra = palavra.toLowerCase();
    } else if (estilo == "3") {
        palavra = alternado(palavra);
    }

    if (reverso == "1") {
        palavra = palavra.split('').reverse().join('');
    }
    alert(palavra);
    var mudarConfig = prompt("Deseja alterar as configurações?\n[1] Sim\n[2] Não");

    if (mudarConfig == "1") {
        alterarConfiguracoes();
    }
}

function alterarConfiguracoes() {
    var novoEstilo = prompt("Escolha um estilo de exibição:\n[1] Maiúscula\n[2] Minúscula\n[3] Alternada");
    var novoReverso = prompt("Deseja ver a palavra ao contrário?\n[1] Sim\n[2] Não");
    if (novoEstilo != "" && novoReverso != "") {
        criarCookie("estilo", novoEstilo, "Tue, 01 Jan 2115 12:00:00 UTC");
        criarCookie("reverso", novoReverso, "Tue, 01 Jan 2115 12:00:00 UTC");
        alert("Configurações atualizadas!");
    }
    
}

function apagarCookie(nome) {
    var expira = "Tue, 01 Jan 2005 12:00:00 UTC"; 
    criarCookie(nome, "", expira);
}

function novoProcesso() {
    var palavra = prompt('Digite a palavra:');
    exibirPalavra(palavra);
}

novoProcesso();
