//GENERA UN NÚMERO ALEATORIO (0 AL 4)
var numero = Math.floor(Math.random() * 5)
var color = ''

if(numero == 0) {
    color = 'red'
} else if(numero == 1) {
    color = 'lime'
}else if(numero == 2) {
    color = 'aqua'
}else if(numero == 3) {
    color = 'fuchsia'
}else {
    color = 'orange'
}
document.writeln('<div class="linea1">SUBURBAN ROBOTS</div>')
document.writeln('<div style="color: ' + color + '">THAT MONITOR REALITY <span style="font: 40px monospace; color: white">(' + numero + ')</span></div>')