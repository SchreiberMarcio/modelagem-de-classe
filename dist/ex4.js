"use strict";
class Calculadora {
    historico;
    constructor() {
        this.historico = [];
    }
    somar(a, b) {
        const resultado = a + b;
        this.Historico(`Somar: ${a} + ${b} = ${resultado}`);
        return resultado;
    }
    multiplicar(a, b) {
        const resultado = a * b;
        this.Historico(`Multiplicar: ${a} * ${b} = ${resultado}`);
        return resultado;
    }
    dividir(a, b) {
        if (b === 0) {
            this.Historico(`Dividir: ${a} / ${b} = Erro (divisão por zero)`);
            throw new Error("Divisão por zero não é permitida.");
        }
        const resultado = a / b;
        this.Historico(`Dividir: ${a} / ${b} = ${resultado}`);
        return resultado;
    }
    subtrair(a, b) {
        const resultado = a - b;
        this.Historico(`Subtrair: ${a} - ${b} = ${resultado}`);
        return resultado;
    }
    visualizarHistorico() {
        return this.historico;
    }
    Historico(operacao) {
        this.historico.push(operacao);
    }
}
const calculadora = new Calculadora();
console.log(calculadora.somar(2, 3));
console.log(calculadora.multiplicar(4, 5));
console.log(calculadora.subtrair(10, 7));
try {
    console.log(calculadora.dividir(8, 0));
}
catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    }
    else {
        console.error("Ocorreu um erro desconhecido.");
    }
    console.log(calculadora.dividir(8, 2));
    console.log(calculadora.visualizarHistorico());
}
