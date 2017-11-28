/// <reference path="./EMascota.ts"/>
/// <reference path="./animal.ts"/>


namespace Entidades
{
    export class mascota extends animal
    {

        private id:number;
        private tipo:EMascota;

        public constructor(nombre:string,edad:number,patas:number,id:number,tipo:EMascota)
        {
            super(nombre,edad,patas);
            this.id = id;
            this.tipo = tipo;
        }


        public ToJSON():string
        {
            return super.ToJSON();
        }
    }
}