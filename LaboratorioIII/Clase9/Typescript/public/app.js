var Validaciones;
(function (Validaciones) {
    function validarCadena(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarCadena = validarCadena;
})(Validaciones || (Validaciones = {}));
var Validaciones;
(function (Validaciones) {
    // export para que se vea desde afuera.
    Validaciones.PI = 3.1415;
    function validarNumero(numero) {
        if (numero >= 0) {
            return true;
        }
        return false;
    }
    Validaciones.validarNumero = validarNumero;
})(Validaciones || (Validaciones = {}));
///<reference path="validaciones/textos.ts"/>
//let a = Validaciones.PI;
console.log(Validaciones.validarCadena('Juan'));
