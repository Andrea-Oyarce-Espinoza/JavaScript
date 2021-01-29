var hoy = new Date()
var fecha = (hoy.getDate() - 1 ) + '-' + (hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
var hora = (hoy.getHours() + 4) + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
console.log(fecha)
console.log(hora)