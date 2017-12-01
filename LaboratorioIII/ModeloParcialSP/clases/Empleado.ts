
///<reference path="Persona.ts"/>
///<reference path="enumerado.ts"/>

namespace Entidades
{
    export class Empleado extends Persona
    {
       //private _id:number;
       public _tipo:puestos;
       public _foto:string | undefined;

       constructor(nombre:string, edad:number, patas:number, tipo:puestos, foto?:string)
       {
          super(nombre,edad,patas);
          this._tipo = tipo;
          this._foto = foto;
       }

       toJson():string
       {
           return super.toJson() + `"tipo" : "${puestos[this._tipo]}", "foto":"${this._foto}"}`;
       }
    }
}

