
//variables
var lista = document.getElementById("lista"),
	tarea = document.getElementById("tareaInput"),
	btnInput = document.getElementById("btnInput");

	//funciones
var comprobarInput = function(){
	
};
var agregarTarea = function(){
	var tarea = tareaInput.value,
		nuevaTarea = document.createElement("li"),
		enlace = document.createElement("a"),
		contenido = document.createTextNode(tarea);


	if (tarea === ""){
		tareaInput.setAttribute("placeholder","agrega una tarea Valida");
		tareaInput.className = "error";
		return false;

	}
};
function eliminarTarea() {
	alert("eliminar tarea");
}

//eventos
//agregar tarea
btnInput.addEventListener("click", agregarTarea);

//comprobar input
tareaInput.addEventListener("click", comprobarInput);

//borrar elementos lista
for (var i = 0; i<= lista.children.length -1; i++) {
	lista.children[i].children[0].addEventListener("click", eliminarTarea);
}
