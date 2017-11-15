// por defecto es público
class Avenger {
    private _nombre:string|undefined; //undefined se usa para poner una variable indefinida nombre?:string
    nombreReal:string; // por defecto los atributos son públicos.
    peleasGanas:number;

    // comento el "strict": true, para manejar variables opcionales, como nombre?:string
    constructor(nombreReal:string,peleasGanas:number,nombre?:string)
    {
        this._nombre = nombre;
        this.nombreReal = nombreReal;
        this.peleasGanas = peleasGanas;
    }

    mostrar():string
    {
        return `${this._nombre}, ${this.nombreReal},${this.peleasGanas}`;
    }

    // PROPIEDAD
    get nombre():string|undefined{
        return this._nombre;
    }

    // PROPIEDAD
    set nombre(nombre:string|undefined){
        this._nombre = nombre;
    }
}

class Xmen extends Avenger{
    private _poder:string;
    
    constructor(nr:string,pg:number,n:string,p:string){
        super(nr,pg,n);
        this._poder = p; //agrego el poder.
    }

    mostrar():string{
        return super.mostrar() + this._poder;
    }

}

class Apocalipsis {

    private static _instance:Apocalipsis;

    private constructor(public nombre:string){
        
    }
    //getter devolvemos la instancia
    static get Instance():Apocalipsis{
        if(!(this._instance)){
            this._instance = new Apocalipsis("Hell");
        }
        return this._instance;
    }

}



// CREO UN OBJ DE TIPO AVENGER.
let a1:Avenger = new Avenger("Tony",10,"Ironman");
let a2:Avenger = new Avenger("Bruce", 2);


console.log(a1.mostrar());
console.log(a1.nombre); // getter propiedad
console.log(a1);

///////////////////
let x1:Xmen = new Xmen("logan",2,"Wolverine","garras mortales. regeneracion");
//console.log(x1.mostrar());

let arr = new Array<Avenger>();
arr.push(a1);
arr.push(x1);

console.log(arr);
console.log(Apocalipsis.Instance);