class Matematica {
  soma(valorA, valorB) {
    return valorA + valorB;
  }

  subtracao(valorA, valorB) {
    return valorA - valorB;
  }
}

var instancia = new Matematica();

var resultado = instancia.soma(4, 7);
var resultado2 = instancia.subtracao(4, 7);
console.log(resultado);
console.log(resultado2);
