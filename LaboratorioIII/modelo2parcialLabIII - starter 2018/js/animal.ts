namespace Clases{

export abstract class Animal{

    public nombre:string="";
    public edad:number=0;
    public patas:number=0;


    public constructor(nombre:string,edad:number,patas:number)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.patas = patas;
    }

    public toJSON():string{
        let json: string = `{"nombre":"${this.nombre}", "edad":${this.edad},"patas":${this.patas}, `;
        return json;
    }

}

}