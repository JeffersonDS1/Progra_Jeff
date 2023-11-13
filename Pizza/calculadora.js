

function calculadoradepizza() {
    let personas = 0
    let porciones = 0
    let cajas = 0
    let resultado = 0

    personas = document.getElementById("personas").value 
    porciones = document.getElementById("porciones").value 
    cajas = document.getElementById("cajas").value 

    console.log(personas, porciones, cajas)

    resultado = (personas * porciones) / cajas
    document.getElementById("resultado").value = Math.round(resultado)

}