export class Funcionario {
    
    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario
    }

    aumentarSalario(porcentagem) {
        const novoSalario = this.salario + (this.salario * porcentagem)/ 100
        console.log(`Novo salário: ${novoSalario}`)
    }
}
