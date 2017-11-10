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
})(Validaciones || (Validaciones = {}));
