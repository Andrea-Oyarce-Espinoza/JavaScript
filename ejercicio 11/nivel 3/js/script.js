var y = 10
var ancho = 150

setInterval(() => {
    for(i=1; i<3; i++){
    var x = Math.floor(Math.random() * (window.innerWidth - ancho))
    document.writeln('<img src="../img/astro.jpg" style="width: ' + ancho + 'px; position: absolute; top:' + y + '; left: ' + x + '">')
    y += 200}
}, 850)