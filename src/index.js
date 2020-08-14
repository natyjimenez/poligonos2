import Circulo from './Circulo.js'
import Cuadrado from './Cuadrado.js'
import Decagono from './Decagono.js'
import Octagono from './Octagono.js'
import Triangulo from './Triangulo.js'

// Tomo el valor de select desde HTML para ejecutar la función
document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  //Variable en la que guardo el valor de las propiedades del polígono, según corresponda
  let Poligono = e.target.value
  //variables de cada polígono
  let triangulo = new Triangulo()
  let cuadrado = new Cuadrado()
  let circulo = new Circulo()
  let octagono = new Octagono()
  let decagono = new Decagono()
  //Array con todos los polígonos
  let arrayPoligonos = [triangulo, cuadrado, circulo, octagono, decagono]
  // Función con la que recorro mi arreglo polígonos y obtengo el que seleccioné en HTML select, según su valor de id, luego muestro por
  // console.log el resultado de perímetro y área del polígono seleccionado
  arrayPoligonos.forEach((x) => {
    if (Poligono == x.id) {
      console.log(`Perimetro de ${x.name} ===> ${x.perimetro()}`)
      console.log(`Area de ${x.name} ===> ${x.area()}`)
    }
  })
})






    


