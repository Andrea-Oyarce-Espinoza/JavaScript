var numero = prompt('Ingresa un número:')
numero = numero/2

for (var i=1; i<=numero; i++){
    if(numero%2 == 0) {
        document.writeln('<div>' + (i) + 'Es un número par</div>')
    }else{
        document.writeln('<div>' + (i) + 'Es un número impar</div>')
    }
 
}
