 var segundo_actual = new Date().getSeconds()

document.writeln('<img src="img/devo'+(1+(segundo_actual %2)) +'.jpg "class="img">')
