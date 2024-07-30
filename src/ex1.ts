class Contador {
  private valor: number;
  constructor() {
    this.valor = 0;
  }
  public zerar(): void {
    this.valor = 0;
  }

  public incrementar(): void {
    this.valor += 1;
  }

  public retornarvalor(): number {
    return this.valor;
  }
}

const contador = new Contador();
console.log(contador.retornarvalor());

contador.incrementar();
console.log(contador.retornarvalor());

contador.zerar();
console.log(contador.retornarvalor());