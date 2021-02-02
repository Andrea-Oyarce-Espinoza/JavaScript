
var numero = Math.floor(Math.random()*-90)
if (numero>=-45){
	document.writeln ('<img src="img/guitarra.png" class="guitarra" style="transform: rotate('+ numero + 'deg);">')
}else{ 
document.writeln ('<img src="img/guitarra.png" class="guitarra" style="transform: rotate('+ numero + 'deg); filter: invert(1);">')
}
