namespace Validaciones{
    
        export function validarCadena(texto:string):boolean{
            if (texto.length > 3) {
                return true;
            }
            return false;
        }
            
    }