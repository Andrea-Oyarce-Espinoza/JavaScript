"use strict";

function pares() {
    var numeros = [];
    for (var i = 0; i <= 49; i++) {
        if (i % 2 == 0) {
            numeros.push(i);
        }
    }
    for (var numero of numeros) {
        console.log(numero);
    }
}

pares();