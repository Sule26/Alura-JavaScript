export class Pessoa {

    constructor(nome, idade, peso, altura) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    envelhecer(novaIdade) {
        if(novaIdade <= this.idade) {
            return -1
        }
        if(this.idade < 21) {
            let dif = novaIdade - this.idade
            this.altura += dif * 0.05
        }
        this.idade = novaIdade
    }

    engordar(novoPeso) {
        this.peso += novoPeso
    }

    emagrecer(novoPeso) {
        this.peso -= novoPeso
    }
    
    crescer(novaAltura) {
        if(novaAltura < this.altura) {
            return -1
        }
        this.altura = novaAltura
    }
}
