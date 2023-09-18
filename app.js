// Es un comentario...
// ECMAScript 6
 
// Supongamos que tengo un formulario
// El formulario permite pasar de una moneda
// a otra...
// rupias -> dolar
// 1 -> 0,0012
// 100 -> 100 * 0.0012

// En el futuro vamos a obtener el 100 desde un form en HTML
var rupias = 100
var euro = 250

// guines bajos esta permitido
var dolar_conversion_rupia = 0.0012

// En el futuro vamos a escribir el resultado en HTML
var resultado = rupias * dolar_conversion_rupia


alert("$" + rupias + " serían $" + resultado + " usd.");