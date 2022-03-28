var contenedorPrimero = document.getElementById("contenedor-primero");
var contenedorSegundo = document.getElementById("contenedor-segundo");

var textoEntrada = document.getElementById("mensaje-entrada");
var textoResultado = document.getElementById("msg-devuelto");

var botonEncriptar = document.getElementById("boton-encriptar");
var botonDesencriptar = document.getElementById("boton-desencriptar");
var botonCopiar = document.getElementById("boton-copiar");


//Boton con su respectivo evento y función para que a la hora de hacer click se encripte el mensaje y se muestre.
botonEncriptar.addEventListener("click", function(event){

    event.preventDefault();

    if(textoEntrada.value.trim() != ""){
        contenedorPrimero.classList.add("esconder");
        contenedorSegundo.classList.add("mostrar");
        textoResultado.value = encriptar(textoEntrada.value);
        textoEntrada.value = "";
    }
});

//Función para encriptar el mensaje.
function encriptar(textoEntrada){
    
    let mensajeModificado = textoEntrada.replace(/[e\é\ê]/gi, "enter").replace(/[i\í\î]/gi, "imes").replace(/[o\ó\ô]/gi, "ober").replace(/[u\ú\û]/gi, "ufat").replace(/[a\á\â]/gi, "ai");
    return mensajeModificado.toLowerCase();
} 

//Boton con su respectivo evento y función para que a la hora de hacer click se desencripte el mensaje y se muestre.
botonDesencriptar.addEventListener("click", function(event){

    event.preventDefault();

    if(textoEntrada.value.trim() != ""){
        contenedorPrimero.classList.add("esconder");
        contenedorSegundo.classList.add("mostrar");
        textoResultado.value = desencriptar(textoEntrada.value);
        textoEntrada.value = "";
    }
});

//Función para desencriptar el mensaje.
function desencriptar(textoEncriptado){

    let textoDesencriptado = textoEncriptado.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    return textoDesencriptado.toLowerCase();
}

//Boton con su respectivo evento y función para que a la hora de hacer click, copie el mensaje de salida.
botonCopiar.addEventListener("click", function(event){

    event.preventDefault();
    navigator.clipboard.writeText(textoResultado.value);
})