import { BombaCombustivel } from "./BombaCombustivel.js";

const bomba1 = new BombaCombustivel("gasolina", 5, 10)

console.log(bomba1)
bomba1.abastecerPorLitro(3)
bomba1.abastecerPorValor(15)
bomba1.alterarCombustivel("diesel", 3)
console.log(bomba1)
bomba1.abastecerPorLitro(5)
bomba1.abastecerPorValor(9)
bomba1.alterarQuantidadeCombustivel(10)
console.log(bomba1)
