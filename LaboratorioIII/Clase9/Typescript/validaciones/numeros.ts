namespace Validaciones{
    
        // export para que se vea desde afuera.
        export const PI = 3.1415;
    
        export function validarNumero(numero:number):boolean{
    
    
    
            if (numero >= 0) {
                return true;
            }
            return false;
        }
    
    }