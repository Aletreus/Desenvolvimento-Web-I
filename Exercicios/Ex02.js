var lista = []

function adicionar() {
    var valor = prompt('Insira os valores separados por ","');
    lista = lista.concat(valor.split(',').map(Number));
    //.concat serve para juntar os valores adicionais com os que ja estão na lista.
}

function media() {
    var soma = 0;
    for (var c = 0; c < lista.length; c++) {
        soma = soma + lista[c];
    }
    return soma / lista.length;
}

var res = '1';
var numeros = prompt("Digite uma lista de números separados por ','");
lista = numeros.split(',').map(Number); 
while (res === '1') {
    res = prompt(`Lista Atual: ${lista}\n[1] Para adicionar um valor.\n[2] Para Ver a Média`);
    
    switch (res) {
        case '1':
            adicionar();
            break;
        case '2':
            var resultado = media();
            break;
    }
}

document.write(`Lista: ${lista} Média: ${resultado}`);
