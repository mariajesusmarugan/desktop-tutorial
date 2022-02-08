//var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numDNI= 5680366;
var numDiv=23;
var letraDNI='X';
var resto= numDNI%numDiv;
console.log(resto);//10

//Primero se debe comprobar si el DNI es < que 0 y > que 99999999
if (numDNI<0 && numDNI> 99999999){
    console.log (numDNI);
}
