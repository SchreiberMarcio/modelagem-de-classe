class Calculadora {
  private historico: string[];

  constructor() {
    this.historico = [];
  }

  public somar(a: number, b: number): number {
    const resultado = a + b;
    this.Historico(`Somar: ${a} + ${b} = ${resultado}`);
    return resultado;
  }

  public multiplicar(a: number, b: number): number {
    const resultado = a * b;
    this.Historico(`Multiplicar: ${a} * ${b} = ${resultado}`);
    return resultado;
  }

  public dividir(a: number, b: number): number {
    if (b === 0) {
      this.Historico(
        `Dividir: ${a} / ${b} = Erro (divisão por zero)`
      );
      throw new Error("Divisão por zero não é permitida.");
    }
    const resultado = a / b;
    this.Historico(`Dividir: ${a} / ${b} = ${resultado}`);
    return resultado;
  }

  public subtrair(a: number, b: number): number {
    const resultado = a - b;
    this.Historico(`Subtrair: ${a} - ${b} = ${resultado}`);
    return resultado;
  }

  public visualizarHistorico(): string[] {
    return this.historico;
  }

  private Historico(operacao: string): void {
    this.historico.push(operacao);
  }
}

const calculadora = new Calculadora();

console.log(calculadora.somar(2, 3)); 
console.log(calculadora.multiplicar(4, 5)); 
console.log(calculadora.subtrair(10, 7)); 
try {
  console.log(calculadora.dividir(8, 0)); 
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message); 
  } else {
    console.error("Ocorreu um erro desconhecido.");
  }
  console.log(calculadora.dividir(8, 2)); 

  console.log(calculadora.visualizarHistorico());

}
