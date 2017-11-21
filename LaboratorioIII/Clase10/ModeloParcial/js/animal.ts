namespace Entidades {
    export abstract class animal {
//abstracta
        public nombre:string;
        public edad:number;
        public patas:number;

        public constructor(nombre:string, edad:number, patas:number) {
            this.nombre = nombre;
            this.edad = edad;
            this.patas = patas;
        }

        public ToJSON():string
        {
            //return `"nombre":"${this.nombre}", "edad":"${this.edad}", "patas":"${this.patas}"`;
            return JSON.stringify(this);
        }
    }
}