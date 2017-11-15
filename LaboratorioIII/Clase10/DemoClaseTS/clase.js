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
// por defecto es público
var Avenger = /** @class */ (function () {
    // comento el "strict": true, para manejar variables opcionales, como nombre?:string
    function Avenger(nombreReal, peleasGanas, nombre) {
        this._nombre = nombre;
        this.nombreReal = nombreReal;
        this.peleasGanas = peleasGanas;
    }
    Avenger.prototype.mostrar = function () {
        return this._nombre + ", " + this.nombreReal + "," + this.peleasGanas;
    };
    Object.defineProperty(Avenger.prototype, "nombre", {
        // PROPIEDAD
        get: function () {
            return this._nombre;
        },
        // PROPIEDAD
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(nr, pg, n, p) {
        var _this = _super.call(this, nr, pg, n) || this;
        _this._poder = p; //agrego el poder.
        return _this;
    }
    Xmen.prototype.mostrar = function () {
        return _super.prototype.mostrar.call(this) + this._poder;
    };
    return Xmen;
}(Avenger));
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Object.defineProperty(Apocalipsis, "Instance", {
        //getter devolvemos la instancia
        get: function () {
            if (!(this._instance)) {
                this._instance = new Apocalipsis("Hell");
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return Apocalipsis;
}());
// CREO UN OBJ DE TIPO AVENGER.
var a1 = new Avenger("Tony", 10, "Ironman");
var a2 = new Avenger("Bruce", 2);
console.log(a1.mostrar());
console.log(a1.nombre); // getter propiedad
console.log(a1);
///////////////////
var x1 = new Xmen("logan", 2, "Wolverine", "garras mortales. regeneracion");
//console.log(x1.mostrar());
var arr = new Array();
arr.push(a1);
arr.push(x1);
console.log(arr);
console.log(Apocalipsis.Instance);
