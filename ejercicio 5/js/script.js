const RANGO_MAX = 15

var rango = Math.floor(Math.random()*RANGO_MAX)
var x = 160 + rango
rango*= ((Math.random() < 0.5)? -1: 1)
var y= 520 + rango




var numero = Math.floor(Math.random() * 5)
var color = ''

if(numero == 0) {
    color = 'blue'
} else if(numero == 1) {
    color = 'red'
}else if(numero == 2) {
    color = 'lime'
}else if(numero == 3) {
    color = 'fuchsia'
}else {
    color = 'cyan'
}
document.writeln('<div class = "mensaje" style="top: ' + y + 'px; left: ' + x + 'px; color:' + color + '">LIFE IS ONLY A DREAM</div>')
document.writeln('<div class="atras">Today a young man on acid realized that all matter is merely energy condensed to a slow vibration, that we are all one consciousness experiencing itself subjectively.</div>')
document.writeln('<div class="atras1">There is NO such thing as death, <BR> <BR> And we are the imagination od ourselves... <BR> <BR>Here is Tom with the weather...</div>')
