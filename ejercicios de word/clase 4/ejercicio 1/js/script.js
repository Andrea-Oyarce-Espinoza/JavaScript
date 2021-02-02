var hoy = new Date ()
var hora = (hoy.getHours() + 4) 
var minutos = hoy.getMinutes()
var segundos = hoy.getSeconds()

document.writeln("Hora: " + hora + ',')
document.writeln("Minutos: " + minutos + ',')
document.writeln("Segundos: " + segundos)