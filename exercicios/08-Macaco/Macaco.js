export class Macaco {

    constructor(nome) {
        this.nome = nome
        this.bucho = []
    }

    comer(comida) {
        if (comida instanceof Macaco) {
            console.log("Canibalismo é inaceitável")
        } else {
            this.bucho.push(comida)
        }
    }

    verBucho() {
        console.log(this.bucho)
    }

    digerir() {
        this.bucho.pop(0)
    }

}
