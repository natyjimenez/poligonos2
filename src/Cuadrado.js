import Poligono from './Poligono'

class Cuadrado extends Poligono {
  constructor() {
    super()
    this.id = 2
    this.name = 'Cuadrado'
  }
  area() {
    return (this.base * this.altura)
  }
  perimetro() {
    return (2 * this.base + 2 * this.altura)
  }
}

export default Cuadrado


//  area: (b, h) => b * h,
//  perimetro: (b, h) => 2 * b + 2 * h,