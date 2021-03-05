function matrizAscedente() {
    var matriz = [];
    for(var i = 0; i < 10; i++){
        var fila = [];
        for (var j = 0; j < i+3; j++) {
            fila.push(i);
        }
        matriz.push(fila);
    }
    console.log(matriz);
}