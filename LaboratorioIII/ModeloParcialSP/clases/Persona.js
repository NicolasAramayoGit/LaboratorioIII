var Entidades;
(function (Entidades) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, edad, patas) {
            this._nombre = nombre;
            this._edad = edad;
            this._patas = patas;
        }
        Persona.prototype.toJson = function () {
            //return JSON.stringify(this);
            return "{\"nombre\" : \"" + this._nombre + "\", \"edad\" : \"" + this._edad + "\", \"patas\": \"" + this._patas + "\", ";
        };
        return Persona;
    }());
    Entidades.Persona = Persona;
})(Entidades || (Entidades = {}));
