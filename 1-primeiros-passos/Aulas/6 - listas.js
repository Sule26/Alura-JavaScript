console.log(`Trabalhando com listas`)

// const salvador = "Salvador"
// const saoPaulo = "São Paulo"
// const rioDeJaneiro = "Rio de Janeiro"

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
    "Curitiba"
)

listaDeDestinos.push("Pernambuco") // Adicionando um item na listaDeDestinos
console.log("Destinos possíveis:")
// console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos)

listaDeDestinos.splice(2, 1) // Posição , Quantidades
console.log(listaDeDestinos)
console.log(listaDeDestinos[1], listaDeDestinos[0])
