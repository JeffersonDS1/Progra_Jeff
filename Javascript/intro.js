


function calcularPesoIdeal() {
    let peso = 0
    let estatura = 0
    let IMC = 0
    let pesoIdeal = ""


    peso = document.getElementById("peso").value
    estatura = document.getElementById("estatura").value

    console.log(peso, estatura)

    resultado = peso / (estatura * estatura)

    pesoIdeal = buscarRangosPesosIdeales (IMC)

    console.log(IMC, pesoIdeal)
}

function buscarRangosPesosIdeales(IMC) {
    let rango =""


    if (IMC < 18.5) {
        rango = "Bajo"
    }
     else  if (IMC > 18.5 && IMC < 24.9) {
        rango = "Normal"
    }
    
    else if (IMC < 24.9 && IMC > 30) {
        rango = "Sobrepeso"
    }

    return rango

}
