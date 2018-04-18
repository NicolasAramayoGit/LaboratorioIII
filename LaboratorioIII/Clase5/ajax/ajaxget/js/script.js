

addEventListener('load', asignarManejadores);

var frm;
var req; // request
// var res a la respuesta.

function asignarManejadores() {
    frm = document.getElementById('frm');
    frm.addEventListener('submit',function(e){
        e.preventDefault();// esta deshabilitando el submit del formulario.
        enviarDatos();
    });
}

function enviarDatos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var data = "pagina.php?nombre=" + nombre + "&apellido=" + apellido;
    console.log(data);
    req = new XMLHttpRequest();

    req.open('GET',data,true); // true lo hace asincronico.

    //cambios de estado
    
    //no se va a ejecutar antes que el send.
    req.onreadystatechange = function(){
        //status de una pet es la respuesta que devolvio el servidor (caido,etc)
        if (req.readyState == 4 && req.status == 200) {
            document.getElementById("contenido").innerHTML = req.responseText;
        }
    };

    req.send(); //recien ahora se manda la peticion
}

/*function enviarDatos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var data = "nombre=" + encodeURIComponent(nombre)  + "&apellido=" + encodeURIComponent(apellido); // codificacion que normalmente le hace elformulario
    //console.log(data);
    req = new XMLHttpRequest();

    req.open('POST',data,true); // true lo hace asincronico.

    //
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //cambios de estado
    
    //no se va a ejecutar antes que el send.
    req.onreadystatechange = function(){
        //status de una pet es la respuesta que devolvio el servidor (caido,etc)
        if (req.readyState == 4 && req.status == 200) {
            document.getElementById("contenido").innerHTML = req.responseText;
        }
    };

    req.send(data); //recien ahora se manda la peticion
}*/
