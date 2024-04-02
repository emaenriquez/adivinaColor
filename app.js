
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btnReiniciar = document.getElementById('btnReiniciar')
let contenedorColor = document.getElementById('contenedorColor')
let msjDeSimilitud = document.getElementById('msjSimilitud')
let btnComprobarColor = document.getElementById('btnComprobarColor')
let inputColor = document.getElementById('colorPicker')

const generarColorHexadecimal = () => {

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    return hexColor
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }

const cambiarColorBoton = () => contenedorColor.style.backgroundColor = generarColorHexadecimal();

btnReiniciar.addEventListener('click',e => {

    e.preventDefault()
    cambiarColorBoton();
    msjDeSimilitud.innerHTML = '';
})

const calcularSimilitud = (color1,color2) => {

    let r1 = parseInt(color1.substring(1, 3), 16);
    let g1 = parseInt(color1.substring(3, 5), 16);
    let b1 = parseInt(color1.substring(5, 7), 16);

    let r2 = parseInt(color2.substring(1, 3), 16);
    let g2 = parseInt(color2.substring(3, 5), 16);
    let b2 = parseInt(color2.substring(5, 7), 16);

    let distancia = Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2));

    // Calcular la similitud normalizando la distancia
    let similitud = (1 - distancia / 441.67) * 100; // 441.67 es la distancia máxima entre dos colores
   
    return similitud.toFixed(2); // Redondear el resultado a dos decimales
}

const ComprobarColor = () => {

    let colorSelecionado = inputColor.value
    let colorGenerado = contenedorColor.style.backgroundColor

    console.log(contenedorColor.style.backgroundColor)

    let similitud = calcularSimilitud(colorSelecionado,colorGenerado)
    msjDeSimilitud.innerHTML = `Tu selección tiene un ${similitud}% de similitud con el color generado.`;
}

btnComprobarColor.addEventListener('click',e => {
    ComprobarColor();
})