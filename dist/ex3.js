"use strict";
class ContaCorrente {
    Numeroconta;
    Nomecorrentistalista;
    Saldo;
    constructor(Numeroconta, Nomecorrentistalista, Saldo) {
        this.Numeroconta = Numeroconta;
        this.Nomecorrentistalista = Nomecorrentistalista;
        this.Saldo = Saldo;
    }
    AlterarNome(novoNome) {
        this.Nomecorrentistalista = novoNome;
    }
    Deposito(valor) {
        if (valor > 0) {
            this.Saldo += valor;
        }
        else {
            console.log("O valor do depósito deve ser positivo!");
        }
    }
    Saque(valor) {
        if (valor > 0 && this.Saldo >= valor) {
            this.Saldo -= valor;
        }
        else if (valor <= 0) {
            console.log("O valor do saque deve ser positivo!");
        }
        else {
            console.log("Saldo insuficiente para realizar o saque!");
        }
    }
    RetornarSaldo() {
        return this.Saldo;
    }
}
const MinhaConta = new ContaCorrente("78456-8", "Carlos Passos", 0);
console.log(MinhaConta.RetornarSaldo());
MinhaConta.Deposito(100);
console.log(MinhaConta.RetornarSaldo());
MinhaConta.Saque(50);
console.log(MinhaConta.RetornarSaldo());
MinhaConta.AlterarNome("Carlos Passos Jr.");
console.log(MinhaConta);
MinhaConta.Saque(50);
console.log(MinhaConta);
