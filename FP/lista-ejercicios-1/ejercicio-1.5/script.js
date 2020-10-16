// 5. Leer una cadena de texto mediante el método prompt() y generar un array con
// las palabras que contiene. Posteriormente, mostrar la siguiente información:
// - Número de palabras
// - Primera palabra y última palabra
// - Las palabras colocadas en orden inverso
// - Las palabras ordenadas de la a la z
// - Las palabras ordenadas de la z a la a

let texto = prompt('Introduce un texto:');
let palabrasTexto = texto.split(' ');

let numPalab = palabrasTexto.length;
let primeraPalab = palabrasTexto[0];
let ultimaPalab = palabrasTexto[palabrasTexto.length - 1];
let textoInverso = palabrasTexto.reverse().join(' ');
let palabAZ = palabrasTexto.sort().join(' ');
let palabZA = palabrasTexto.sort().reverse().join(' ');

document.write
(
    'Texto indtroducido: ' + texto + '<br>' +
    '<br>' +
    '- Número de palabras: ' + numPalab + '<br>' +
    '- Primera palabra y última palabra: ' + primeraPalab + ' y ' + ultimaPalab + '<br>' +
    '- Las palabras colocadas en orden inverso: ' + textoInverso + '<br>' +
    '- Las palabras ordenadas de la a la z: ' + palabAZ + '<br>' +
    '- Las palabras ordenadas de la z a la a: ' + palabZA + '<br>'
)
