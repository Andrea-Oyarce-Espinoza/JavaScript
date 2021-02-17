
var numero = prompt('Ingresa un número:')
if (numero < 1) {
    document.writeln('<div style="font-size: 30px;">Debe ingresar un número igual o mayor a 1</div>')
} else if (numero == 1) {
    document.writeln('<div style="font-size:30px;">1 = 1</div>')
} else {
    var i, suma = 0, cadena = ''
}
for (i=1; i<numero; i++){
    suma += i
    cadena += i + '+'
}
suma += i
cadena += i
document.writeln('<div style="font-size: 30px;">' + cadena + ' = ' + suma + '</div>')


