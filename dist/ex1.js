"use strict";
class Contador {
    valor;
    constructor() {
        this.valor = 0;
    }
    zerar() {
        this.valor = 0;
    }
    incrementar() {
        this.valor += 1;
    }
    retornarvalor() {
        return this.valor;
    }
}
const contador = new Contador();
console.log(contador.retornarvalor());
contador.incrementar();
console.log(contador.retornarvalor());
contador.zerar();
console.log(contador.retornarvalor());
