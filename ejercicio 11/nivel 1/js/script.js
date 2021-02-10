var y = 10

setInterval(() => {
    document.writeln('<img src="../img/astro.jpg" style="height:150px; position: absolute; top: ' + y + 'px">')
    y += 150
}, 850)