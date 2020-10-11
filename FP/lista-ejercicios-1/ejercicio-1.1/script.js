// 1. Solicitar un número y presentar su tabla de multiplicar

num = prompt('Introduce un número');
tabla = '';

for (let i = 1; i < 11; i++)
{
    tabla += num + ' x ' + i + ' = '  + num * i + '<br>';
}

document.write(tabla);