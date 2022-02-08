// Array de los numeros
const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

// Array con los numeros pares
const numerosPares = number.filter(function(numero) {
    return numero%2 == 0
});

// Array con los numeros impares
const numerosImpares = number.filter(function(numero) {
    return numero%2 != 0
});

// Mostramos resultados en consola
console.log("Numeros pares: " , numerosPares);
console.log("Numeros impares: " , numerosImpares);