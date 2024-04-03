
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

const getRandomNumber = () => Math.floor(Math.random() * hex.length);

const cambiarColorBoton = () => contenedorColor.style.backgroundColor = generarColorHexadecimal();

btnReiniciar.addEventListener('click',e => {
    e.preventDefault()
    cambiarColorBoton();
    msjDeSimilitud.innerHTML = '';
})

const calcularSimilitud = (color1,color2) => {

    const hexToInt = (hex) => {
        const parsedInt = parseInt(hex, 16);
        return isNaN(parsedInt) ? 0 : parsedInt; // Si no es un número válido, devuelve 0
    };

    let r1 = hexToInt(color1.substring(1, 3));
    let g1 = hexToInt(color1.substring(3, 5));
    let b1 = hexToInt(color1.substring(5, 7));
    let r2 = hexToInt(color2.substring(1, 3));
    let g2 = hexToInt(color2.substring(3, 5));
    let b2 = hexToInt(color2.substring(5, 7));

    let distancia = Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2));

    let similitud = (1 - distancia / 441.67) * 100;
   
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