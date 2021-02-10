var numero = prompt('Ingrese un número entero: ');
var fibo = [0,1];
document.writeln(fibo[0] + ',')
document.writeln(fibo[1] + ',')
for(i=2; i<=numero; i++){
    fibo.push(fibo[i-1] + fibo[i-2]);
    if(i<numero){
    document.writeln(fibo[i] + ',');
    }else{
        document.writeln(fibo[i])
    }
}

