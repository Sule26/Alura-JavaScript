import { Tv } from "./Tv.js";

const tv1 = new Tv(15, 30)

console.log(tv1)

tv1.mudarCanal(14)
tv1.aumentarVolume(30)
console.log(tv1)
tv1.diminuirVolume(20)
console.log(tv1)

