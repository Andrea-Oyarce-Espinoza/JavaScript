var numero, i;
i=0;
numero=parseInt(prompt('Ingresa un número:'));

for (i=0; i<=numero; i++){
    if(i%2==0){
    document.write('<br>' + i);
    }
}
