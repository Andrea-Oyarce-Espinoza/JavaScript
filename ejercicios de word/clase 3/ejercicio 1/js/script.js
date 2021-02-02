var nom = prompt('Nombre:')
console.log('Nombre del alumno:' + nom)
var nota = Math.floor(Math.random()*6)+1
if (nota >= 6){
    console.log('Nota del alumno ' + nom +' es:'+ nota)
    console.log('APRUEBA SIN RENDIR EXAMEN')
} else if (nota == 4||nota == 5){
    console.log('Nota del alumno ' + nom +' es:'+ nota)
    console.log('DEBE RENDIR EXAMEN')
}else {
    console.log('Nota del alumno ' + nom +' es: '+ nota)
    console.log('REPRUEBA')
}
