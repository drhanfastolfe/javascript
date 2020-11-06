// 1- De la siguiente lista let lista=[23,40,12,99,87,344,21,2,88,533,650,210,44,77], crea una nueva lista 
//    y ordenala ascendetemente y guarda en ella aquellos números que sean pares. 
//    La función debe de llamarse pares y admite por parámetros una lista de números. 
//    Ejemplo: pares(lista_numeros[])

function ejercicio1()
{
    let lista = [23,40,12,99,87,344,21,2,88,533,650,210,44,77];

    let listaParAsc = pares(lista);

    function pares(lista)
    {
        let listaReturn = [];

        for (let i = 0; i < lista.length; i++)
        {
            if (lista[i] % 2 === 0)
            {
                listaReturn.push(lista[i]);   
            }    
        }

        const asc = function (a, b) { return a - b; };

        listaReturn = listaReturn.sort(asc);

        return listaReturn;
    }

    document.write('Resultado ejercicio 1: ' + listaParAsc);        
}

ejercicio1();


// 2- Dada una lista de 8 números [100,433,99,16,40.5,67.8,650,12.4], 
//    se desea saber para cada uno de ellos:
//    a-) su cuadrado perfecto
//    b-) Raíz cuadrada
//    c-) Redondearlos a su entero máximo superior
//    d-) Redonderalo a su entero máximo inferior
//    e-) Multiplicar cada valor por la constate PI y redondear un lugar decimal
//    f-) Saber el número máximo de la lista
//    g-) Saber el número mínimo de la lista

function ejercicio2()
{
    let lista = [100,433,99,16,40.5,67.8,650,12.4];

    
}