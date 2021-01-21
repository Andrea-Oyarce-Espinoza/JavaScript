var numero = Math.floor(Math.random() * 10)

document.writeln('Número al azar ' + numero + '<BR>')
document.writeln('Está a ' + (10 - numero) + ' números del 10')
if(numero == 2){
    document.writeln('<p style="color: red;"> Justo mi número de la suerte</p>')
}