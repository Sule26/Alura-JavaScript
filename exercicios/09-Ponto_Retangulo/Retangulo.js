import { Ponto } from "./Ponto.js"

export class Retangulo {

    constructor(largura, altura) {
        this.largura = largura
        this.altura = altura
    }

    centro() {
        return new Ponto((this.largura)/2, (this.altura)/2).print()
    }
} 
