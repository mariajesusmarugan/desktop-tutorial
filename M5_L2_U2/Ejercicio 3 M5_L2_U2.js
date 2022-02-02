//Vamos a realizar acciones y mostrar resultados por consola a partir del siguiente array

const data =["hola", "2", "5", "adios"];

//Vamos a determinar cuál de los elementos que hay en el array son números

const dataPosicion0 = data [0];
const dataPosicion1 = data [1];
const dataPosicion2 = data [2];
const dataPosicion3 = data [3];

console.log(dataPosicion1);
console.log(dataPosicion2);

const objNumerosArray= `Los números del array son: ${dataPosicion1} y ${dataPosicion2}.`;
console.log(objNumerosArray);

//Ahora veremos cual de los dos numeros es el mayor

const compararMayor = data [1] > data [2];
console.log(compararMayor);
const objComparación= `El número 2 no es mayor que el 5: ${data[1]} es menor que ${data[2]}.`;
console.log(objComparación);

// Por tanto, de esto deducimos que 5 el el numero mayor
// Comprobamos el resto de operaciones numéricas

const compararMenor = data [1] < data [2];
console.log(compararMenor);

const compararMayorQue = data [1] >= data [2];
console.log(compararMayorQue);

const compararMenorQue = data [1] <= data [2];
console.log(compararMenorQue);

const compararIgual = data [1] == data [2];
console.log(compararIgual);

const compararDistinto = data [1] != data [2];
console.log(compararDistinto);