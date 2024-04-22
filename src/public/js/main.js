


const respuesta = document.getElementById("respuesta");


respuesta.addEventListener("change", () => {
    if(respuesta.value == "Si"){
        document.getElementById("superficie_cubierta").disabled = false;
        document.getElementById("energia_renovable").disabled = false;

    }

});