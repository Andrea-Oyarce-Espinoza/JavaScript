var numero = Math.floor(Math.random() * 5) //GENERA UN NÚMERO ALEATORIO (0 AL 4)
var color = ''

if(numero == 0) {
    color = 'red'
} else if(numero == 1) {
    color = 'lime'
} else if(numero == 2) {
    color = 'aqua'
} else if(numero == 3) {
    color = 'fuchsia'
} else {
    color = 'royalblue'
}
document.writeln('<div style="font-size: 20px;">Or play the game <i>existence</i> to the end...</div>')
document.writeln('<div style="color: ' + color + '">...OF THE BEGINING <span style="font: 20px monospace; color: white">' + numero + '</span></div>')


