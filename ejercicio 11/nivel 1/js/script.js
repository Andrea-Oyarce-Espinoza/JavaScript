var y = 10

setInterval(() => {
    document.writeln('<img src="../img/astro.jpg" style="position: absolute; top: ' + y + '">')
    y += 150
}, 850)