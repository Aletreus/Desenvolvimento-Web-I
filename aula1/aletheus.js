
//Ex.1


/*
var num = parseInt(prompt('Insira o número: '))
var divisoes = 0
for(var c = 0;c <= num; c++){
    if(num % c == 0){
        divisoes++
    }

}
if(divisoes != 2){
    document.getElementById("primeiro").innerHTML=`O número ${num} não é primo.`
}
else{
    document.getElementById("primeiro").innerHTML=`O número ${num} é primo.`
}
if(num % 2 == 0){
    document.getElementById("segundo").innerHTML=`O número ${num} é par.`
    }
else{
    document.getElementById("segundo").innerHTML=`O número ${num} é ímpar.`
}






//Ex.2

/*
var fibonacchi = [0, 1]
var x = 10
var auxiliar
for(var c = 0;c < x - 2; c++){
    auxiliar = fibonacchi[c] + fibonacchi[c + 1]
    fibonacchi[c + 2] = auxiliar
}
document.write(fibonacchi)
*/

//Ex.3

/*var auxi = prompt("")
var lista = auxi.split(",")
// OU:
*/
var lista = [];
var qt = parseInt(prompt('Insira a quantidade de números na lista: '))
for(var c = 0; c < qt; c++){
    n = parseInt(prompt("Digite um numero: "))
    lista[c] = n
}

var auxiliar;
for(var c = 0; c < lista.length; c++){
    for(var n = 0; n < lista.length; n++){
        if(lista[n] > lista[n + 1]){
            auxiliar = lista[n]
            lista[n] = lista[n+ 1]
            lista[n + 1] = auxiliar
        }
    }
}
document.write(lista)

//Ex.4
/*
var n1 = parseFloat(prompt('Insira o primeiro número: '))
var n2 = parseFloat(prompt('Insira o segundo número: '))
var op = [1,2,4,3,5]
var esc = parseFloat(prompt('Insira a operação que você deseja:\n[1] Adição\n[2] Subtração;\n[3] Multiplicação;\n[4] Divisão;\n[5] Potenciação.\nEscolha: '
))
var resultado = n1

if(esc == 1){
    resultado = n1 + n2
}
if(esc == 2){
    resultado = n1 - n2
}
if(esc == 3){
    resultado = n1 * n2
}
if(esc == 4){
    resultado = n1 / n2
}
if(esc == 5){
    for(var c = 1; c < n2; c++){
        resultado = resultado * n1
    }
}
document.write(`O resultado é ${resultado}.`)

//Ex.5
var nome = prompt('Insira o nome: ')
var idade = parseInt(prompt('Insira a idade: '))
var salario = parseInt(prompt('Insira o salario: '))
var sexo = prompt('Insira o sexo: ')
var estadocivil = prompt('Insira o Estado Civil: ')
if(nome.length < 3){
    document.getElementById("primeiro").innerHTML="O dado NOME está incorreto";
}
else{
    document.getElementById("primeiro").innerHTML="O dado NOME foi validado com sucesso.";
}

if(idade <= 0 || idade >= 150){
    document.getElementById("segundo").innerHTML="O dado IDADE está invalido.";
}
else{
    document.getElementById("segundo").innerHTML="O dado IDADE foi validado com sucesso.";
}
if(salario <= 0){
    document.getElementById("terceiro").innerHTML="O dado SALARIO está invalidado.";
}
else{
    document.getElementById("terceiro").innerHTML="O dado SALARIO foi validado com sucesso.";
}
if(sexo == 'f' || sexo == 'm'){
    document.getElementById("quarto").innerHTML="O dado SALARIO foi validado com sucesso.";
}
else{
    document.getElementById("quarto").innerHTML="O dado SALARIO está inválido.";
}
if(estadocivil == 's' || salario == 'c' || salario == 'd' || salario == 'v'){
    document.getElementById("quinto").innerHTML="O dado SALARIO foi validado com sucesso.";
}
else{
    document.getElementById("quinto").innerHTML="O dado SALARIO está inválido.";
}

*/
