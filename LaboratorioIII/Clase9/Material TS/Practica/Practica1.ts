// Tipos
let batman:string = "Bruce";
let superman:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes = [batman,superman];
let villano:[string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum fuerzas{
   fuerzaFlash = 5,
   fuerzaSuperman = 100,
   fuerzaBatman = 1,
   fuerzaAcuaman = 0,
}

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder = "100";
let largoDelPoder =<number> poder.length;
console.log( largoDelPoder );
