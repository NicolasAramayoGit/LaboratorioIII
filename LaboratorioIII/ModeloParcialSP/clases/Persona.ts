
namespace Entidades
{
    export class Persona
    {
        protected _nombre:string;
        protected _edad:number;
        protected _patas:number;
        
        constructor(nombre:string, edad:number, patas:number)
        {
            this._nombre = nombre;
            this._edad = edad;
            this._patas = patas;
        }

        toJson():string
        {
            //return JSON.stringify(this);
            return `{"nombre" : "${this._nombre}", "edad" : "${this._edad}", "patas": "${this._patas}", `;
        }
    }

}
