$(function () {
    //botones
    let agregar = $("#btnAgregar");
    let btnPromedio = $("#btnPromedio");

    //selects
    let select = $("#tipo");
    let select2 = $("#tipo2");


    let foto: any = $("#foto");


    //checkes
    let checkNombre = $("#checkNombre");
    let checkEdad = $("#checkEdad");
    let checkPatas = $("#checkPatas");
    let checkTipo = $("#checkTipo");

    //cargo los select
    for (var i = 0; i < 3; i++) {
        select.append("<option value=" + i + ">" + practicaMascotas.animales[i] + "</option>");
        select2.append("<option value=" + i + ">" + practicaMascotas.animales[i] + "</option>");
    }

    select2.append("<option value=4>Todos</option>");

    select.change(function () {
        let cantidadPatas: number = <number>select.val();

        if (cantidadPatas >= 0 && cantidadPatas < 4) {
            $("#patas").val(4);
        }
        else {
            $("#patas").val(0);
        }
    });

    //armado de tablas filtradas.
    select2.change(armarTablaFiltrada);
    checkNombre.change(armarTablaFiltrada);
    checkEdad.change(armarTablaFiltrada);
    checkPatas.change(armarTablaFiltrada);
    checkTipo.change(armarTablaFiltrada);

    //acciones al cliclear
    agregar.click(AgregarMascota);
    btnPromedio.click(calcularPromedio);

    refrescarLista();
});

//function getBase64(archivo:any) {
//    return btoa(archivo);
//}

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
let fotoData:string;

function encodeImageFileAsURL() {
    var file = document.getElementById("foto").files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        fotoData = reader.result;
    }
    reader.readAsDataURL(file);
}



function AgregarMascota(): void {
    let nombre = $("#nombre");
    let edad = $("#edad");
    let patas = $("#patas");
    let tipo = $("#tipo");


    let mascota: practicaMascotas.Empleado =
        new practicaMascotas.Empleado(<string>nombre.val(), <number>edad.val(), <number>patas.val(), <number>tipo.val(),<string> fotoData);

    let MascotasString: string | null = localStorage.getItem("Mascotas");
    let mascotasArray = [];
    let mascotasArrayAux;

    if (MascotasString == null) {
        mascotasArray.push(mascota);
        console.log(mascotasArray);
    }
    else {
        mascotasArrayAux = JSON.parse(MascotasString);

        for (let indiceLeido in mascotasArrayAux) {
            mascotasArray.push(mascotasArrayAux[indiceLeido]);
        }
        console.log(mascotasArray);
        mascotasArray.push(JSON.parse(mascota.toJson()));

    }

    localStorage.setItem("Mascotas", JSON.stringify(mascotasArray));

    refrescarLista();

}

function refrescarLista() {
    let tBody = $("#tBody");

    tBody.html("<tr><th>Nombre</th><th>Edad</th><th>Pies (talle)</th><th>Tipo</th><th>Foto</th><th>Accion</th></tr>");

    let mascotas = JSON.parse(<string>localStorage.getItem("Mascotas"));

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


function borrar(id: number) {
    let mascotas = JSON.parse(<string>localStorage.getItem("Mascotas"));

    //El primer parametro del splice indica la posición del array a partir del cual queremos borrar
    //elementos. El segundo indica la cantidad de elementos de ahí en adelante. Como yo solo quiero
    //borrar el elemento de la posición indicada le pongo un 1.
    //Además el splice reordena el array corriendo los índices posteriores hacia abajo porque
    //desapareció el índice que eliminé.
    mascotas.splice(id, 1);

    localStorage.setItem("Mascotas", JSON.stringify(mascotas));

    refrescarLista();
}

function modificar(id: number) {
    let btn = $("#btnAgregar");
    let mascotas = JSON.parse(<string>localStorage.getItem("Mascotas"));

    $("#nombre").val(mascotas[id].nombre);
    $("#edad").val(mascotas[id].edad);
    $("#patas").val(mascotas[id].patas);
    $("#tipo").val(practicaMascotas.animales[mascotas[id].tipo]);

    btn.attr("value", "modificar");

    btn.off("click", AgregarMascota);

    let mod: any;

    btn.on("click", mod = function () {
        mascotas[id].nombre = $("#nombre").val();
        mascotas[id].edad = $("#edad").val();
        mascotas[id].patas = $("#patas").val();
        mascotas[id].tipo = practicaMascotas.animales[$("#tipo").val()];

        localStorage.setItem("Mascotas", JSON.stringify(mascotas));

        refrescarLista();

        btn.attr("value", "Agregar");
        btn.off("click", mod);
        btn.on("click", AgregarMascota);
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
        mascotas = animalesTipoFilter(mascotas, (practicaMascotas.animales[select2.val()]));
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
        mascotas = animalesTipoFilter(mascotas, (practicaMascotas.animales[select2.val()]));
    }

    txtPromedio.val(animalesReduce(mascotas));


}

