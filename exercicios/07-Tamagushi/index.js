import { BixinhoVirtual } from "./BichinhoVirutal.js";

const tamagushi = new BixinhoVirtual("Sule", 60, 70, 10)

console.log(tamagushi)
tamagushi.humor()
tamagushi.alterarFome(30)
tamagushi.alterarIdade(15)
tamagushi.alterarNome("Pedro")
tamagushi.alterarSaude(50)
console.log(`Nome: ${tamagushi.retornarNome()}`)
console.log(`Fome: ${tamagushi.retornarFome()}`)
console.log(`Saude: ${tamagushi.retornarSaude()}`)
console.log(`Idade: ${tamagushi.retornarIdade()}`)
tamagushi.humor()
