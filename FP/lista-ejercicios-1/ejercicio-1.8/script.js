// 8. El cálculo de la letra del NIF es un proceso matemático sencillo que se basa en
// obtener el resto de la división entera del número de DNI y el número 23. A partir
// del resto de la división, se obtiene la letra seleccionándola según el siguiente orden:
//             
//           T R W A G M Y F P D X B N J Z S Q V H L C K E
// 
// Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la
// letra es la A. Elaborar un pequeño script que solicite en un campo de texto el DNI
// de un individuo y en otro la letra del mismo y compruebe si los datos son correctos
// o no.

let numero = prompt('Introduce el número del DNI:')
let letra = prompt('Introduce la letra del DNI:')

function comprubaDNI(numero, letra)
{
    let resultado = '';
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J',
                    'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    numLetra = numero % 23;

    if (letras[numLetra] === letra)
    {
        resultado = 'El DNI ' + numero + letra + ' es correcto.'
    }
    else
    {
        resultado = 'El DNI ' + numero + letra + ' no es correcto.'
    }

    return resultado;
}

document.write(comprubaDNI(numero, letra));