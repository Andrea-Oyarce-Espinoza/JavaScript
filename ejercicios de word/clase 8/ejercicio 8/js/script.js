var contador=0;
var estudiantes = prompt('Por favor, ingrese la cantidad de estudiantes: ');
for(var i=1; i<=estudiantes; i++){
    var edad= prompt('Ingrese la edad del/a estudiante: ' + i)
        if(edad>=25){
            contador++;
        }
    }
document.writeln('<div style="font-size: 50px; color: crimson;">Los estudiantes que tienen más de 25 años son:' + contador +'</div>')




