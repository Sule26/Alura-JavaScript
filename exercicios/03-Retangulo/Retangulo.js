export class Retangulo {
    
    constructor(comprimento, largura) {
        this.comprimento = comprimento
        this.largura = largura
    }

    mudarLados(comprimento, largura) {
        this.comprimento = comprimento
        this.largura = largura
    }

    valorDosLados() {
        console.log(`Comprimento: ${this.comprimento} e largura: ${this.largura}`)
    }

    area() {
        let area = this.comprimento * this.largura
        console.log(`Area: ${area}`)
    }

    perimetro() {
        let perimetro = (this.comprimento * 2) + (this.largura * 2)
        console.log(`Perimetro: ${perimetro}`)
    }

}
