/*
No algoritmo acima desenvolva uma função que receba em string e
converta novamente em binário.
*/



function binario(code){
    switch(code){
        case 'A' && 'a':
            return '00001'
            break;
        case 'B' && 'b':
            return '00010'
            break;
        case 'C' && 'c':
            return '00011'
            break;
        case 'D' && 'd':
            return '00100'
            break;
        case 'E' && 'e':
            return '00101'
            break;
        case 'F' && 'f':
            return '00110'
            break;
        case 'G' && 'g':
            return '00111'
            break;
        case 'H' && 'h':
            return '01000'
            break;
        case 'I' && 'i':
            return '01001'
            break;
        case 'J' && 'j':
            return '01010'
            break;
        case 'K' && 'k':
            return '01011'
            break;
        case 'L' && 'l':
            return '01100'
            break;
        case 'M' && 'm':
            return '01101'
            break;
        case 'N' && 'n':
            return '01110'
            break;
        case 'O' && 'o':
            return '01111'
            break;
        case 'P' && 'p':
            return '10000'
            break;
        case 'Q' && 'q':
            return '10001'
            break;
        case 'R' && 'r':
            return '10010'
            break;
        case 'S' && 's':
            return '10011'
            break;
        case 'T' && 't':
            return '10100'
            break;
        case 'U' && 'u':
            return '10101'
            break;
        case 'V' && 'v':
            return '10110'
            break;
        case 'W' && 'w':
            return '10111'
            break;
        case 'X' && 'x':
            return '11000'
            break;
        case 'Y' && 'y':
            return '11001'
            break;
        case 'Z' && 'z':
            return '11010'
            break;
    }
}

var palavra = prompt('Insira a palavra: ');
var codigo = ''
var letra = []
var x = 0
for(var y = 0; y <= palavra.length - 1; y++){
    letra.push(palavra[y]);
    codigo += (`${binario(`${letra}`)}`)
    letra = []
    

}

alert(`O código binário é: ${codigo}`)
