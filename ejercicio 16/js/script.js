                // 0        1       2
var colores = ['green', 'lime', 'black']//ARREGLO DE TAMAÑO 3

                //  0           1              2
var palabras = ['We wont', 'need a map', 'BELIEVE ME']//ARREGLO DE TAMAÑO 3

for(let i=0; i < colores.lenght; i++){ // colores.lenght ES EL TAMAÑO DEL ARREGLO
    let color_azar = colores[Math.floor(Math.random() * colores.lenght)]
    document.writeln('<div style="color: ' + color_azar + '">' + palabras[i] + '</div><br>')
}