/// <reference path="./EMascota.ts"/>
/// <reference path="./mascota.ts"/>
/// <reference path="./animal.ts"/>

$(function () {


    let select = $("#tipo");
    let btnAgregarMascota = $("#btnAgregarMascota");
    let btnPromedio = $("#btnPromedio");

    let select2 = $("#tipo2");
    let checkId = $("#checkId");
    let checkNombre = $("#checkNombre");
    let checkEdad = $("#checkEdad");
    let checkPatas = $("#checkPatas");
    let checkTipo = $("#checkTipo");

    const CANTIDAD_TIPOS_ANIMALES = 6;

    // CARGO EL SELECT.
    for (let i = 0; i < CANTIDAD_TIPOS_ANIMALES; i++) {
        select.append("<option value=" + i + ">" + Entidades.EMascota[i] + "</option>");
        select2.append("<option value=" + i + ">" + Entidades.EMascota[i] + "</option>")
    }

    select2.append("<option value=" + CANTIDAD_TIPOS_ANIMALES + ">Todos</option>")

    // Agregar Mascotas
    btnAgregarMascota.click(AgregarMascotas);

    // Promedio
    btnPromedio.click(calcularPromedio);
});

function AgregarMascotas(): void {
    // Casteo de datos.
    let nombre: string = <string>$("#nombre").val();
    let edad: number = parseInt(<string>$("#edad").val());
    let patas: number = parseInt(<string>$("#patas").val());
    let tipo: Entidades.EMascota = <number>$("#tipo").val();
    let id: number = <number>$("#id").val();


    // CREO UN OBJETO TIPO MASCOTA.
    let mascota: Entidades.mascota = new Entidades.mascota(nombre, edad, patas, id, tipo);

    let MascotasString: string | null = localStorage.getItem("Mascotas");
    let mascotasArray = [];
    let mascotasArrayAux;

    // Si es null agrego mascota.
    if (MascotasString == null) {
        mascotasArray.push(mascota);
    }
    else {
        mascotasArrayAux = JSON.parse(MascotasString);

        for (let indiceLeido in mascotasArrayAux) {
            mascotasArray.push(mascotasArrayAux[indiceLeido]);
        }

        mascotasArray.push(JSON.parse(mascota.ToJSON()));
    }

    console.log(mascotasArray);
    localStorage.setItem("Mascotas", JSON.stringify(mascotasArray));

    refrescarlista();
}

function refrescarlista() {
    let tbody = $("#tbody");

    tbody.html("<tr><th>ID</th><th>Nombre</th><th>edad</th><th>patas</th><th>tipo</th><th>accion</th></tr>");

    let mascotas = JSON.parse(<string>localStorage.getItem("Mascotas"));

    for (let i = 0; i < mascotas.length; i++) {
        const mascota = mascotas[i];

        tbody.append("<tr><td>" + mascota.id + "</td><td>" + mascota.nombre + "</td><td>" + mascota.edad +
            "</td><td>" + mascota.patas + "</td><td>" + Entidades.EMascota[mascota.tipo] + "</td>" +
            "<td><input type=button value=Borrar onclick=borrar(" + i + ")>" +
            "<input type=button value=Modificar onclick=modificar(" + i + ")></td></tr>");

    }
}

function borrar(id: number) {
    //obtengo el array de mascotas.
    let mascotas: Entidades.mascota[] = JSON.parse(<string>localStorage.getItem("Mascotas"));

    //borro elemento.
    mascotas.splice(id, 1)

    //devuelvo el array de mascotas.
    localStorage.setItem("Mascotas", JSON.stringify(mascotas));

    refrescarlista();
}

function modificar(id: number) {
    //obtengo el arrat de mascotas.
    let mascota = JSON.parse(<string>localStorage.getItem("Mascotas"));

    //referencia al boton agregar mascotas.
    let btn = $("#btnAgregarMascota");

    //hago que aparescan los datos en los inputs.
    $("#nombre").val(mascota[id].nombre);
    $("#edad").val(mascota[id].edad);
    $("#patas").val(mascota[id].patas);
    $("#tipo").val(Entidades.EMascota[<number>mascota[id].tipo]);
    $("#id").val(mascota[id].id);

    //cambio el atributo value con el parametro modificar.
    btn.attr("value", "modificar");

    btn.off("click", AgregarMascotas);

    let mod: any;

    btn.on("click", mod = function () {
        mascota[id].nombre = <string>$("#nombre").val();
        mascota[id].edad = <number>$("#edad").val();
        mascota[id].patas = <number>$("#patas").val();
        mascota[id].tipo = $("#tipo").val();
        mascota[id].id = <number>$("#id").val();

        localStorage.setItem("Mascotas", JSON.stringify(mascota));

        refrescarlista();

        btn.attr("value", "Agregar");
        btn.off("click", mod);
        btn.on("click", AgregarMascotas);
    });

}

function animalesNombre(animales: any) {
    return animales
        .map(function (animal: any) {
            return animal.nombre;
        });
}

function animalesEdad(animales: any) {
    return animales
        .map(function (animal: any) {
            return animal.edad;
        });
}


function animalesPatas(animales: any) {
    return animales
        .map(function (animal: any) {
            return animal.patas;
        });
}

function animalesTipoMap(animales: any) {
    return animales
        .map(function (animal: any) {
            return animal.tipo;
        });
}

function animalesTipoFilter(animales: any, tipo: any) {
    return animales
        .filter(function (animal: any) {
            return animal.tipo == tipo;
        });
}

function animalesReduce(animales: any) {
    if (animales.length > 0) {
        let acumEdad = parseInt(animales[0].edad);
        //hola
        animales
            .reduce(function (previo, actual) {

                acumEdad += parseInt(actual.edad);
                //cantidad += 1;
                return actual;
            });

        return (acumEdad / animales.length);
    }
    else {
        return 0;
    }

}

function armarTablaFiltrada() {
    let checkNombre = $("#checkNombre");
    let checkEdad = $("#checkEdad");
    let checkPatas = $("#checkPatas");
    let checkTipo = $("#checkTipo");
    let select2 = $("#tipo2");
    let tr = "<tr>";

    let tBody2 = $("#tBody2");
    let tHead = $("#tHead");

    tBody2.html("");

    let mascotas = JSON.parse(localStorage.getItem("Mascotas"));

    if (select2.val() != 6) {
        mascotas = animalesTipoFilter(mascotas, (Entidades.EMascota[select2.val()]));
    }

    let mascotasNombre = animalesNombre(mascotas);
    let mascotasEdad = animalesEdad(mascotas);
    let mascotasPatas = animalesPatas(mascotas);
    let mascotasTipo = animalesTipoMap(mascotas);

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
    let select2 = $("#tipo2");
    let txtPromedio = $("#txtPromedio");
    let acumEdad = 0;

    let mascotas = JSON.parse(localStorage.getItem("Mascotas"));

    if (select2.val() != 6) {
        mascotas = animalesTipoFilter(mascotas, (Entidades.EMascota[select2.val()]));
    }

    txtPromedio.val(animalesReduce(mascotas));


}