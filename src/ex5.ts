class BombaCombustivel {
  private tipoCombustivel: string;
  private valorLitro: number;
  private quantidadeCombustivel: number;

  constructor(
    tipoCombustivel: string,
    valorLitro: number,
    quantidadeCombustivel: number
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }

  public abastecerPorValor(valor: number): void {
    if (valor <= 0) {
      console.log("O valor a ser abastecido deve ser positivo.");
      return;
    }

    const litrosAbastecidos = valor / this.valorLitro;

    if (litrosAbastecidos > this.quantidadeCombustivel) {
      console.log("Não há combustível suficiente na bomba.");
      return;
    }

    this.quantidadeCombustivel -= litrosAbastecidos;
    console.log(
      `Foram abastecidos ${litrosAbastecidos.toFixed(
        2
      )} litros. Quantidade restante: ${this.quantidadeCombustivel.toFixed(
        2
      )} litros.`
    );
  }

  public abastecerPorLitro(litros: number): void {
    if (litros <= 0) {
      console.log("A quantidade de litros deve ser positiva.");
      return;
    }

    if (litros > this.quantidadeCombustivel) {
      console.log("Não há combustível suficiente na bomba.");
      return;
    }

    const valorTotal = litros * this.valorLitro;
    this.quantidadeCombustivel -= litros;
    console.log(
      `O valor a ser pago é R$ ${valorTotal.toFixed(
        2
      )}. Quantidade restante: ${this.quantidadeCombustivel.toFixed(2)} litros.`
    );
  }

  public alterarValor(novoValor: number): void {
    if (novoValor <= 0) {
      console.log("O valor do litro deve ser positivo.");
      return;
    }
    this.valorLitro = novoValor;
    console.log(
      `O valor do litro foi alterado para R$ ${this.valorLitro.toFixed(2)}.`
    );
  }

  public alterarCombustivel(novoTipo: string): void {
    this.tipoCombustivel = novoTipo;
    console.log(
      `O tipo de combustível foi alterado para ${this.tipoCombustivel}.`
    );
  }

  public alterarQuantidadeCombustivel(novaQuantidade: number): void {
    if (novaQuantidade < 0) {
      console.log("A quantidade de combustível não pode ser negativa.");
      return;
    }
    this.quantidadeCombustivel = novaQuantidade;
    console.log(
      `A quantidade de combustível foi alterada para ${this.quantidadeCombustivel.toFixed(
        2
      )} litros.`
    );
  }
}

const bomba = new BombaCombustivel("Gasolina", 5.5, 100);

bomba.abastecerPorValor(20);
bomba.abastecerPorLitro(10);
bomba.alterarValor(6.0);
bomba.alterarCombustivel("Álcool");
bomba.alterarQuantidadeCombustivel(200);
