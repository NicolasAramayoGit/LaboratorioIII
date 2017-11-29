
///<reference path="Persona.ts"/>
///<reference path="enumerado.ts"/>

namespace practicaMascotas
{
    export class Empleado extends Persona
    {
       //private _id:number;
       public _tipo:animales;
       public _foto:string | undefined;

       constructor(nombre:string, edad:number, patas:number, tipo:animales, foto?:string)
       {
          super(nombre,edad,patas);
          this._tipo = tipo;
          this._foto = foto;
       }

       toJson():string
       {
           return super.toJson() + `"tipo" : "${animales[this._tipo]}", "foto":"${this._foto}"}`;
       }
    }
}

