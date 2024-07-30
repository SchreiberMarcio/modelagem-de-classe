"use strict";
class Carro {
    consumoPorKm;
    nivelGasolina;
    constructor(consumoPorKm) {
        this.consumoPorKm = consumoPorKm;
        this.nivelGasolina = 0;
    }
    adicionarGasolina(litros) {
        if (litros <= 0) {
            console.log("A quantidade de gasolina deve ser positiva.");
            return;
        }
        this.nivelGasolina += litros;
        console.log(`Adicionados ${litros.toFixed(2)} litros de gasolina. Nível atual: ${this.nivelGasolina.toFixed(2)} litros.`);
    }
    andar(distancia) {
        if (distancia <= 0) {
            console.log("A distância deve ser positiva.");
            return;
        }
        const consumoNecessario = distancia / this.consumoPorKm;
        if (consumoNecessario > this.nivelGasolina) {
            console.log("Não há gasolina suficiente para completar a viagem.");
            return;
        }
        this.nivelGasolina -= consumoNecessario;
        console.log(`Dirigido ${distancia.toFixed(2)} km. Nível de gasolina restante: ${this.nivelGasolina.toFixed(2)} litros.`);
    }
    obterGasolina() {
        return this.nivelGasolina.toFixed(2);
    }
}
const meuFusca = new Carro(50);
meuFusca.adicionarGasolina(20);
meuFusca.andar(500);
console.log(meuFusca.obterGasolina());
