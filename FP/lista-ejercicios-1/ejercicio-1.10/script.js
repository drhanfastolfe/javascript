// 10. Escribe un script que contenga un párrafo y cinco botones. Cada uno de los
// botones debe tener como etiqueta el nombre de un color y al pulsarlo pondrá el
// color del párrafo del mismo color que indica.

const p = document.getElementById('parrafo');
const btnRojo = document.getElementById('rojo');
const btnNaranja = document.getElementById('naranja');
const btnVerde = document.getElementById('verde');
const btnAzul = document.getElementById('azul');
const btnMorado = document.getElementById('morado');

btnRojo.addEventListener('click', pRojo);
btnNaranja.addEventListener('click', pNaranja);
btnVerde.addEventListener('click', pVerde);
btnAzul.addEventListener('click', pAzul);
btnMorado.addEventListener('click', pMorado);

function pRojo()
{
    p.style.backgroundColor = "red";
}

function pNaranja()
{
    p.style.backgroundColor = 'orange';
}
function pVerde()
{
    p.style.backgroundColor = 'green';
}
function pAzul()
{
    p.style.backgroundColor = 'blue';
}
function pMorado()
{
    p.style.backgroundColor = 'purple';
}