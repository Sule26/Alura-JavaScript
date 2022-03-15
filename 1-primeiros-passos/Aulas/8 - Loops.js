console.log("Trabalhando com loops");

const listaDeDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Rio de Janeiro",
  "Curitiba"
);
const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = 'Salvador';

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada
  
let iador = 0
let destinoExiste = false

while(iador < listaDeDestinos.length) {
    console.log(listaDeDestinos[iador])
    if(listaDeDestinos[iador] == destino) {
        console.log("Destino Existe")
        destinoExiste = true
        break;
    }
    iador += 1
}

console.log("Destino existe: ",destinoExiste)

if(podeComprar && destinoExiste) {
    console.log("Boa viagem!")
} else {
    console.log("Desculpe tivemos um erro!")
}

for(let i = 0; i < 3; i++) {
    if(listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}
