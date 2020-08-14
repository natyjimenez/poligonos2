import Poligono from './Poligono'

class Triangulo extends Poligono {
  constructor() {
    super()
    this.id = 1
    this.name = 'Triangulo'
  }
  area() {
    return (this.base * this.altura) / 2
  }
  perimetro() {
    return (this.lado * 3)
  }
}

export default Triangulo


//  area: (b, h) => (b * h) / 2,
//  perimetro: (l) => l * 3,

