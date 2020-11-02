// Objeto Math.- Calcular el área de un círculo tras solicitar
// el radio desde un cuadro de diálogo.

let radio = prompt('Introduce el radio de tu círculo:')

let area = Math.PI * Math.pow(radio, 2);

document.write('El área de tu círculo es: ' + area);
