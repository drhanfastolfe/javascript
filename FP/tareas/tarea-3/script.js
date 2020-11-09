let opcion;

do 
{
    opcion = parseInt(prompt('Elige un ejercicio del 1 al 5'));
} 
while (opcion < 1 || 5 < opcion);

switch (opcion)
{
    case 1:
    {
        // 1- Dado un número, determinar si es par o no. Crear una función que devuelve verdadero o falso y tiene que mostrarse en consola.
        //    La función recibe por parámetro un valor y debe llamarse es_par(numero).

        document.write('1- Dado un número, determinar si es par o no. Crear una función que devuelve verdadero o falso y tiene que mostrarse en consola. La función recibe por parámetro un valor y debe llamarse es_par(numero).<br><br>');

        let numero = parseInt(prompt('Introduce un número:'));

        function es_par(numero)
        {
            return numero % 2 === 0;
        }

        document.write(es_par(numero));
        console.log(es_par(numero));
    }
    break;
    
    case 2:
    {
        // 2- Dada una lista de números, determinar si la cantidad de elementos que la contiene es mayor que un valor pasado por parámetro. Devuelve verdadero o falso.
        //    La función debe de llamarse lista_mayor_valor y recibe la lista y el valor por parámetro(lista_numeros,valor)        

        document.write('2- Dada una lista de números, determinar si la cantidad de elementos que la contiene es mayor que un valor pasado por parámetro. Devuelve verdadero o falso. La función debe de llamarse lista_mayor_valor y recibe la lista y el valor por parámetro(lista_numeros,valor)<br><br>');

        let lista_numeros = [5, 1, 2, 9, 6, 1];
        let valor = 5;

        function lista_mayor_valor(lista_numeros, valor)
        {
            let resultado = false;

            if ((lista_numeros.length + 1) > valor)
            {
                resultado = true;    
            }
            return resultado; 
        }

        document.write('lista_numeros: ' + lista_numeros + '<br>');
        document.write('valor: ' + valor + '<br>');
        document.write('Resultado: ' + lista_mayor_valor(lista_numeros, valor));
        
    }
    break;

    case 3:
    {
        // 3- Dada dos valores, determinar si el primero es mayor que el segundo. En caso de ser verdadero, debe de mostrarse un modal
        //    informativo tipo alert con la sintaxis: "El primero número (numero1) es mayor que el segundo (numero2)" y viceversa para el caso contrario. 
        //    La función debe de llamarse mayor_que(numero1, numero2) y recibe los dos valores como parámetro

        document.write('3- Dada dos valores, determinar si el primero es mayor que el segundo. En caso de ser verdadero, debe de mostrarse un modal informativo tipo alert con la sintaxis: "El primero número (numero1) es mayor que el segundo (numero2)" y viceversa para el caso contrario. La función debe de llamarse mayor_que(numero1, numero2) y recibe los dos valores como parámetro.<br><br>');

        let numero1 = parseInt(prompt('Introduce un número:'));
        let numero2 = parseInt(prompt('Introduce otro número:'));

        mayor_que(numero1, numero2);

        function mayor_que(numero1, numero2)
        {
            if (numero1 > numero2)
            {
                alert('El primero número (' + numero1 + ') es mayor que el segundo (' + numero2 + ')');    
            }    
            else 
            {
                if (numero2 > numero1)
                {
                    alert('El segundo número (' + numero2 + ') es mayor que el primero (' + numero1 + ')');
                }
                else
                {
                    alert('Los dos numeros (' + numero1 + ', ' + numero2 + ') son iguales');
                }
            }
        }
    }
    break;

    case 4:
    {
        // 4- Genera dos números aleatorios con la función Math, y determina cuál de los dos es el mayor. 
        //    Devuelve verdadero o falso en caso de que el primer número sea mayor mayor que el segundo. 
        //    El resultado debe mostrarse por consola y la función debe de llamarse primero_mayor().

        document.write('4- Genera dos números aleatorios con la función Math, y determina cuál de los dos es el mayor. Devuelve verdadero o falso en caso de que el primer número sea mayor mayor que el segundo. El resultado debe mostrarse por consola y la función debe de llamarse primero_mayor().<br><br>');

        let numero1 = Math.random();
        let numero2 = Math.random();

        function primero_mayor(numero1, numero2)
        {
            return numero1 > numero2;
        }

        document.write('numero1: ' + numero1 + '<br>');
        document.write('numero2: ' + numero2 + '<br>');
        document.write(primero_mayor(numero1,numero2));
        console.log(primero_mayor(numero1,numero2));
    }
    break;

    case 5:
    {
        // 5- Generar una lista de 20 números decimales de forma aleatoria y guardarlos en una lista. 
        // La función debe de llamarse random y admite por parámetro un mínimo y un máximo. Ejemplo: random(1,100)       

        document.write('5- Generar una lista de 20 números decimales de forma aleatoria y guardarlos en una lista. La función debe de llamarse random y admite por parámetro un mínimo y un máximo. Ejemplo: random(1,100)<br><br>');

        let min = parseInt(prompt('Introduce el mínimo:'));
        let max = parseInt(prompt('Introduce el máximo:'));
        
        function random(min, max)
        {
            let lista = [];

            for (let i = 0; i < 20; i++)
            {
                lista.push(Math.floor((Math.random() * max) + min));   
            }

            return lista;
        }

        document.write('max: ' + max + '<br>');
        document.write('min: ' + min + '<br>');
        document.write('lista: ' + random(min, max));

    }
    break;   
}