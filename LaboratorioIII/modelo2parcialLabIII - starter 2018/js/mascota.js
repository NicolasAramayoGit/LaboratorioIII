"use strict";
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
var Clases;
(function (Clases) {
    var Mascota = /** @class */ (function (_super) {
        __extends(Mascota, _super);
        function Mascota(id, nombre, edad, patas, tipo) {
            var _this = _super.call(this, nombre, edad, patas) || this;
            _this.id = 0;
            _this.tipo = 0;
            _this.id = id;
            _this.tipo = tipo;
            return _this;
        }
        // falta hacer el JSON
        Mascota.prototype.toJSON = function () {
            return _super.prototype.toJSON.call(this) + ("\"tipo\" : \"" + Clases.tipoMascota[this.tipo] + "\", \"id\":\"" + this.id + "\"}");
        };
        return Mascota;
    }(Clases.Animal));
    Clases.Mascota = Mascota;
})(Clases || (Clases = {}));
