"use strict";
function enviarMision(xmen) {
    console.log(xmen.nombre);
}
/*let xmen:IXmen;
xmen.nombre = "Ciclope";
xmen.peleasGanadas = 4;
xmen.otroAtributo = "otroAtributo";

enviarMision(xmen);*/
var Xmen2 = /** @class */ (function () {
    function Xmen2() {
    }
    Xmen2.prototype.miMetodo = function () {
        return "hola";
    };
    return Xmen2;
}());
var xmen2 = new Xmen2();
console.log(xmen2.miMetodo());
