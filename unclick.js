
document.oncontextmenu = function () { return false }

function clicDerecho(e) {
  var msg = "Las opciones de click se han deshabilitado";
  if (e.which == 3) {
    alert(msg);
  }
  else if (event.button == 2) {
    alert(msg);

    return false;
  }
  return true;
}
document.onmousedown = clicDerecho;