$(function () {
    //botones
    var agregar = $("#btnAgregar");
    var btnPromedio = $("#btnPromedio");
    //selects
    var select = $("#tipo");
    var select2 = $("#tipo2");
    //let foto: any = $("#foto");
    //checkes
    var checkNombre = $("#checkNombre");
    var checkEdad = $("#checkEdad");
    var checkPatas = $("#checkPatas");
    var checkTipo = $("#checkTipo");
    //cargo los select
    for (var i = 0; i < 3; i++) {
        select.append("<option value=" + i + ">" + Entidades.puestos[i] + "</option>");
        select2.append("<option value=" + i + ">" + Entidades.puestos[i] + "</option>");
    }
    select2.append("<option value='4'>Todos</option>");
    //DEPRECATED por obsoleto.
    /*select.change(function () {
        let cantidadPatas: number = <number>select.val();

        if (cantidadPatas >= 0 && cantidadPatas < 4) {
            $("#patas").val(4);
        }
        else {
            $("#patas").val(0);
        }
    });*/
    //armado de tablas filtradas.
    select2.change(armarTablaFiltrada);
    checkNombre.change(armarTablaFiltrada);
    checkEdad.change(armarTablaFiltrada);
    checkPatas.change(armarTablaFiltrada);
    checkTipo.change(armarTablaFiltrada);
    //acciones al cliclear
    agregar.click(AgregarEmpleado);
    btnPromedio.click(calcularPromedio);
    refrescarLista();
});
//DEPRECATED por uso de otra función.
//function getBase64(archivo:any) {
//    return btoa(archivo);
//}
//DEPRECATED por falta de uso.
// ENCODEA IMAGEN retorna una url data
/*function encodeImageFileAsURL() {

    var filesSelected = document.getElementById("foto").files;
    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();

        fileReader.onload = function (fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64

            var newImage = document.createElement('img');
            newImage.src = srcData;

            document.getElementById("imgTest").innerHTML = newImage.outerHTML;
            alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
            console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        }
        fileReader.readAsDataURL(fileToLoad);
    }
}*/
var fotoData;
function encodeImageFileAsURL() {
    var file = document.getElementById("foto").files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        fotoData = reader.result;
    };
    reader.readAsDataURL(file);
}
function AgregarEmpleado() {
    var nombre = $("#nombre");
    var edad = $("#edad");
    var patas = $("#patas");
    var tipo = $("#tipo");
    var mascota = new Entidades.Empleado(nombre.val(), edad.val(), patas.val(), tipo.val(), fotoData);
    var MascotasString = localStorage.getItem("Mascotas");
    var mascotasArray = [];
    var mascotasArrayAux;
    if (MascotasString == null) {
        mascotasArray.push(mascota);
        console.log(mascotasArray);
    }
    else {
        mascotasArrayAux = JSON.parse(MascotasString);
        for (var indiceLeido in mascotasArrayAux) {
            mascotasArray.push(mascotasArrayAux[indiceLeido]);
        }
        console.log(mascotasArray);
        mascotasArray.push(JSON.parse(mascota.toJson()));
    }
    localStorage.setItem("Mascotas", JSON.stringify(mascotasArray));
    refrescarLista();
}
function refrescarLista() {
    var tBody = $("#tBody");
    tBody.html("<tr><th>Nombre</th><th>Edad</th><th>Pies (talle)</th><th>Tipo</th><th>Foto</th><th>Accion</th></tr>");
    var mascotas = JSON.parse(localStorage.getItem("Mascotas"));
    for (var index = 0; index < mascotas.length; index++) {
        tBody.append("<tr><td name=n" + index + ">" + mascotas[index].nombre + "</td>" +
            "<td name=a" + index + ">" + mascotas[index].edad + "</td>" +
            "<td name=a" + index + ">" + mascotas[index].patas + "</td>" +
            "<td name=a" + index + ">" + mascotas[index].tipo + "</td>" +
            "<td><img src='" + mascotas[index].foto + "' height='42' width='42'></img></td>" +
            "<td><input type=button id= " + index + " value=Borrar onclick=borrar(" + index + ")>" +
            "<input type=button id= " + index + " value=Modificar onclick=modificar(" + index + ")></td></tr>");
    }
}
function borrar(id) {
    var mascotas = JSON.parse(localStorage.getItem("Mascotas"));
    mascotas.splice(id, 1);
    localStorage.setItem("Mascotas", JSON.stringify(mascotas));
    refrescarLista();
}
function modificar(id) {
    var btn = $("#btnAgregar");
    var mascotas = JSON.parse(localStorage.getItem("Mascotas"));
    $("#nombre").val(mascotas[id].nombre);
    $("#edad").val(mascotas[id].edad);
    $("#patas").val(mascotas[id].patas);
    $("#tipo").val(Entidades.puestos[mascotas[id].tipo]);
    btn.attr("value", "modificar");
    btn.off("click", AgregarEmpleado);
    var mod;
    btn.on("click", mod = function () {
        mascotas[id].nombre = $("#nombre").val();
        mascotas[id].edad = $("#edad").val();
        mascotas[id].patas = $("#patas").val();
        mascotas[id].tipo = Entidades.puestos[$("#tipo").val()];
        localStorage.setItem("Mascotas", JSON.stringify(mascotas));
        refrescarLista();
        btn.attr("value", "Agregar");
        btn.off("click", mod);
        btn.on("click", AgregarEmpleado);
    });
}
function animalesNombre(animales) {
    return animales
        .map(function (animal) {
        return animal.nombre;
    });
}
function animalesEdad(animales) {
    return animales
        .map(function (animal) {
        return animal.edad;
    });
}
function animalesPatas(animales) {
    return animales
        .map(function (animal) {
        return animal.patas;
    });
}
function animalesTipoMap(animales) {
    return animales
        .map(function (animal) {
        return animal.tipo;
    });
}
function animalesTipoFilter(animales, tipo) {
    return animales
        .filter(function (animal) {
        return animal.tipo == tipo;
    });
}
function animalesReduce(animales) {
    if (animales.length > 0) {
        var acumEdad_1 = parseInt(animales[0].edad);
        animales
            .reduce(function (previo, actual) {
            acumEdad_1 += parseInt(actual.edad);
            return actual;
        });
        return (acumEdad_1 / animales.length);
    }
    else {
        return 0;
    }
}
function armarTablaFiltrada() {
    var checkNombre = $("#checkNombre");
    var checkEdad = $("#checkEdad");
    var checkPatas = $("#checkPatas");
    var checkTipo = $("#checkTipo");
    var select2 = $("#tipo2");
    var tr = "<tr>";
    var tBody2 = $("#tBody2");
    var tHead = $("#tHead");
    tBody2.html("");
    var mascotas = JSON.parse(localStorage.getItem("Mascotas"));
    if (select2.val() != 6) {
        mascotas = animalesTipoFilter(mascotas, (Entidades.puestos[select2.val()]));
    }
    var mascotasNombre = animalesNombre(mascotas);
    var mascotasEdad = animalesEdad(mascotas);
    var mascotasPatas = animalesPatas(mascotas);
    var mascotasTipo = animalesTipoMap(mascotas);
    if (checkNombre.is(':checked')) {
        tr += "<th>Nombre</th>";
    }
    if (checkEdad.is(':checked')) {
        tr += "<th>Edad</th>";
    }
    if (checkPatas.is(':checked')) {
        tr += "<th>Patas</th>";
    }
    if (checkTipo.is(':checked')) {
        tr += "<th>Tipo</th>";
    }
    tr += "</tr>";
    tHead.html(tr);
    for (var index = 0; index < mascotas.length; index++) {
        tr = "<tr>";
        if (checkNombre.is(':checked')) {
            tr += "<td>" + mascotasNombre[index] + "</td>";
        }
        if (checkEdad.is(':checked')) {
            tr += "<td>" + mascotasEdad[index] + "</td>";
        }
        if (checkPatas.is(':checked')) {
            tr += "<td>" + mascotasPatas[index] + "</td>";
        }
        if (checkTipo.is(':checked')) {
            tr += "<td>" + mascotasTipo[index] + "</td>";
        }
        tr += "</tr>";
        tBody2.append(tr);
    }
}
function calcularPromedio() {
    var select2 = $("#tipo2");
    var txtPromedio = $("#txtPromedio");
    var acumEdad = 0;
    var mascotas = JSON.parse(localStorage.getItem("Mascotas"));
    if (select2.val() != 6) {
        mascotas = animalesTipoFilter(mascotas, (Entidades.puestos[select2.val()]));
    }
    txtPromedio.val(animalesReduce(mascotas));
}
