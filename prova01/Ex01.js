/*
Receber um código binário e converter em palavra. Cada letra em
binário terá um total de 5 dígitos. É permitido receber a entrada com algum
limitador entre as letras, porém terá desconto na nota.
Exemplo de entrada:
001000100100001
Saída:
Dia
*/

function binario(code){
    switch(code){
        case '00001':
            return 'A'
            break;
        case '00010':
            return 'B'
            break;
        case '00011':
            return 'C'
            break;
        case '00100':
            return 'D'
            break;
        case '00101':
            return 'E'
            break;
        case '00110':
            return 'F'
            break;
        case '00111':
            return 'G'
            break;
        case '01000':
            return 'H'
            break;
        case '01001':
            return 'I'
            break;
        case '01010':
            return 'J'
            break;
        case '01011':
            return 'K'
            break;
        case '01100':
            return 'L'
            break;
        case '01101':
            return 'M'
            break;
        case '01110':
            return 'N'
            break;
        case '01111':
            return 'O'
            break;
        case '10000':
            return 'P'
            break;
        case '10001':
            return 'Q'
            break;
        case '10010':
            return 'R'
            break;
        case '10011':
            return 'S'
            break;
        case '10100':
            return 'T'
            break;
        case '10101':
            return 'U'
            break;
        case '10110':
            return 'V'
            break;
        case '10111':
            return 'W'
            break;
        case '11000':
            return 'X'
            break;
        case '11001':
            return 'Y'
            break;
        case '11010':
            return 'Z'
            break;
    }
}


var codigo = prompt('Insira o código binário: ');
var palavra = ''
var letra = []
var x = 0
for(var y = 0; y <= codigo.length; y++){
    x++
    letra.push(codigo[y]);
    if(x == 5){
        palavra += (`${binario(`${letra[0]}${letra[1]}${letra[2]}${letra[3]}${letra[4]}`)}`)
        letra = []
        x = 0
    }

}

alert(`A palavra é: ${palavra}`)
