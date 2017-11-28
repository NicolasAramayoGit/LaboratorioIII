/// <reference path="./EMascota.ts"/>
/// <reference path="./mascota.ts"/>
/// <reference path="./animal.ts"/>
$(function () {
    var select = $("#tipo");
    var btnAgregarMascota = $("#btnAgregarMascota");
    var btnPromedio = $("#btnPromedio");
    var select2 = $("#tipo2");
    var checkId = $("#checkId");
    var checkNombre = $("#checkNombre");
    var checkEdad = $("#checkEdad");
    var checkPatas = $("#checkPatas");
    var checkTipo = $("#checkTipo");
    var CANTIDAD_TIPOS_ANIMALES = 6;
    // CARGO EL SELECT.
    for (var i = 0; i < CANTIDAD_TIPOS_ANIMALES; i++) {
        select.append("<option value=" + i + ">" + Entidades.EMascota[i] + "</option>");
        select2.append("<option value=" + i + ">" + Entidades.EMascota[i] + "</option>");
    }
    select2.append("<option value=" + CANTIDAD_TIPOS_ANIMALES + ">Todos</option>");
    // Agregar Mascotas
    btnAgregarMascota.click(AgregarMascotas);
    // Promedio
    btnPromedio.click(calcularPromedio);
});
function AgregarMascotas() {
    // Casteo de datos.
    var nombre = $("#nombre").val();
    var edad = parseInt($("#edad").val());
    var patas = parseInt($("#patas").val());
    var tipo = $("#tipo").val();
    var id = $("#id").val();
    // CREO UN OBJETO TIPO MASCOTA.
    var mascota = new Entidades.mascota(nombre, edad, patas, id, tipo);
    var MascotasString = localStorage.getItem("Mascotas");
    var mascotasArray = [];
    var mascotasArrayAux;
    // Si es null agrego mascota.
    if (MascotasString == null) {
        mascotasArray.push(mascota);
    }
    else {
        mascotasArrayAux = JSON.parse(MascotasString);
        for (var indiceLeido in mascotasArrayAux) {
            mascotasArray.push(mascotasArrayAux[indiceLeido]);
        }
        mascotasArray.push(JSON.parse(mascota.ToJSON()));
    }
    console.log(mascotasArray);
    localStorage.setItem("Mascotas", JSON.stringify(mascotasArray));
    refrescarlista();
}
function refrescarlista() {
    var tbody = $("#tbody");
    tbody.html("<tr><th>ID</th><th>Nombre</th><th>edad</th><th>patas</th><th>tipo</th><th>accion</th></tr>");
    var mascotas = JSON.parse(localStorage.getItem("Mascotas"));
    for (var i = 0; i < mascotas.length; i++) {
        var mascota = mascotas[i];
        tbody.append("<tr><td>" + mascota.id + "</td><td>" + mascota.nombre + "</td><td>" + mascota.edad +
            "</td><td>" + mascota.patas + "</td><td>" + Entidades.EMascota[mascota.tipo] + "</td>" +
            "<td><input type=button value=Borrar onclick=borrar(" + i + ")>" +
            "<input type=button value=Modificar onclick=modificar(" + i + ")></td></tr>");
    }
}
function borrar(id) {
    //obtengo el array de mascotas.
    var mascotas = JSON.parse(localStorage.getItem("Mascotas"));
    //borro elemento.
    mascotas.splice(id, 1);
    //devuelvo el array de mascotas.
    localStorage.setItem("Mascotas", JSON.stringify(mascotas));
    refrescarlista();
}
function modificar(id) {
    //obtengo el arrat de mascotas.
    var mascota = JSON.parse(localStorage.getItem("Mascotas"));
    //referencia al boton agregar mascotas.
    var btn = $("#btnAgregarMascota");
    //hago que aparescan los datos en los inputs.
    $("#nombre").val(mascota[id].nombre);
    $("#edad").val(mascota[id].edad);
    $("#patas").val(mascota[id].patas);
    $("#tipo").val(Entidades.EMascota[mascota[id].tipo]);
    $("#id").val(mascota[id].id);
    //cambio el atributo value con el parametro modificar.
    btn.attr("value", "modificar");
    btn.off("click", AgregarMascotas);
    var mod;
    btn.on("click", mod = function () {
        mascota[id].nombre = $("#nombre").val();
        mascota[id].edad = $("#edad").val();
        mascota[id].patas = $("#patas").val();
        mascota[id].tipo = $("#tipo").val();
        mascota[id].id = $("#id").val();
        localStorage.setItem("Mascotas", JSON.stringify(mascota));
        refrescarlista();
        btn.attr("value", "Agregar");
        btn.off("click", mod);
        btn.on("click", AgregarMascotas);
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
        //hola
        animales
            .reduce(function (previo, actual) {
            acumEdad_1 += parseInt(actual.edad);
            //cantidad += 1;
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
        mascotas = animalesTipoFilter(mascotas, (Entidades.EMascota[select2.val()]));
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
        mascotas = animalesTipoFilter(mascotas, (Entidades.EMascota[select2.val()]));
    }
    txtPromedio.val(animalesReduce(mascotas));
}
