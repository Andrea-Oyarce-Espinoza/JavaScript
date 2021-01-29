const ANCHO1 = 150, ALTO1 = 200
const ANCHO2 = 170, ALTO2 = 200
const ANCHO3 = 180, ALTO3 = 130
const ANCHO4 = 250, ALTO4 = 200
var tope     = 4

for(var i=0; i<tope; i++) {
    let estilo, img
    let n_azar = Math.floor(Math.random() * 4)

    if(n_azar == 0) {
        img    = '1.jpg'
        let x  = 100
        let y  = 100
        estilo = 'position: absolute; top: ' + y + 'px; left: ' + x + 'px; width: ' + ANCHO1 + 'px; height: ' + ALTO1 + 'px; transform: scale(-1)'
    }else if(n_azar == 1=) {
        img    = '2.png'
        let x  = 300
        let y  = 100
        estilo = 'position: absolute; top: ' + y + 'px; left: ' + x + 'px; width: ' + ANCHO2 + 'px; height: ' + ALTO2 + 'px;'
    }else if(n_azar == 2) {
        img    = '3.png'
        let x  = 500
        let y  = 100
        estilo = 'position: absolute; top: ' + y + 'px; left: ' + x + 'px; width: ' + ANCHO3 + 'px; height: ' + ALTO3 + 'px;'
    }else {
        img    = '4.jfif'
        let x  = 700
        let y  = 100
        estilo = 'position: absolute; top: ' + y + 'px; left: ' + x + 'px; width: ' + ANCHO4 + 'px; height: ' + ALTO4 + 'px;'
    }
    document.writeln('<img src="img/' + img + '" style"' + estilo + '">')
}