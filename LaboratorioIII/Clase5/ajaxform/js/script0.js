addEventListener('load', function(){
    var btnleer = document.getElementById('btnleer');
    
    //agrego manejador
    btnleer.addEventListener('click', enviar);
    
});

//lo voy a declarar GLOBAL porque 
// lo vaamos a usar mas de una vez

var xhr;


function enviar() {

    //instanciamos el objeto.
    xhr = new XMLHttpRequest();

    // EVENTO
    // cada vez que el ready state cambia 
    xhr.onreadystatechange = gestionarRespuesta;
    
    //ABRIR LA CONEXCION POR POST O GET, ruta URL, Si es Asycn.
    xhr.open('GET', 'prueba1.txt',true);
    //ENVIAR LA PETICION.
    xhr.send();
    //alert("hola");
}



function gestionarRespuesta() {

    var div = document.getElementById('contenedor');


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