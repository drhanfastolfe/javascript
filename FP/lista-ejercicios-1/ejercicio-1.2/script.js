// 2. Presentar en la página el texto “Javascript” en los 
// 6 diferentes tipos de cabecera HTML, de mayor a menor.
window.onload = resultado;

function resultado() 
{
    for (let i = 1; i < 7; i++) 
    {
        let header = document.createElement('h' + i);
        header.textContent = 'JavaScript';
        document.body.appendChild(header);
    }   
}