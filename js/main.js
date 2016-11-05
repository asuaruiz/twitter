""
//variables
var lista = document.getElementById("lista"),
	tarea = document.getElementById("tareaInput"),
	btnInput = document.getElementById("btnInput"),
	checkBox = document.createElement("input"),
	trashCan = document.createElement("i");

	//funciones
var agregarTarea = function(){
		tarea = tareaInput.value;
		nuevaTarea = document.createElement("li");
		enlace = document.createElement("span");
		contenido = document.createTextNode(tarea);


	if (tarea === ""){
		tareaInput.setAttribute("placeholder","agrega una tarea Valida");
		tareaInput.className = "error, form-control";
		return false;
	}
	//dar atributos checkbox
	checkBox.setAttribute("type","checkbox");
	checkBox.setAttribute("onChange","checkear()")
	//agregar checkbox
	nuevaTarea.appendChild(checkBox);
	//agregamos el contenido al enlace
	enlace.appendChild(contenido);
	//establecer un atributo href
	//enlace.setAttribute("href", "#");
	//agregamos el enlace (a) a la nueva tarea (li)
	nuevaTarea.appendChild(enlace);
	//dar atributos trashCan
	trashCan.classList.add("fa","fa-minus-square");
	//agregar trashCan
	nuevaTarea.appendChild(trashCan);
	//agregamos nueva tarea a la lista
	lista.appendChild(nuevaTarea);
	//limpiamos el textarea despues de agregar tarea
	tareaInput.value = "";


//<i class="fa fa-minus-square" aria-hidden="true"></i>

	
	for (var i = 0; i< lista.children.length; i++) {
		lista.children[i].children[2].addEventListener("click", function(){
			//this.parentNode.removeChild(this);
			var li = this.parentNode;
			lista.removeChild(li);
	});
}	
};
function checkear(){
	enlace.setAttribute("class","tachado");
}

var comprobarInput = function(){
	tareaInput.className = "form-control";
	tareaInput.setAttribute("placeholder", "agrega tu tarea")
};
function eliminarTarea() {
	alert("eliminar tarea");
}

//eventos
//agregar tarea
btnInput.addEventListener("click", agregarTarea);

//comprobar input
tareaInput.addEventListener("click", comprobarInput);

//tachar
//checkBox.addEventListener("click", checkear);

//borrar elementos lista
for (var i = 0; i<= lista.children.length -1; i++) {
	lista.children[i].children[0].addEventListener("click", eliminarTarea);
}
