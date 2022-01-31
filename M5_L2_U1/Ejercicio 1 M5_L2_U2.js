//Volumen = area de la base * altura
//base 16 * 23 cm
//altura 13cm
var altura = 13;
var base = 16*23;
console.log ('Base =' , base, 'cm');
var Volumen=altura*base;
console.log('Volumen =' , Volumen, 'cm3');

//Area = area lateral + 2ab
//area lateral = 23 * 13
//area base = 16*23, es decir, area base = var base
//Area Total = area lateral + 2 * (var base)

var areaLateral = 23*13;
console.log ('Area Lateral = ', areaLateral, 'cm');
var areaTotal = areaLateral + 2 * base;
console.log ('Area Total = ', areaTotal, 'cm2');
