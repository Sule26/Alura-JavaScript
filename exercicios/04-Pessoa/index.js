import { Pessoa } from "./Pessoa.js";

const pessoa1 = new Pessoa("Sule", 15, 51, 1.71)

console.log(pessoa1)

pessoa1.envelhecer(20)
console.log(pessoa1)
pessoa1.crescer(2.0)
pessoa1.engordar(10)
pessoa1.emagrecer(3)
console.log(pessoa1)
