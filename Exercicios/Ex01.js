
function depositar(){
    var deposito = prompt('Insira o Valor de depósito: ')
    while(deposito > 1000){
        var deposito = prompt('O valor de depósito não pode ser maior que R$1000\n Insira o valor de depósito: ')
    }
    window.alert(`O valor de R$${deposito} foi adicionado a sua conta`)
    saldo = saldo + deposito
}
function sacar(){
    var saque = prompt('Insira o valor de saque: ')
    while(saque > saldo){
        var saque = prompt('O valor de saque não pode ser maior que seu saldo\nInsira o valor de saque: ')
    }
    window.alert(`O valor de R$${saque} foi retirado da sua conta.`)
    saldo = saldo - saque
}

var nome = prompt('NOME: ')
var conta = prompt('Numero da Conta: ')
var saldo = prompt('Saldo: ')
var res = prompt('[1] Para depositar \n[2] Para sacar\n[3] Sair.')
switch(res){
    case '1':
        depositar()
        break;
    case '2':
        sacar()
        break;
    case '3':
        break
}

document.write(`Nome: ${nome}, Numero da Conta: ${conta}, Saldo: R$${saldo}`)
