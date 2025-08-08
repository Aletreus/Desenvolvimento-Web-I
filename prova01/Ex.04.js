function formatar(nome) {
    const palavrasIgnoradas = ["de", "do", "da"]; 
    var palavras = nome.split(' ');
    for (var i = 0; i < palavras.length; i++) {
        if (!palavrasIgnoradas.includes(palavras[i].toLowerCase())) {
            palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substring(1).toLowerCase();
        }
    }
    return palavras.join(' '); // retornar a lista para uma string normal
}
var nome = formatar(prompt('Digite o nome completo: '));
alert(nome) 
