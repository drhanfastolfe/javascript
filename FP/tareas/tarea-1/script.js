// 1.- Obten la fecha actual y muestrala en la etiqueta que corresponda.

// 2.- Muestra la hora actual

// 3.- Muestra los minutos actuales

// 4.- Obten el día de hoy (domingo, lunes, martes...)

// 5.- Muestra el numero del año

// Usa funciones para todo el ejercicio


const fechaActual = new Date();
const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let añoActual = fechaActual.getFullYear();
let horaActual = fechaActual.getHours();
let minActual = fechaActual.getMinutes();
let diaActual = fechaActual.getDay();

document.write
(
    'Fecha actual: ' + fechaActual + '<br>' +
    'Hora actual: ' + horaActual + '<br>' +
    'Minuto actual: ' + minActual + '<br>' +
    'Día actual: ' + DIAS[diaActual] + '<br>' +
    'Año actual: ' + añoActual + '<br>'
);
