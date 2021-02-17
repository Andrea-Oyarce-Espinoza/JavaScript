var ancho_neo = 180, alto_neo = 150
var x, y, estilo

for(var i=0; i<20; i++){
    x = Math.floor(Math.random() * (window.innerWidth - ancho_neo))
    y = Math.floor(Math.random() * (window.innerHeight - alto_neo))
    estilo = 'position:absolute; top: ' + y + 'px; left: ' + x + 'px; width: ' + ancho_neo + 'px'

    document.writeln('<img src="img/neo.png" style="' + estilo + '">')
}