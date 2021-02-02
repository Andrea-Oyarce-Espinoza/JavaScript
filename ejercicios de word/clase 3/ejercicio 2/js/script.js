var hoy = new Date()
var segundo = hoy.getSeconds()
console.log(segundo)
if (segundo <= 10){
    console.log("El minuto actual está recién naciendo")
} else if ((segundo <= 40)&&(segundo >= 10)){
    console.log("El minuto está en pleno desarrollo")
} else{
    console.log("El minuto actual está en su fase final")
}