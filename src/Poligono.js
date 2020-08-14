class Poligono {
  constructor() {
    this.base = parseInt(document.getElementById('base').value) || null
    this.lado = parseInt(document.getElementById('lado').value) || null
    this.altura = parseInt(document.getElementById('altura').value) || null
    this.apotema = parseInt(document.getElementById('apotema').value) || null
    this.radio = parseInt(document.getElementById('radio').value) || null
  }
}

export default Poligono
