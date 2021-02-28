function mostrarPares() {
    var pares = []
    var tope = 20
    var numero = Math.floor(Math.random() * (tope + 1))

    for (var i = 0; i <= numero; i++) {
        if (i % 2 == 0) {
            pares.push(i)
        }

    }

    console.log('largo: ' + numero);

for (par of pares) {
    console.log(par)
    }
}

mostrarPares()