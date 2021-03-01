//Arrays de datos:
meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
lasemana=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
diassemana=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];

window.onload = function() {

    hoy=new Date();
    diasemhoy=hoy.getDay();
    diahoy=hoy.getDate();
    meshoy=hoy.getMonth();
    annohoy=hoy.getFullYear();

    tit=document.getElementById("titulos");
    ant=document.getElementById("anterior");
    pos=document.getElementById("posterior");

    f0=document.getElementById("fila0");

    pie=document.getElementById("fechaactual");
    pie.innerHTML+=lasemana[diasemhoy]+", "+diahoy+" de "+meses[meshoy]+" de "+annohoy;

    document.buscar.buscaanno.value=annohoy;

    mescal = meshoy;
    annocal = annohoy;

    cabecera() 
    primeralinea()
    escribirdias()
}

//FUNCIONES de creación del calendario:
//Cabecera del calendario
function cabecera() {
    tit.innerHTML=meses[mescal]+" de "+annocal;
    mesant=mescal-1;
    mespos=mescal+1;
    if (mesant<0) {mesant=11;}
    if (mespos>11) {mespos=0;}
    ant.innerHTML=meses[mesant]
    pos.innerHTML=meses[mespos]
}

//Primera línea de tabla: días de la semana.
function primeralinea() {
    for (i=0;i<7;i++) {
        celda0=f0.getElementsByTagName("th")[i];
        celda0.innerHTML=diassemana[i]
    }
}
//rellenar celdas con los días
function escribirdias() {
    primeromes=new Date(annocal,mescal,"1")
    prsem=primeromes.getDay()
    prsem--;
        if (prsem==-1) {prsem=6;}
        diaprmes=primeromes.getDate() 
        prcelda=diaprmes-prsem;
        empezar=primeromes.setDate(prcelda)
        diames=new Date()
        diames.setTime(empezar);
        for (i=1;i<7;i++) {
            fila=document.getElementById("fila"+i);
            for (j=0;j<7;j++) {
                midia=diames.getDate() 
                mimes=diames.getMonth()
                mianno=diames.getFullYear()
                celda=fila.getElementsByTagName("td")[j];
                celda.innerHTML=midia;
                celda.style.backgroundColor="#0084db";
                celda.style.color="#492736";
                 //domingos en rojo
                if (j==6) { 
                    celda.style.color="#f11445";
                }
                 //dias restantes del mes en gris
                if (mimes!=mescal) { 
                   celda.style.color="#ffeeef";
                   }
                //destacar la fecha actual
                if (mimes==meshoy && midia==diahoy && mianno==annohoy ) { 
                   celda.style.backgroundColor="#f0b19e";
                   celda.innerHTML="<cite title='Fecha Actual'>"+midia+"</cite>";
                }
                //pasar al siguiente día
                midia=midia+1;
                diames.setDate(midia);
                }
            }
        }

//Ver mes anterior
function mesantes() {
    nuevomes=new Date()
    primeromes--;
    nuevomes.setTime(primeromes)
    mescal=nuevomes.getMonth()
    annocal=nuevomes.getFullYear()
    cabecera()
    escribirdias()
}
//ver mes posterior
function mesdespues() {
    nuevomes=new Date()
    tiempounix=primeromes.getTime()
    tiempounix=tiempounix+(45*24*60*60*1000) //le añadimos 45 días 
    nuevomes.setTime(tiempounix) //fecha con mes posterior.
    mescal=nuevomes.getMonth() //cambiamos variables 
    annocal=nuevomes.getFullYear()
    cabecera()
    escribirdias()
}

//volver al mes actual
function actualizar() {
    mescal=hoy.getMonth();
    annocal=hoy.getFullYear();
    cabecera()
    escribirdias()
}

//Ir al mes buscado
function mifecha() {
    //Recoger dato del año en el formulario
    mianno=document.buscar.buscaanno.value; 
    //recoger dato del mes en el formulario
    listameses=document.buscar.buscames;
    opciones=listameses.options;
    num=listameses.selectedIndex
    mimes=opciones[num].value;
    //Comprobar si el año está bien escrito
    if (isNaN(mianno) || mianno<1) { 
        //año mal escrito: mensaje de error
        alert("El año no es válido:\n debe ser un número mayor que 0")
        }
    else { //año bien escrito: ver mes en calendario:
        mife=new Date(); //nueva fecha
        mife.setMonth(mimes); //añadir mes y año a nueva fecha
        mife.setFullYear(mianno);
        mescal=mife.getMonth(); //cambiar a mes y año indicados
        annocal=mife.getFullYear();
        cabecera() //escribir cabecera
        escribirdias() //escribir tabla
    }
}