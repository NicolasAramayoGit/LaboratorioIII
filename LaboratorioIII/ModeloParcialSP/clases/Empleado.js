///<reference path="Persona.ts"/>
///<reference path="enumerado.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Entidades;
(function (Entidades) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(nombre, edad, patas, tipo, foto) {
            var _this = _super.call(this, nombre, edad, patas) || this;
            _this._tipo = tipo;
            _this._foto = foto;
            return _this;
        }
        Empleado.prototype.toJson = function () {
            return _super.prototype.toJson.call(this) + ("\"tipo\" : \"" + Entidades.puestos[this._tipo] + "\", \"foto\":\"" + this._foto + "\"}");
        };
        return Empleado;
    }(Entidades.Persona));
    Entidades.Empleado = Empleado;
})(Entidades || (Entidades = {}));
