var xhr;
var datos = new Array();

function cargarDatos(){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
           var resp = JSON.parse(this.response); 
           console.log(resp.message);
           datos = resp.data;
           cargarPosts();
        }else{
            $("main").html("<img src='img/spinner.gif' alt='spinner'>");
        }
    };
    var url = "http://localhost:3000/traer?collection=posts";
    xhr.open("GET",url,true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    
}

window.onload = function(){
    cargarDatos();
    
}


function cargarPosts(){
    var posts = document.getElementsByTagName("main");
    posts[0].innerHTML = "";
    var post = "";

    for(var i = 0;i<datos.length;i++){
        post += "<article class='col-lg-6 col-md-12'>";
        post += "<h2> " + datos[i].titulo + "</h2>";
        post += "<img src='img/imagen_2.jpg' alt='Imagen puente de la torre'>";
        post += "<p> "+ datos[i].articulo + " </p>";
        post += "<a href='#' class='boton'>Leer más</a>";
        post += "</article>";
    }

    posts[0].innerHTML = post;
    
}

$("#btnAJAXPOST").click(function(){
        data = {
            "titulo": "Nuevo post",
            "articulo": "Nuevo articulo",
            "mas": "Nuevo mas",
            "collection": "posts"
        }
        $.ajax({
            url: "http://localhost:3000/agregar", 
            method:'POST',
            data:data,
            success: function(result){
                var a = result;
                console.log(a.message);
            },
            error: function(jqXHR,textStatus,errorThrown ){
                console.log(errorThrown);
            },
            complete:function(jqXHR, textStatus){
                console.log(textStatus);
            }
        });
    });