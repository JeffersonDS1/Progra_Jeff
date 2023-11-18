// CICLOS 

let manzanas = [1,2,3,4]
console.log(manzanas)


for (let index = 0; index < manzanas.length; index++) {
    console.log(index)   
    console.log('Manzana #: ', manzanas[index])
}

// Variante de for -> foreach
manzanas.forEach(manzana => {
    console.log('Manzana #: ', manzana)
})

// Ejemplo
let mensaje = 'Te amo'
let cantidad = 10
for (let i = 0; i < cantidad; i++) {
 // console.log(mensaje)
 // document.getElementById("mensaje").innerHTML += "<h3>"+mensaje+"</h3>"
 document.getElementById("mensaje").innerHTML +=  `<h3>Mi mensaje para ti es ${mensaje}</h3>`
  
}