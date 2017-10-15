window.onload = function () {
    MostrarGrilla();
}


function MostrarGrilla() {
    
   var tbody = $("#tbody");
   tbody.html(" ");
   traerPersonas();

}

function traerPersonas() {
    $.ajax({
        type: "GET",
        url: 'http://localhost:3000/traerpersonas',
        success: function(responseText){
            var personas = JSON.parse(responseText);
            for (i = 0; i < personas.length; i++) {
                var indice = i;
                var persona = personas[i];
                $("#tbody").append("<tr><td>" + persona.nombre + "</td>" +
                "<td>" + persona.apellido + "</td>" +
                "<td><button class='btn' onclick='Borrar(" + indice + ")'>Borrar</button><button class='btn' onclick='Modificar(" + indice + ")'>Modificar</button></td></tr>");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status+", "+thrownError);
        }
    });
}


function guardar() {
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();

    agregarpersona(nombre,apellido);

    // Limpia los valores de los input's
    $("#nombre").val(" ");
    $("#apellido").val(" ");
}

function agregarpersona(nombre, apellido){
    $.ajax({
        success: function (responseText) {
            alert(responseText);
            MostrarGrilla();
        }, 
        type: "POST",
        url: 'http://localhost:3000/agregarpersona',
        data: {'nombre': nombre, 'apellido':apellido },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status+", "+thrownError);
        }
    });
}


function Borrar(indice) {
    
    $.ajax({
        success: function (responseText) {
            alert(responseText);
            MostrarGrilla();
        },
        type: 'POST',
        url: 'http://localhost:3000/eliminarpersona',
        data: {'indice': indice},
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + ", " + throwError);
        }
    });
}

// FALTA EL MODIFICAR 
function traerpersona(indice) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/traerpersona',
        data: { 'indice': indice },
        success: function (responseText) {
            var persona = JSON.parse(responseText);

            // AGREGA EN EL INPUT EL NOMBRE Y APELLIDO
            // DE LA PERSONA A MOFICAR.
            $("#nombre").val(persona.nombre);
            $("#apellido").val(persona.apellido);

            $("#btnguardar").html('Modificar');
            $("#btnguardar").attr('onclick','modificarpersona('+ indice +')');

        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status+", "+thrownError);
        }
    });
}

function Modificar(indice) {
    traerpersona(indice);
}

function modificarpersona(indice) {

    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();

    var persona = {'nombre': nombre, 'apellido': apellido};

    // Limpia los campos.
    $("#nombre").val("");
    $("#apellido").val("");

    $.ajax({
        success: function (responseText) {
            $("#btnguardar").attr('onclick','guardar()');
            $("#btnguardar").html('Guardar');
            alert(responseText);
            MostrarGrilla();
        },
        type: 'POST',
        url: 'http://localhost:3000/modificarpersona',
        data: {'indice': indice, 'persona': JSON.stringify(persona)},
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + ", " + throwError);
        }
    });
}