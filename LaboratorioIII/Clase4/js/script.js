

// USO DEL 'typeof'.
var a = 1;

alert(typeof(a));

a = false;

alert(typeof(a));

// FUNCIONES
function MIFUNCION(a,b) {
    return a+b;
}

// funcion anonima.
var saludar = function(Tunombre){
    alert("hola " + Tunombre + ", buenos dias...");
}

alert("La suma de 2 + 2 es: " + MIFUNCION(2,2));
saludar('pepe');


