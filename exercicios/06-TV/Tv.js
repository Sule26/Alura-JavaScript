export class Tv {
    
    constructor(canal, volume) {
        if(canal > 20 || canal < 1) {
            this.canal = 4
        } else {
            this.canal = canal
        }

        if(volume > 99 || volume < 0) {
            this.volume = 40
        } else {
            this.volume = volume
        }
    }

    mudarCanal(novoCanal) {
        if(novoCanal > 20 || novoCanal < 1) {
            return -1
        }
        this.canal = novoCanal
    }

    aumentarVolume(valor) {
        if((this.volume + valor) > 99) {
            this.volume = 99
        } else {
            this.volume += valor
        }
    }

    diminuirVolume(valor) {
        if((this.volume - valor) < 0) {
            this.volume = 0
        } else {
            this.volume -= valor
        }
    }
}
