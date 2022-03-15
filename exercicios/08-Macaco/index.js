import { Macaco } from "./Macaco.js"

const macaco1 = new Macaco("Simão")
const macaco2 = new Macaco("Prego")

macaco1.comer('Maca')
macaco1.verBucho()
macaco1.comer('Banana')
macaco1.verBucho()
macaco1.comer('Abacaxi')
macaco1.verBucho()
macaco1.digerir()
macaco1.verBucho()
macaco2.comer('Maca')
macaco2.comer('Banaca')
macaco2.comer(macaco1)
macaco2.verBucho()
