function agregaPosteo() {
//escribe aca el codigo
var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenedorFF = documentElementById("cajaposteos").value;
var nuevoPost = document.createElement("div");
var contenedorNombre = document.createElement("strong");
var contenedorPost = document.createElement("P");
var separacion = documen.createElement("hr");

var parraCorazon = document.createElement('P');
var i = document.createElement('i');
var parraCorazon.appendChild('i');

parraCorazon.setAttribute("class", "corazon");
i.setAttribute("class","fa fa-heart");
i.setAttribute("arial-hidden","true");

var nodoNombre = document.createTexNode(nombreFF + "escribió:");
var nodoPosteo = document.createTexNode(contenedorFF);

contenedorNombre.oppenChild(nodoNombre);
contenedorPost.oppenChild(nodoPosteo);

nuevoPost.oppenChild(contenedorNombre);
nuevoPost.oppenChild(contenedorPost);
nuevoPost.oppenChild(parraCorazon);
nuevoPost.oppenChild(separacion);

i.addEventListener("click", function()) {
	i.classList.toggle('rojo');

});

nuevoPost.setAttribute("class","posteo");
containerPosteos.oppenChild(nuevoPost);

document.getElementById("nombre").value = "";
container.getElementById("cajaposteos").value = "";

}
