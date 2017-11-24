var Entidades;
(function (Entidades) {
    var animal = /** @class */ (function () {
        function animal(nombre, edad, patas) {
            this.nombre = nombre;
            this.edad = edad;
            this.patas = patas;
        }
        animal.prototype.ToJSON = function () {
            return JSON.stringify(this); //return `"nombre":"${this.nombre}", "edad":"${this.edad}", "patas":"${this.patas}"`;
        };
        return animal;
    }());
    Entidades.animal = animal;
})(Entidades || (Entidades = {}));
