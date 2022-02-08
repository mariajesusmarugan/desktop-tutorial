// Numero de enlaces de la pagina
const numeroEnlaces = document.getElementsByTagName('a');
console.log ("Hay" , numeroEnlaces.length , "enlaces en el documento");

// Direccion a la que enlaza el penultimo enlace
const listadoEnlaces = document.getElementsByTagName('a');
console.log ("La direccion a la que enlaza el penultimo enlace es:" , listadoEnlaces[listadoEnlaces.length-2].href);

// Numero de enlaces del tercer parrafo
const numeroEnlacesParrafo = document.getElementById('third-paragraph').getElementsByTagName('a');
console.log ("El numero de enlaces del tercer parrafo es: " , numeroEnlacesParrafo.length);