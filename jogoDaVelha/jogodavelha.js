function verificar(lista){
        if(lista[0][0] == lista[0][1] && lista[0][0] == lista[0][2] && lista[0][0] != '□'){ //Checar Horizontal
            alert('O jogo acabou.')
            console.log('O jogo acabou.')
        }else if(lista[1][0] == lista[1][1] && lista[1][1] == lista[1][2] && lista[1][0] != '□'){
            alert('O jogo acabou.')
            console.log('O jogo acabou.')
        }else if(lista[2][0] == lista[2][1] && lista[2][1] == lista[2][2] && lista[2][0] != '□'){
            alert('O jogo acabou.')
            console.log('O jogo acabou.')
        }else if(lista[0][0] == lista[1][0] && lista[1][0] == lista[2][0] && lista[0][0] != '□'){ //Checar Vertical
            alert('O jogo acabou.')
            console.log('O jogo acabou.')
        }else if(lista[0][1] == lista[1][1] && lista[1][1] == lista[2][1] && lista[0][1] != '□'){
            alert('O jogo acabou.')
            console.log('O jogo acabou.')
        }else if(lista[0][2] == lista[1][2] && lista[1][2] == lista[2][2] && lista[0][2] != '□'){
            alert('O jogo acabou.')
            console.log('O jogo acabou.')
        }else if(lista[0][0] == lista[1][1] && lista[1][1] == lista[2][2] && lista[0][0] != '□'){ //Checar Diagonal
            alert('O jogo acabou.')
            console.log('O jogo acabou.')
        }else if(lista[0][2] == lista[1][1] && lista[1][1] == lista[2][0] && lista[0][2] != '□'){
            alert('O jogo acabou.')
            console.log('O jogo acabou.')
        }else{
            var contador = 0;
            for(var i = 0; i < 3; i++){
                for(var c = 0; c < 3; c++){
                    if(lista[i][c] == 'X' || lista[i][c] == 'O'){
                        contador += 1
                    }
                }
            }
            if(contador == 9){
                alert('Deu Velha!!!!!!!!!!!!!!!!!!!!!')
                console.log('Deu Velha!!!!!!!!!!!!!!!!!!!!!')
            }
    }
}

function botao1(){
    const bt1 = document.getElementById('botao1')
    if(bt1.innerText == '.'){
        if(contadorTurno % 2 == 0){
            bt1.innerText = 'X'
            lista[0][0] = bt1.innerText
        }else{
            bt1.innerText = 'O'
            lista[0][0] = bt1.innerText
        }
        contadorTurno += 1
    }  
    verificar(lista)
}
function botao2(){
    const bt1 = document.getElementById('botao2')
    if(bt1.innerText == '.'){
        if(contadorTurno % 2 == 0){
            bt1.innerText = 'X'
            lista[0][1] = bt1.innerText
        }else{
            bt1.innerText = 'O'
            lista[0][1] = bt1.innerText
        }
        contadorTurno += 1
    }
    
    verificar(lista)
}
function botao3(){
    const bt1 = document.getElementById('botao3')
    if(bt1.innerText == '.'){
        if(contadorTurno % 2 == 0){
            bt1.innerText = 'X'
            lista[0][2] = bt1.innerText
        }else{
            bt1.innerText = 'O'
            lista[0][2] = bt1.innerText
        }
        contadorTurno += 1
    }
    
    verificar(lista)
}
function botao4(){
    const bt1 = document.getElementById('botao4')
    if(bt1.innerText == '.'){
        if(contadorTurno % 2 == 0){
            bt1.innerText = 'X'
            lista[1][0] = bt1.innerText
        }else{
            bt1.innerText = 'O'
            lista[1][0] = bt1.innerText
        } 
        contadorTurno += 1
    }
   
    verificar(lista)
}
function botao5(){
    const bt1 = document.getElementById('botao5')
    if(bt1.innerText == '.'){
        if(contadorTurno % 2 == 0){
            bt1.innerText = 'X'
            lista[1][1] = bt1.innerText
        }else{
            bt1.innerText = 'O'
            lista[1][1] = bt1.innerText
        }
        contadorTurno += 1
    }
    
    verificar(lista)
}
function botao6(){
    const bt1 = document.getElementById('botao6')
    if(bt1.innerText == '.'){
        if(contadorTurno % 2 == 0){
            bt1.innerText = 'X'
            lista[1][2] = bt1.innerText
        }else{
            bt1.innerText = 'O'
            lista[1][2] = bt1.innerText
        }
        contadorTurno += 1
    }
    
    verificar(lista)
}
function botao7(){
    const bt1 = document.getElementById('botao7')
    if(bt1.innerText == '.'){
        if(contadorTurno % 2 == 0){
            bt1.innerText = 'X'
            lista[2][0] = bt1.innerText
        }else{
            bt1.innerText = 'O'
            lista[2][0] = bt1.innerText
        }
        contadorTurno += 1
    }
    
    verificar(lista)
}
function botao8(){
    const bt1 = document.getElementById('botao8')
    if(bt1.innerText == '.'){
        if(contadorTurno % 2 == 0){
            bt1.innerText = 'X'
            lista[2][1] = bt1.innerText
        }else{
            bt1.innerText = 'O'
            lista[2][1] = bt1.innerText
        }
        contadorTurno += 1
    }
    
    verificar(lista)
}
function botao9(){
    const bt1 = document.getElementById('botao9')
    if(bt1.innerText == '.'){
        if(contadorTurno % 2 == 0){
            bt1.innerText = 'X'
            lista[2][2] = bt1.innerText
        }else{
            bt1.innerText = 'O'
            lista[2][2] = bt1.innerText
        }
        contadorTurno += 1
    }
    
    verificar(lista)
}

var contadorTurno = 0
var lista = [['□','□','□'],['□','□','□'],['□','□','□']]
