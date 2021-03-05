var hoy = new Date()
var fecha = (hoy.getDate()) + '-' + (hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
var hora = (hoy.getHours()) + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
console.log(fecha)
console.log(hora)