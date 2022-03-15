export class Quadrado {
    
    constructor(lado) {
        this.lado = lado
    }

    mudarValorDoLado(novoLado) {
        this.lado = novoLado
    }

    LadoAtual() {
        console.log(`Valor do lado: ${this.lado}`)
    }

    Area() {
        console.log(`Área: ${this.lado ** 2}`)
    }
}
