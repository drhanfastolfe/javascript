// 7. Escribir el código de una función a la que se pasa como parámetro un número
// entero y devuelve como resultado una cadena de texto que indica si el número es
// par o impar. Mostrar por pantalla el resultado devuelto por la función.

let num = prompt('Introduce un número:')

let resultado = parImpar(num);

function parImpar(num)
{
    let parOimpar;

    if (num % 2 === 0)
    {
        parOimpar = num + ' es par.';
    }
    else
    {
        parOimpar = num + ' es impar.';
    }  

    return parOimpar;
}

document.write(resultado);