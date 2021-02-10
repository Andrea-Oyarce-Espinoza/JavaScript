var promedio=0;
var total=0;
var trabajadores = prompt('Ingrese el número de trabajadores: ');
for(i=1; i<=trabajadores; i++){
    var sueldos= prompt('Por favor, ingrese el sueldo de cada trabajador/a:' + i)
    sueldos = parseInt(sueldos)
    total = total + sueldos
    trabajadores = parseInt(trabajadores)
    }
    promedio = total/trabajadores
    document.writeln('<div style=font-size:50px;>El promedio de los sueldos es:' + promedio + '</div>')

