export class BombaCombustivel {

    constructor(tipoCombustivel, valorLitro, quantidadeCombustivel) {
        this.tipoCombustivel = tipoCombustivel
        this.valorLitro = valorLitro
        this.quantidadeCombustivel = quantidadeCombustivel
    }

    abastecerPorValor(valor) {
        const litrosAbastecidos = valor / this.valorLitro
        this.quantidadeCombustivel += litrosAbastecidos
        console.log(`Litros:  ${litrosAbastecidos}`)
     }

    abastecerPorLitro(litro) {
        const valorAPagar = litro * this.valorLitro
        this.quantidadeCombustivel += litro
        console.log(`Valor: ${valorAPagar}`)
    }

    alterarCombustivel(tipoCombustivel, valorLitro) {
        this.tipoCombustivel = tipoCombustivel
        this.valorLitro = valorLitro
    }

    alterarQuantidadeCombustivel(quantidadeCombustivel) {
        this.quantidadeCombustivel = quantidadeCombustivel
    }
}
