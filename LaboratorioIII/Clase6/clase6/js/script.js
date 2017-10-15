$(function () {

    //Seria un setter.
    //$("#nombre").val("Jose");

    var boton = $("#boton1");

    boton.click(manejadorBoton);

    function manejadorBoton() {
        
        alert("Hola,  " + $("#nombre").val());
    }


    // SELECTOR DESCENDIENTE
    // ESTOY HACIENDO REFERENCIA A TODOS LAS IMAGENES DE LA PAGINA.
    // $("#imagenes img")
    
    // .html()
    // va a hacer un como un innerHTML. [TOMA ETIQUETAS]

    // .text()
    // hace lo mismo que el html(), pero el text(), 
    // trata todo como texto. [LITERAL]

    // .append()
    // contatena despues del nodo, por ejemplo: div -> append() ....

    // .preappend()
    //

    // .before()
    // 

    // .after()
    // contatena 

    // .each()
    // recorre toda el elemento del array,
    // 
    
    // BUSCAR TODOS LOS EVENTOS DEL MOUSE.
    // .click() .dbclick() .mouseup() mousedown()
    // 

    // $.get() $.post() $.getJson()

    $.ajax({

        //lo que yo quiero que se ejecute antes.
        //beforesend: 
        // el manejador cuando se ejecute cuando este todo ok
        // success; function(x) // responsetext
        // se va a ejecutar en caso de que alla abido un error
        // error: fuction(xhr,status,text).
        // complete: // la funcion que se ejecuta siempre, seria un finally.
        // url: 
        // type: //el tipo de peticion
        // data: //en caso de enviar enviar parametros como JSON {'nombre':nombre ; ... ; ... ;}
        // var data = $('#miformulario').serialize();
        // tenemos que capturar el evento submit e.
        // timeout: milisegundos, cuando se excede de tiempo.
        // datatype: // el tipo de dato que quiero que medevuelva el servidor. 
        // si le pongo datatype: 'json' si no me devuelve un json no devuelve. no tengo que hacer un json.parse.

    });



});