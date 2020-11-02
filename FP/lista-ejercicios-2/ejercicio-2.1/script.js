// Objeto Date.- Calcular el tiempo restante en milisegundos entre la fecha actual y 
// las 12 de la noche del 31 de Diciembre del mismo año.

const fechaActual = new Date();

let añoActual = fechaActual.getFullYear();
let mesActual = fechaActual.getMonth();
let diaActual = fechaActual.getDate();
let horaActual = fechaActual.getHours();
let minActual = fechaActual.getMinutes();
let segActual = fechaActual.getSeconds();
let milSegActual = fechaActual.getMilliseconds();

let diasAño = 365;
let meses = [31,28,31,30,31,30,31,31,30,31,30,31];

function esBisiesto(año)
{
    let resultado = false;
    
    if ((año % 4 == 0) && ( (año % 100 != 0) || (año % 400 == 0)))
    {
        resultado = true;    
    }

    return resultado;
}

if (esBisiesto(añoActual))
{
    diasAño = 366;
    meses[1] = 29;
}

let diasPasados = 0;

for (let i = 0; i < mesActual; i++)
{
    diasPasados += meses[i];
}

diasPasados += diaActual;

let diasFaltan = diasAño -  diasPasados;

let milSegFaltanDias = diasFaltan * 24 * 60 * 60 * 1000;

let milSegFaltanHoras = (23 - horaActual) * (60 - minActual) * (60 - segActual) * (1000 - milSegActual);

let milSegFatlanTotal = milSegFaltanDias + milSegFaltanHoras;

console.log(milSegFatlanTotal);
