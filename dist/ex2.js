"use strict";
class Bola {
    cor;
    circunferencia;
    material;
    constructor(cor, circunferencia, material) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }
    trocarCor(novaCor) {
        this.cor = novaCor;
    }
    mostraCor() {
        return this.cor;
    }
}
const minhaBola = new Bola("vermelha", 78, "couro");
console.log(minhaBola.mostraCor());
minhaBola.trocarCor("Azul");
console.log(minhaBola.mostraCor());
