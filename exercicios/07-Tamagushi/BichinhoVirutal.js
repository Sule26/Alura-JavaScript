export class BixinhoVirtual {

    constructor(nome, fome, saude, idade) {
        this.nome = nome
        this.fome = fome
        this.saude = saude
        this.idade = idade
    }

    alterarNome(novoNome) {
        this.nome = novoNome
    }

    alterarFome(valor) {
        this.fome = valor
    }

    alterarSaude(valor) {
        this.saude = valor
    }

    alterarIdade(novaIdade) {
        this.idade = novaIdade
    }

    retornarNome() {
        return this.nome
    }

    retornarFome(){
        return this.fome
    }

    retornarSaude() {
        return this.saude
    }

    retornarIdade() {
        return this.idade
    }

    humor() {
        console.log(`Humor: ${(this.saude + this.fome) / 2}`)
    }
}
