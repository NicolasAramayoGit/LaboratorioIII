var xhr;
var datos = new Array();
var postAModificar;

window.onload = function(){
    
    document.getElementById("btnGuardar").addEventListener("click",function () {

        
        var titulo = document.getElementById("txtTitulo");    
        var articulo = document.getElementById("txtArticulo");
        var mas = document.getElementById("txtMas");

        var data;

        if (postAModificar) {
            data = {
                "titulo": titulo.value,
                "articulo": articulo.value,
                "mas": mas.value,
                "collection": "posts",
                "id": postAModificar.id,
                "active": postAModificar.active,
                "created_dttm": postAModificar.created_dttm
            }
            enviarModificacion(data);
        }else{
            data = {
                "titulo": titulo.value,
                "articulo": articulo.value,
                "mas": mas.value,
                "collection": "posts"
            }
            enviarAlta(data);
        }
    });// END GUARDAR
    cargarDatos();

};




function cargarDatos(){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
           var resp = JSON.parse(this.response); 
           console.log(resp.message);
           refrescarTabla(resp.data);
           datos = resp.data;
        }
    };
    xhr.open("POST","http://localhost:3000/traer",true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({"collection":"posts"}));
    
}

function refrescarTabla(data){
    var tabla = this.document.getElementById("tblPosts");
    var nuevasFilas = "";

    // MUESTRO LA TABLA.
    for(var i in data){
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

function modificar(id) {
    // CARGO EN LOS INPUTS, LOS POST A MODIFICAR.
    postAModificar = datos.find(x => x.id === id); // devuelve el obj en una coleccion, que cumpla con la condicion.
    document.getElementById('txtTitulo').value = postAModificar.titulo;
    document.getElementById('txtArticulo').value = postAModificar.articulo;
    document.getElementById('txtMas').value = postAModificar.mas;
}

function limpiarCampos() {
    console.log('limpio paso bandera');
    document.getElementById("txtTitulo").value = "";
    document.getElementById("txtArticulo").value = "";
    document.getElementById("txtMas").value = "";
}

function enviarModificacion(data)
{
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resp = this.response;
            console.log(resp);
            cargarDatos();
            limpiarCampos();
            postAModificar = null;
        }
    };
    xhr.open("POST", "http://localhost:3000/modificar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

function enviarAlta(data) {

    var tabla = document.getElementById("tblPosts");

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(this.response);
            console.log(resp.message);
            cargarDatos();
            limpiarCampos();
            postAModificar = null;
        }
    };
    xhr.open("POST", "http://localhost:3000/agregar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

function borrar(id) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(this.response);
            console.log(resp.message);
            cargarDatos();
        }
    }
    xhr.open("POST", "http://localhost:3000/eliminar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ "collection": "posts", "id": id }));
}
