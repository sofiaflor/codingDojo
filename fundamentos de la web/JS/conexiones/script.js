console.log("page loaded...");
var cont_btn2 = document.querySelector("#btn2")
var username = document.querySelector("#username");

function eliminar(element) {
    
    console.log("prueba")
    cont_btn2.innerText--;
    element.remove();

}


function edit() {
    username.innerText = "Malia J";
}
