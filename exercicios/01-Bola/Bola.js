export class Bola {

    constructor(cor, raio, material) {
        this.cor = cor
        this.raio = raio
        this.material = material
    }

    troca_cor(novaCor) {
        this.cor = novaCor
    }

    mostra_cor() {
        console.log(this.cor)
    }
}
