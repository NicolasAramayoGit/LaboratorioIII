namespace Entidades {
    export class mascota extends animal{

        public id:number;
        public tipo:string;

        public constructor(nombre:string,edad:number,patas:number,id:number,tipo:string) {
            super(nombre,edad,patas);
            this.id = id;
            this.tipo = tipo;
        }


        public ToJSON():string
        {
            //return `{${super.ToString()}, "id":"${this.id}", "tipo":"${this.tipo}"}`;
            return `{"datosAnimal":${super.ToJSON()} , "id":${this.id} , "tipo":"${this.tipo}"}`;
        }
    }
}