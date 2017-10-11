window.addEventListener('load',function () {
var frm = document.getElementById('miformulario');
frm.addEventListener('submit', enviarDatos);
    
});


function enviarDatos(e) {

    //estoy matando toda la lista de invocacion, no va a enviar datos.
    e.preventDefault();

    console.log(e);

    enviarFormulario();
}

function enviarFormulario() {

    var nombre = document.getElementById('txtUsuario').value;
    var edad = document.getElementById('txtEdad').value;


    //instanciamos el objeto.
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = gestionarRespuesta;
    xhr.open('GET', 'pagina1.php?nombre=' + nombre + "&edad=" + edad, true);
    xhr.send();
    
}

function gestionarRespuesta() {
    
        var div = document.getElementById('mensaje');
    
        // SE QUEDA EN SLEEP 3 SEGUNDOS, MIENTRAS MUESTRA SPINNER.
        div.innerHTML = '<img src="img/30.gif">';
    
        //llego toda la respuesta.
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            //la respuesta basicamente viaja como texto.
            div.innerHTML = xhr.responseText;
            }else
            {
            //div.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
            div.innerHTML = '<img src="img/30.gif">';
            }
    
        }
    }