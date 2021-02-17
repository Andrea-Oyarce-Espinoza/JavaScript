var fotos = ['img/ship.png', 'img/invader.png', 'img/invader.png']
var estilo = ''
var ancho = 80

for(let i=0; i < fotos.length; i++){
    if(i == 0){
        let x = Math.floor(Math.random() * (window.innerWidth))
        estilo = 'position: absolute; top: ' + (window.innerHeight) 
    } else {
        let x = Math.floor(Math.random() * (window.innerWidth))
        let y = Math.floor(Math.random() * (window.innerHeight))
        estilo = 'position:absolute; top: ' + y + 'px; left: ' + x + 'px'
    }
    document.writeln('<img src="' + fotos[i] + '" style="' + estilo + '"; width: "' + ancho + '">')
}