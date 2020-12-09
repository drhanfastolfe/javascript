const base_de_datos_vehiculos = 
        [{
            color: 'rojo',
            precio: 20000,
            anyo: 2019,
            fabricante: 'Seat',
            modelo: 'Seat León'
        }, 
        {
            color: 'azul',
            precio: 16500,
            anyo: 2016,
            fabricate: 'Dacia Sandero',
            modelo: 'Dacia'
        }, 
        {
            color: 'negro',
            precio: 12500,
            anyo: 2015,
            fabricante: 'Seat',
            modelo: 'Seat Ibiza'
        }, 
        {
            color: 'amarillo',
            precio: 36000,
            anyo: 2019,
            fabricante: 'Seat',
            modelo: 'Seat Arona'
        }, 
        {
            color: 'azul',
            precio: 15000,
            anyo: 2005,
            fabricante: 'Renault',
            modelo: 'Renault Clio'
        }, 
        {
            color: 'rosa',
            precio: 22000,
            anyo: 2008,
            fabricante: 'Seat',
            modelo: 'Seat León'
        }, 
        {
            color: 'amarillo',
            precio: 25000,
            anyo: 2014,
            fabricante: 'Seat',
            modelo: 'Seat León'
        }, 
        {
            color: 'azul',
            precio: 16000,
            anyo: 2018,
            fabricante: 'Citroën',
            modelo: 'Citroën C3'
        }, 
        {
            color: 'verde',
            precio: 250,
            anyo: 2005,
            fabricante: 'Peugeot',
            modelo: 'Peugeot 308'
        }, 
        {
            color: 'verde',
            precio: 12300,
            anyo: 2019,
            fabricante: 'Volkswagen',
            modelo: 'Volkswagen Golf'
        }, 
        {
            color: 'verde',
            precio: 11450,
            anyo: 2018,
            fabricante: 'Audi',
            modelo: 'Audi a3'
        }]

const ejecutar = document.querySelectorAll('#ejecutar');

ejecutar[0].addEventListener('click', function () 
{
    let valor = prompt('Introduce el color:');
    const span1 = document.getElementById('1');
    
    if (buscar('color', valor))
    {
        let nombres = [];

        base_de_datos_vehiculos.forEach(element => 
        {
            if (element['color'] === valor)
            {
                nombres.push(element['modelo']);
            }    
        });

        let nombresStr = '';

        for (let i = 0; i < nombres.length; i++)
        {
            nombresStr += nombres[i] + ' ';    
        }

        span1.textContent = nombresStr; 
    }
    else
    {
        span1.textContent = 'No hay vehículos del color ' + valor; 
    }
        
})

ejecutar[1].addEventListener('click', function () 
{
    let valor = prompt('Introduce el fabricante:');
    const span2 = document.getElementById('2');

    if (buscar('fabricante', valor))
    {
        let precios = 0;

        base_de_datos_vehiculos.forEach(element => 
        {
            if (element['fabricante'] === valor)
            {
                precios += element['precio'];
            }    
        });

        span2.textContent = precios + '€';    
    }
    else
    {
        span2.textContent = 'No existe el fabricante ' + valor;;    
    }
        
        
})

ejecutar[2].addEventListener('click', function () 
{
    let vehiculos = 0;
    const span3 = document.getElementById('3');

    let precios = 0;

    base_de_datos_vehiculos.forEach(element => 
    {
        if (element['precio'] > 15000 && element['anyo'] === 2019)
        {
            vehiculos++;
        }    
    });

    span3.textContent = vehiculos;   
})

ejecutar[3].addEventListener('click', doblaPreciosPares);

function doblaPreciosPares() {
    let c = 8;
    let precios = [2, 7, c, {}, 31, 'a'];
    let preciosPares = [];
    const span4 = document.getElementById('4');
    precios.forEach(precio => {
        if (precio % 2 === 0)
        {
            preciosPares.push(anyadeIVA(precio));
        }
    });

    function anyadeIVA(precio) {
        return precio * 1.21
    }
    span4.textContent = preciosPares; 
}


ejecutar[4].addEventListener('click', function() 
{
    const span5 = document.getElementById('5');
    let n = parseInt(prompt('Introduce un número:'));

    while (!(n > 0))
    {
        alert('El número introducido no es válido.');
        n = parseInt(prompt('Introduce un número:'));
    }

    let nRandom = Math.floor((Math.random() * (n + 1)));

    span5.textContent = nRandom; 
    
});

document.getElementById('inicio').addEventListener('click', function() 
{
    let fechaInicio = new Date();

    document.getElementById('fin').addEventListener('click', function() 
    {
        const span6 = document.getElementById('6');
        let fechaFin = new Date();

        let seg = (fechaFin - fechaInicio) / 1000;

        span6.textContent = seg;
    })

});

function buscar(campo, valor)
{
    existe = false;

    base_de_datos_vehiculos.forEach(element => 
    {
        for (key in element)
        {
            if (key === campo && element[campo] === valor)
            {
                existe = true;
            }
        }    
    });

    return existe;
}
