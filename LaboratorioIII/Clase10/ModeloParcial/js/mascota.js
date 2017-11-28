/// <reference path="./EMascota.ts"/>
/// <reference path="./animal.ts"/>
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
    var mascota = /** @class */ (function (_super) {
        __extends(mascota, _super);
        function mascota(nombre, edad, patas, id, tipo) {
            var _this = _super.call(this, nombre, edad, patas) || this;
            _this.id = id;
            _this.tipo = tipo;
            return _this;
        }
        mascota.prototype.ToJSON = function () {
            return _super.prototype.ToJSON.call(this);
        };
        return mascota;
    }(Entidades.animal));
    Entidades.mascota = mascota;
})(Entidades || (Entidades = {}));
