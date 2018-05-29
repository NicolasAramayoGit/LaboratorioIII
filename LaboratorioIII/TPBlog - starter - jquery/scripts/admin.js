var xhr;
var datos = new Array();
var postAModificar;


window.onload = function () {
        $("#btnGuardar").on("click",function(){
                var titulo = $("#txtTitulo").val();
                var articulo = $("#txtArticulo").val();
                var mas = $("#txtMas").val();


                var data;
                
                if (postAModificar) {
                        //console.log(titulo);
                        data = {
                                "titulo": titulo,
                                "articulo": articulo,
                                "mas": mas,
                                "collection": "posts",
                                "id": postAModificar.id,
                                "active": postAModificar.active,
                                "created_dttm": postAModificar.created_dttm
                        }
                        enviarModificacion(data);
                }else
                {
                        //console.log(titulo);
                        data = {
                                "titulo": titulo,
                                "articulo": articulo,
                                "mas": mas,
                                "collection": "posts"
                        }
                        enviarAlta(data);
                }

                

        });

        cargarDatos();
}


function cargarDatos() {
        $.ajax({
            method: "GET",
            url: 'http://localhost:3000/traer',
            dataType: "json",
            data: {'collection': 'posts'},
            beforeSend: function () { // SPINNER
                    $("#tbody").html("<tr><td colspan='6' style = 'padding: 40px;'><img src='img/30.gif'></td></tr>");
            },
            success: function (result) {
                    console.log(result.message);
                    refrescarTabla(result.data);
                    datos = result.data;
                    //console.log(datos);
            },
            error: function (jqXHR,textStatus,errorThrown) {
                    console.log("Error : " + errorThrown);      
            },
            complete: function (jqXHR,textStatus,errorThrown){
                    console.log("Completo: " + textStatus);
            }
        });

}


function refrescarTabla(data) {
        var tabla = this.document.getElementById("tblPosts");
        var nuevasFilas = "";

        // MUESTRO LA TABLA.
        for (var i in data) {
                nuevasFilas += "<tr>";
                nuevasFilas += "<td>" + data[i].id + "</td>";
                nuevasFilas += "<td>" + data[i].created_dttm + "</td>";
                nuevasFilas += "<td>" + data[i].titulo + "</td>";
                nuevasFilas += "<td>" + data[i].articulo + "</td>";
                nuevasFilas += "<td><input type='button' value='Modificar' onclick='modificar(" + data[i].id + ")'></td>";
                nuevasFilas += "<td><input type='button' style='display: inline-block' value=' Borrar' onclick='borrar(" + data[i].id + ")'></td>";
                nuevasFilas += "</tr>";
        }
        tabla.children[2].innerHTML = nuevasFilas;
}

function enviarAlta(data) {
        $.ajax({
                method: "POST",
                url: "http://localhost:3000/agregar",
                data: data,
                dataType: "json",
                beforeSend: function () {
                        $("#tbody").html("<tr><td colspan='6' style = 'padding: 40px;'><img src='img/30.gif'></td></tr>");
                },
                success: function (result) {
                        limpiarCampos();
                        console.log(result.message);
                        cargarDatos();
                        postAModificar = null;
                },
                error: function (jqXHR, textStatus, errorThrown) {
                        console.log("Error: " + errorThrown);
                },
                complete: function (jqXHR, textStatus, errorThrown) {
                        console.log("Completo : " + textStatus);
                }

        });
}

function limpiarCampos() {
        $("#txtTitulo").val(" ");
        $("#txtArticulo").val(" ");
        $("#txtMas").val(" ");
}

function borrar(id) {
        $.ajax({
                url: "http://localhost:3000/eliminar",
                method: "POST",
                data: { "collection": "posts", "id": id },
                dataType: "json",
                beforeSend: function () {
                        $("#tbody").html("<tr><td colspan='6' style = 'padding: 40px;'><img src='img/30.gif'></td></tr>");    
                },
                success: function (result) {
                        console.log(result.message);
                        cargarDatos();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                        console.log("Error :" + errorThrown);
                },
                complete: function (jqXHR, textStatus, errorThrown) {
                        console.log("Completado :" + textStatus);
                }
        });
}

function modificar(id) {
        postAModificar = datos.find(x => x.id === id);
        $("#txtTitulo").val(postAModificar.titulo);
        $("#txtArticulo").val(postAModificar.articulo);
        $("#txtMas").val(postAModificar.mas);
}

function enviarModificacion(data){
        console.log(data);
        
        $.ajax({
                url: "http://localhost:3000/modificar",
                method: "POST",
                dataType: "json",
                data: data,
                /*beforeSend: function () {
                        $("#tbody").html("<tr><td colspan='6' style = 'padding: 40px;'><img src='img/30.gif'></td></tr>");
                },*/
                success: function (result) {
                        //console.log(result.message);
                        cargarDatos();
                        limpiarCampos();
                        postAModificar = null;
                },
                error: function (jqXHR, textStatus, errorThrown) {
                        console.log("Error :" + errorThrown);
                },
                complete: function (jqXHR, textStatus, errorThrown){
                        console.log("completo :" + textStatus);
                }
        });
}