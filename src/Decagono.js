import Poligono from './Poligono'

class Decagono extends Poligono {
  constructor() {
    super()
    this.id = 5
    this.name = 'Decagono'
  }
  area() {
    return (10 * this.lado * this.apotema) / 2
  }
  perimetro() {
    return (10 * this.lado)
  }
}

export default Decagono


//  area: (l, a) => (10 * l * a) / 2,
//  perimetro: (l) => 10 * l,
