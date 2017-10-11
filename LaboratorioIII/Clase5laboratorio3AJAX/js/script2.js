addEventListener('load', function(){
    var btnEnviar = document.getElementById('btnEnviar');
    
    //agrego manejador
    btnEnviar.addEventListener('click', enviar);
    
});

//lo voy a declarar GLOBAL porque 
// lo vaamos a usar mas de una vez

var xhr;


function enviar() {

    var nombre = document.getElementById('txtNombre').value;
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
    if (xhr.readyState == 4)
    {
        if(xhr.status == 200)
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