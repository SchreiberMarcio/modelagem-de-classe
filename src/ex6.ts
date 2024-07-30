class Carro {
    private consumoPorKm: number; 
    private nivelGasolina: number; 
  
    constructor(consumoPorKm: number) {
      this.consumoPorKm = consumoPorKm;
      this.nivelGasolina = 0;
    }
  
    public adicionarGasolina(litros: number): void {
      if (litros <= 0) {
        console.log("A quantidade de gasolina deve ser positiva.");
        return;
      }
      this.nivelGasolina += litros;
      console.log(`Adicionados ${litros.toFixed(2)} litros de gasolina. Nível atual: ${this.nivelGasolina.toFixed(2)} litros.`);
    }
  
    public andar(distancia: number): void {
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
  
    public obterGasolina(): string {
      return this.nivelGasolina.toFixed(2);
    }
  }
  
  const meuFusca = new Carro(50);
  meuFusca.adicionarGasolina(20);
  meuFusca.andar(500);
  console.log(meuFusca.obterGasolina());
  