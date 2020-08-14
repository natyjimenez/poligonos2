import Poligono from './Poligono'

class Octagono extends Poligono {
  constructor() {
    super()
    this.id = 4
    this.name = 'Octagono'
  }
  perimetro() {
    return (this.lado * 8)
  }
  area() {
    return ((this.lado * 8) * this.apotema) / 2
  }
}

export default Octagono


//  area: (p, a) => (p * a) / 2,
//  perimetro: (l) => l * 8,
