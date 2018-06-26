namespace Clases{

    export class Mascota extends Animal {

        public id:number=0;
        public tipo:tipoMascota=0;

        public constructor(id:number,nombre:string,edad:number,patas:number,tipo:Clases.tipoMascota)
        {
            super(nombre,edad,patas);
            this.id = id;
            this.tipo = tipo;
        }

        // falta hacer el JSON
        public toJSON():string
        {
            return super.toJSON() + `"tipo" : "${Clases.tipoMascota[this.tipo]}", "id":"${this.id}"}`;
        }
    }
}

