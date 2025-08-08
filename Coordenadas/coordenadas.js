function obterCoordenadas() {
    let x1 = parseFloat(prompt("Digite a coordenada X do primeiro ponto do quadrado 1:"));
    let y1 = parseFloat(prompt("Digite a coordenada Y do primeiro ponto do quadrado 1:"));
    let x2 = parseFloat(prompt("Digite a coordenada X do segundo ponto do quadrado 1:"));
    let y2 = parseFloat(prompt("Digite a coordenada Y do segundo ponto do quadrado 1:"));

    let x3 = parseFloat(prompt("Digite a coordenada X do primeiro ponto do quadrado 2:"));
    let y3 = parseFloat(prompt("Digite a coordenada Y do primeiro ponto do quadrado 2:"));
    let x4 = parseFloat(prompt("Digite a coordenada X do segundo ponto do quadrado 2:"));
    let y4 = parseFloat(prompt("Digite a coordenada Y do segundo ponto do quadrado 2:"));

    let resultado = verificarPosicaoQuadrados([x1, y1], [x2, y2], [x3, y3], [x4, y4]);
    
    document.write("Resultado: " + resultado);
}

function verificarPosicaoQuadrados(q11, q12, q21, q22) {
    let [x1, y1] = q11;
    let [x2, y2] = q12;
    let [x3, y3] = q21;
    let [x4, y4] = q22;

    let minX1 = Math.min(x1, x2);
    let maxX1 = Math.max(x1, x2);
    let minY1 = Math.min(y1, y2);
    let maxY1 = Math.max(y1, y2);

    let minX2 = Math.min(x3, x4);
    let maxX2 = Math.max(x3, x4);
    let minY2 = Math.min(y3, y4);
    let maxY2 = Math.max(y3, y4);

    if (minX1 <= minX2 && maxX1 >= maxX2 && minY1 <= minY2 && maxY1 >= maxY2) {
        return "Completamente dentro";
    }

    if (maxX2 < minX1 || minX2 > maxX1 || maxY2 < minY1 || minY2 > maxY1) {
        return "Fora";
    }

    return "Parcialmente dentro";
}

obterCoordenadas()
