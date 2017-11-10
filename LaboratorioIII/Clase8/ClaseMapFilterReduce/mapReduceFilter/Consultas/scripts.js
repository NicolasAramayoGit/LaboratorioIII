console.log(data);

/*
    realizar las operaciones usando los metodos map,  reduce y filter y combinaciones entre ellos
  */


var soluciones = {};

// Retornar un array con los nombres de los usuarios femeninos

soluciones.usuariosFemeninos = function(usuarios){
    return usuarios
    .filter(function(user){
        return user.genero === 'Female';
    })
    .map(function(user){
        return user.nombre;
    });
}

console.log(soluciones.usuariosFemeninos(data));

// Retornar un array de strings (el email de los usuarios de sexo masculino)

soluciones.mailsVarones = function(usuarios){
    return usuarios
    .filter(function(user){
        return user.genero === 'Male';
    })
    .map(function(user){
        return user.email;
    });
}

console.log(soluciones.mailsVarones(data));

// Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que 'edad'

soluciones.usuariosMayores = function(usuarios, edad){
    return usuarios
    .filter( function(user){
        return user.edad > edad;
    })
    .map(function(user) {
        return {
            "nombre": user.nombre,
            "email": user.email,
            "edad": user.edad,
        }
    });
}

console.log(soluciones.usuariosMayores(data, 40));

// Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.

soluciones.usuarioMasGrande = function(usuarios){
    return usuarios
    .map(function(user){
        return user.edad;
    })
    .reduce(function (previo, actual) {
        if (previo > actual) {
            return previo;
        } else {
            return actual;
        }
    });
}

//console.log(soluciones.usuarioMasGrande(data));

// Retornar el promedio de edad de los usuarios (number)

soluciones.promedio = function(usuarios){
    var edades = usuarios.map(function(user){
        return user.edad; 
    })
    var acumEdad = edades.reduce(function(previo,actual){
        return previo + actual;
    })
    var cantidad = edades.reduce(function(previo,actual,index) {
        return index;
    })
    return (acumEdad /cantidad).toFixed(2);
}

console.log("Promedio edad usuarios " + soluciones.promedio(data));

// Retornar el promedio de edad de los usuarios hombres (number)

soluciones.promedioVarones = function(usuarios){
    var arr = usuarios.filter(function(user){
       return user.genero === 'Male';
    })
    var edadesHombre = arr.map(function(user){
        return user.edad;
    });
    var acumEdadHombres = edadesHombre.reduce(function (previo,actual) {
        return previo + actual;
    })
    var cantidadHombres = edadesHombre.length;

    return (acumEdadHombres / cantidadHombres).toFixed(2);
}

console.log("Promedio edad Varones " + soluciones.promedioVarones(data));

 // Retornar el promedio de edad de los usuarios mujeres (number)

soluciones.promedioMujeres = function(usuarios){
    var arr = usuarios.filter(function (user) {
        return user.genero === 'Female';
    })
    var edadesMujeres = arr.map(function (user) {
        return user.edad;
    });
    var acumEdadMujeres = edadesMujeres.reduce(function (previo, actual) {
        return previo + actual;
    })
    var cantidadMujeres = edadesMujeres.length;

    return (acumEdadMujeres / cantidadMujeres).toFixed(2);
}

console.log("Promedio edad Mujeres " + soluciones.promedioMujeres(data));