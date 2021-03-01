function validar(){
    var form = document.form;

    if(form.nombre.value==0){
        alert("El campo nombre esta vacio");
        form.nombre.value="";
        form.nombre.focus();
        return false;

    }else if(form.correo.value==0){
        alert("El campo email esta vacio");
        form.correo.value="";
        form.correo.focus();
        return false;

    }else if(form.contraseaa.value==0){
        alert("El campo Contraseña se encuenta vacio");
        form.contraseaa.value="";
        form.contraseaa.focus();
        return false;

    }else if(!(form.micheckbox.checked)){
        alert("Acepte los terminos y condiciones");
        form.micheckbox.value = 0;
        return false;
    }else{
        alert("Datos Enviados con exito");
        form.submit();
    }
}