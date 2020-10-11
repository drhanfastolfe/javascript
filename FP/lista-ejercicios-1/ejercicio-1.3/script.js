// 3. El factorial de un número entero n es una operación matemática que consiste en
// multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5
// (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120. Utilizando la estructura
// for, crear un script que calcule el factorial de un número entero.

let num = prompt('Introduce un número');
let factorial = num;

for (let i = num - 1; i > 1; i--)
{
    factorial = factorial * i; 
}

document.write(num + '! = ' + factorial);