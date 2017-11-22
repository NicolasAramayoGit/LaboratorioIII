
comandos:
---------------

tsc -v // version de typescript
npm install -g //instalar global para toda la maquina
tsc app //transpilar el app.ts
tsc -init //agrega un tsconfing.json
tsc -w //automaticamente lo pasa a javascript
tsc -outFile public/app.js validaciones/textos.ts validaciones/numeros.ts app.ts




resumen
----------------

'use strit': es para que no nos olvidemos ningun punto y coma.
tsc -w: tambien sirve para arrancar la consola.
Recomendacion: NO TOCAR EL ARCHIVO JS que fue transpilado.

///<reference path="validaciones/textos.ts"/>
agrega las dependecias al archivo.
