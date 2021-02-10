var ancho_luz = 50, alto_luz = 50
var x, y, estilo
for(var i=0; i<10; i++){
    x = Math.floor(Math.random()*(window.innerWidth-ancho_luz))
    y = Math.floor(Math.random()*(window.innerHeight-alto_luz))
    estilo='position:absolute;top:'+y+'px; left:'+x+'px; width: '+ancho_luz+'px'

    document.writeln('<img src="img/luz1.png" style="'+estilo+'; width: 100px;">')
}