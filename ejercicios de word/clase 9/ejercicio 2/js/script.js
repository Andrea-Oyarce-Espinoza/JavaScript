function coloresalazar(){
    var colores = ['red', 'blue', 'green', 'yellow', 'aqua', 'brown'];
    for (var i=0; i<6; i++){
        var indicecolor=Math.trunc(Math.random()*colores.length);
        var colorelegido=colores[indicecolor];
        document.write('<span style="background-color: ' +colorelegido+'">HOLA</span>');
    }
    document.write("<br>")
}
coloresalazar();