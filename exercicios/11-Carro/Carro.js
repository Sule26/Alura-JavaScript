export class Carro {
    
    constructor(consumo) {
        this.consumo = consumo
        this.combustivel = 0
    }

    adicionarCombustivel(litros) {
        this.combustivel += litros
    }

    obterGasolina() {
        console.log(`Quantidade de combustivel: ${this.combustivel}`)
    }

    andar(km) {
        if (km > (this.combustivel * this.consumo)) {
            console.log(`O máximo que o carro conseguiu andar com o combustivel atual foi ${(this.combustivel * this.consumo)} KM`)
            this.combustivel = 0
        } else {
            this.combustivel -= km * this.consumo
        }
    }
}
