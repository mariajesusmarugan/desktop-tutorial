// El objetivo: debe aparecer en el navegador mi fecha de cumpleaños.
// Mi cumpleaños es el 10 de Febrero.
// Para ello guardaremos en un objeto la información sobre el día y el mes.

const diaCumpleaños = "10";
const mesCumpleaños = "Febrero";
const objCumpleaños = `Mi cumpleaños es el ${diaCumpleaños} ${mesCumpleaños}.`;
console.log(objCumpleaños);

// Vamos a crear un Array con todos los meses del año.

var mesesAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
                "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
var objMesesAño= `Los meses del año son: ${mesesAño}.`;
console.log(objMesesAño);

// Vamos a pintar en consola elmes siguiente del de nuestro cumpleaños
// Este mes deberia ser Marzo.

var mesSiguiente = mesesAño [2];
console.log(mesesAño [2]);
var objmesSiguiente =`El mes siguiente al mes de mi cumpleaños es ${mesesAño[2]}.`;
console.log(objmesSiguiente);