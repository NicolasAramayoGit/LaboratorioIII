"use strict";
var Clases;
(function (Clases) {
    var Animal = /** @class */ (function () {
        function Animal(nombre, edad, patas) {
            this.nombre = "";
            this.edad = 0;
            this.patas = 0;
            this.nombre = nombre;
            this.edad = edad;
            this.patas = patas;
        }
        Animal.prototype.toJSON = function () {
            var json = "{\"nombre\":\"" + this.nombre + "\", \"edad\":" + this.edad + ",\"patas\":" + this.patas + ", ";
            return json;
        };
        return Animal;
    }());
    Clases.Animal = Animal;
})(Clases || (Clases = {}));
