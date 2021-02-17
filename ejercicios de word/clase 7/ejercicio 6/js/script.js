var letra = prompt('Ingresa una letra:')
var up= letra.toUpperCase();
if(letra === up){
    for(var i=0; i<16;i++){
        for(var j=1;j<=i;j++){
             document.writeln('&nbsp')  
        }
        document.writeln(letra)
    }
}else {
    document.writeln("Escriba sólo en mayúsculas")
}