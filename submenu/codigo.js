
var contextMenu = CtxMenu();
//llamando funcion cuando el usuario selecciones "hola mundo "en el menú contextual
function holaMundo() {
    alert("Esta es una Alerta");
}

contextMenu.addItem("Alerta", holaMundo, Icon = "alerta.svg");
contextMenu.addSeperator();
contextMenu.addItem("Recargar", function () {
    location.reload();
}, Icon = "recargar.svg");
contextMenu.addSeperator();
contextMenu.addItem("Pagina de Inicio", function () {
    location.assign("../index.html")
}, Icon = "inicio.svg"
);

// 2do menu
//funcion para cambiar el color de fondo de un elemento
function ChangeElementColor(element) {
    var color = [
        Math.random() * 255,
        Math.random() * 255,
        Math.random() * 255
    ];
    element.style.background = "rgb(" + color + ")"
}

var contextMenuTwo = CtxMenu(".type-title");
contextMenuTwo.addItem("Cambiar Color", ChangeElementColor, Icon = "color.svg")
contextMenuTwo.addSeperator();
contextMenuTwo.addItem("Portafolio de Cursos", function () {
    location.assign("../index.html")
}, Icon = "portafolio.svg"
);