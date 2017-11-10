"use strict";
var Validaciones;
(function (Validaciones) {
    function validarCadena(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarCadena = validarCadena;
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
