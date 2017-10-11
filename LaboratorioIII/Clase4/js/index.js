window.onload = function(){
    
    var btnGuardar = document.getElementById("btnguardar");

    btnGuardar.addEventListener('click',function(){
        var txtNombre = document.getElementById("nombre");
        var txtApellido = document.getElementById("apellido");

        
        if (txtApellido.value == "" || txtNombre.value == "") {
            
            // cambiar clases para modificar en css cambiar border 1px solid #fff;
            document.getElementById("nombre").className = "error";
            document.getElementById("apellido").className = "error";

            alert("Debe ingresar un nombre y apellido");
            return
        }

        if (confirm("Esta seguro que desea agregar una persona?")) {
            //cambiar clases 
        }

        var cuerpo = document.getElementById("tCuerpo");

        cuerpo.innerHTML = cuerpo.innerHTML + 
        "<td>" + txtNombre.value + "</td>" +
        "<td>"+ txtApellido.value  + "</td><td><a href=''> borrar </a></td>";
    })

}