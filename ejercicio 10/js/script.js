var max_ancho = window.innerWidth  - 270
var max_alto  = window.innerHeight - 500

var x_samus   = Math.floor(Math.random() * max_ancho)
var y_samus   = Math.floor(Math.random() * max_alto)
var x_metroid = max_ancho - x_samus
var y_metroid = max_alto  - y_samus

var clase_samus, clase_metroid

if(x_samus > max_ancho / 2) {//SAMUS AL LADO DERECHO / METROID AL LADO IZQUIERDO
    clase_samus   = 'samus_der'
    clase_metroid = 'metroid_izq'
} else {//SAMUS AL LADO IZQUIERDO / METROID AL LADO DERECHO
    clase_samus   = 'samus_izq'
    clase_metroid = 'metroid_der'
}

document.writeln('<img src="img/samus.png"  class="samus ' +clase_samus+'"style="position:absolute; top: ' + y_samus + 'px; left: ' + x_samus + 'px">')
document.writeln('<img src="img/metroid.png" class="metroid ' +clase_metroid+'" style="position:absolute; top: ' + y_metroid +'px; left: ' + x_metroid + 'px">')