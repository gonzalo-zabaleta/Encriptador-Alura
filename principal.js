const contenedorPrimero = document.getElementById("contenedor-primero");
const contenedorSegundo = document.getElementById("contenedor-segundo");

const textoEntrada = document.getElementById("mensaje-entrada");
const textoResultado = document.getElementById("msg-devuelto");

const botonEncriptar = document.getElementById("boton-encriptar");
const botonDesencriptar = document.getElementById("boton-desencriptar");
const botonCopiar = document.getElementById("boton-copiar");

contenedorSegundo.classList.add("esconder");


//Boton con su respectivo evento y función para que a la hora de hacer click se encripte el mensaje y se muestre.
botonEncriptar.addEventListener("click", function(event){

    event.preventDefault();

    if(textoEntrada.value.trim() != ""){

        contenedorPrimero.classList.add("esconder");
        contenedorSegundo.classList.remove("esconder");
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
        contenedorSegundo.classList.remove("esconder");
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