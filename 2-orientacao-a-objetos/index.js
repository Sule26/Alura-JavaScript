import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const conta1 = new ContaCorrente(1001, cliente1);


const cliente2 = new Cliente("Alice", 88822233309);
const conta2 = new ContaCorrente(102, cliente2);

const cliente3 = new Cliente("Sule", 99988877709)
const conta3 = new ContaCorrente(1002, cliente3)

conta1.depositar(500);
conta1.transferir(200, conta2);
conta1.transferir(50, conta3)
conta3.depositar(200)

console.log(conta1)
console.log(conta2)
console.log(conta3)
console.log(ContaCorrente.numeroDeContas)
