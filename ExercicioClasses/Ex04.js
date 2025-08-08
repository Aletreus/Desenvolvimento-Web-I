class Retangulo {
    constructor(largura, altura) {
      this.largura = largura;
      this.altura = altura;
    }
    calcularArea() {
      return this.largura * this.altura;
    }
  
    calcularPerimetro() {
      return 2 * (this.largura + this.altura);
    }
  }

  var Objeto = new Retangulo(10, 5);
  

  console.log("Área do Retângulo: " + Objeto.calcularArea());
  console.log("Perímetro do Retângulo: " + Objeto.calcularPerimetro());
