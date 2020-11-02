// Objeto String.- Solicitar una cadena de texto desde teclado, 
// presentar el número de caracteres que contiene y presentar 
// la propia cadena en cursiva y en tachado.

const numCar = document.querySelector('.numCar');
const cursiva = document.querySelector('.cursiva');
const tachado = document.querySelector('.tachado');

let texto = prompt('Introduce un texto:');

numCar.textContent = 'Número de caracteres: ' + texto.length;
cursiva.textContent = texto;
cursiva.style.fontStyle = 'italic';
tachado.textContent = texto;
tachado.style.textDecorationLine = 'line-through';