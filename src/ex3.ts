class ContaCorrente {
    private Numeroconta: string;
    private Nomecorrentistalista: string;
    private Saldo: number;

    constructor(Numeroconta: string, Nomecorrentistalista: string, Saldo: number) {
        this.Numeroconta = Numeroconta;
        this.Nomecorrentistalista = Nomecorrentistalista;
        this.Saldo = Saldo;
    }

    public AlterarNome(novoNome: string): void {
        this.Nomecorrentistalista = novoNome;
    }

    public Deposito(valor: number): void {
        if (valor > 0) {
            this.Saldo += valor;
        } else {
            console.log("O valor do depósito deve ser positivo!");
        }
    }

    public Saque(valor: number): void {
        if (valor > 0 && this.Saldo >= valor) {
            this.Saldo -= valor;
        } else if (valor <= 0) {
           console.log("O valor do saque deve ser positivo!");
        } else {
            console.log("Saldo insuficiente para realizar o saque!");
        }
    }

    public RetornarSaldo (): number {
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


