// 9. Definir una función que determine si la cadena de texto que se le pasa como
// parámetro es un palíndromo, es decir, si se lee de la misma forma desde la
// izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto
// otro paso natural".

let texto = prompt('Introduce un texto:');

function palindormoOno(texto)
{
    let copiaTexto = texto;
    
    copiaTexto = copiaTexto.toLowerCase();
    copiaTexto = borraEspacios(copiaTexto);
    let copiaTextoInverso = copiaTexto.split('').reverse().join('');
    
    let resultado = '';
    
    if (copiaTexto === copiaTextoInverso)
    {
        resultado = '\"' + texto + '\" es un palíndromo';
    }
    else
    {
        resultado = '\"' + texto + '\" no es un palíndromo';
    }

    return resultado;

}

function borraEspacios(str)
{
    strSinEspacios = '';

    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i) !== ' ')
        {
            strSinEspacios += str.charAt(i);
        }
    }

    return strSinEspacios;
}

document.write(palindormoOno(texto));