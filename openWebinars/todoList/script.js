const input = document.getElementById('input');
const boton = document.getElementById('boton');
const lista = document.getElementById('lista');

boton.addEventListener('click', agregaElemento);

function agregaElemento()
{
    let elemento = document.createElement('li');
    elemento.textContent = input.value;
    lista.appendChild(elemento);
}