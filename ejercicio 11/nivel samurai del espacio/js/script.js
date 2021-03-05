var y = 10
var ancho = 100

setInterval(() => {

    var x = (window.innerWidth)
    document.writeln('<img src="../img/astro.jpg" style="width: 100px; position: absolute; top:' + y + '; left: ' + x + '">')
    y += 200
    document.writeln('<img src="../img/astro.jpg" style="width: 100px; position: absolute; top:' + y + '; left: ' + (window.innerWidth - x) + '">')
    y += 200
}, 850)