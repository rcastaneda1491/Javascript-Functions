const botonNumeros = document.getElementsByName('bt-numeros');
const botonoperador= document.getElementsByName('bt-operador');
const botonigual=document.getElementsByName('bt-igual')[0];
const botonborrar=document.getElementsByName('bt-borrar')[0];
var resultado=document.getElementById('Result');
var operacioactual='';
var operacionanterior='';
var operacion=undefined;

console.log(botonNumeros);

botonNumeros.forEach(function(boton)
{
boton.addEventListener('click', function()
{
    agregarnumero(boton.innerText);
})
});

botonoperador.forEach(function(boton)
{
boton.addEventListener('click', function()
{
    seleccionoperador(boton.innerText);
    //alert(boton.innerText); mostrar que funciona
})

});

botonigual.addEventListener('click', function()
{
calcular();
actualizarsalida();

});
botonborrar.addEventListener('click', function()
{
    clearInterval();
    actualizarsalida();
});
/*Programando los metodos agregarnumero,seleccionaroperador,etc*/

function seleccionoperador(op)
{
    if(operacioactual==='') return;
    if (operacionanterior!=='')
    {
        calcular()
    }
    operacion=op.toString();
    operacionanterior=operacioactual;
    operacioactual='';

}
function calcular()
{
    var calculo;
    const anterior=parseFloat(operacionanterior);
    const actual= parseFloat(operacioactual);
//if (isNaN(anterior)||isNaN(actual)) return;

    switch(operacion)
    {
        case '+':
        calculo=anterior+actual;
        break;
        case '-':
            calculo=anterior-actual;
            break;
        case 'X':
            calculo=(anterior * actual);
            break;
        case '/':
            
            calculo=(anterior/actual);
            break;
        case 'Raiz':
            calculo=Math.sqrt(anterior);
            break;
        case 'Pot':
            calculo= Math.pow(anterior,actual);
            break;
        case 'Mod':
            calculo= (anterior%actual);
            break;
        case 'Fact':  
        var calculo = 1; 
	        for (i=1; i<=anterior; i++) 
            {
		        calculo = calculo * i; 
	        } 
            break;
        default:
            return;
    }
    operacioactual=calculo
    operacion=undefined;
    operacionanterior='';
}

function agregarnumero(num)
{
    operacioactual=operacioactual.toString()+num.toString();
    actualizarsalida();
}
function clearInterval()
{
    operacioactual='';
    operacion=undefined;
    operacionanterior='';
}
function actualizarsalida()
{
    resultado.value = operacioactual;
}
clearInterval();
