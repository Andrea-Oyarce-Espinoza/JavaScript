var numero = prompt('Ingresa un número:')

for (var i=1; i<=numero; i++){
    if(n%2 == 0) {
        document.writeln('<div>' + (i) + 'Es un número par</div>')
    }else{
        document.writeln('<div>' + (i) + 'Es un número impar</div>')
    }
 
}
