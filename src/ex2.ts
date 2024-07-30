class Bola {
    private cor: string;
    private circunferencia: number;
    private material: string;

    constructor(cor: string, circunferencia: number, material: string) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }
    public trocarCor(novaCor: string): void {
        this.cor = novaCor;
    }

    public mostraCor(): string {
        return this.cor;
    }
}

const minhaBola = new Bola("vermelha", 78, "couro");

console.log(minhaBola.mostraCor());

minhaBola.trocarCor("Azul");

console.log(minhaBola.mostraCor());
