namespace Entidades
{
    export abstract class animal
    {

        protected nombre:string;
        protected edad:number;
        protected patas:number;

        public constructor(nombre:string, edad:number, patas:number)
        {
            this.nombre = nombre;
            this.edad = edad;
            this.patas = patas;
        }

        protected ToJSON():string
        {
            return JSON.stringify(this); //return `"nombre":"${this.nombre}", "edad":"${this.edad}", "patas":"${this.patas}"`;
        }
    }
}