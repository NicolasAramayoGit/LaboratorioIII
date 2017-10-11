//problema de mostrar el contador de visitas sea publico.


var inc = (function () {
    var contador = 0;
    return function(){
        return contador;
    }
})();

inc();
inc();

//alert(inc());

function Sumar(a,b,callback) {
    var resultado = parseInt(a) + parseInt(b);
    if(typeof(callback) == "function")
    {
        callback(resultado);
    }
}

// cuando se ejecuta la ventana
/*
window.onload = function() {
    var btnSumar = document.getElementById("btnSumar");
    btnSumar.addEventListener('click',function(){
        var textA = document.getElementById("txtA").value;
        var textB = document.getElementById("txtB").value;    

        Sumar(textA,textB,function(res) {
            alert("la suma es: " + res);

        })
        
    })
}

*/

// FUNCIONES CONSTRUCTOR.

var Auto = function(nafta){
    var _nafta = nafta;   

    this.setNafta = function(value){
        _nafta = value;
    }

    this.getNafta = function(){
        return _nafta;
    }

}


var a1 = new Auto(100);
//alert(a1._nafta) undefine.
alert(a1.getNafta());

auto2 = {
    nafta:100,
    puertas:5,
    patente: "AAA111"
}

post = {
    autor:"mariano",
    texto_blog: "Mi Blog",
}

post = {
    autor:"mariano",
    texto_blog: "Mi Blog",
    fecha_creacion: "9/12/2017"
}

auto2.nuevapropiedad = 10;

auto3 = {
    nafta: 200,
}