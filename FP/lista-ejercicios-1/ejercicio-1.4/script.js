// 4. Definir una función que muestre información sobre una cadena de texto que se le
// pasa como argumento. A partir de la cadena que se le pasa, la función determina si
// esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una
// mezcla de ambas.

let texto = prompt('Introduce un texto');

infoTexto(texto);

function infoTexto(texto)
{
    let nMayus = 0;
    let nMinus = 0;
    let resultado = '';

    for (let i = 0; i < texto.length; i++)
    {
        if (texto.charAt(i) === texto.charAt(i).toUpperCase())
        {
            nMayus++;
        }
        else
        {
            nMinus++;
        }
    }    

    if (nMinus === texto.length)
    {
        resultado = 'La cadena está formada solo por minúsculas.';
    }
    else if (nMayus === texto.length)
    {
        resultado = 'La cadena está formada solo por mayúsculas.';
    }
    else
    {
        resultado = 'La cadena está formada por minúsculas y mayúsculas.';
    }

    document.write(resultado);
}