//Prueba bucle condición simple FOR

for (let i= 0; i<10; i++){
    console.log("dentro del bucle");
    console.log(i);

}

//Prueba bucle for para pintarala en consola, mejor codigo que console.log(i); anterior

for (let i= 0; i<3; i++){
    console.log(`Esta es la iteración ${i}`);

}


//Podemos trabajar con arrays, devolviendonos las posiciones de éste

var mesesAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
                "Septiembre", "Octubre", "Noviembre", "Diciembre" ];

    for (let i= 0; i<12; i++){
        console.log(mesesAño[i]);
                
     }

//Podemos recorrer un array y obtener cada elemento FOR...OF

var diasSemana = ["lunes", "martes","miercoles", "jueves","viernes", "sabado", "domingo"];
    for (let i= 0; i<7; i++){
    console.log(diasSemana[i]);
            
 }  
    for (var elementos of diasSemana){
    console.log(diasSemana);
            
 }

//Podemos recorrer un array y obtener cada posicion FOR...IN

var diasSemana = ["lunes", "martes","miercoles", "jueves","viernes", "sabado", "domingo"];
    for (var posicion in diasSemana){
    console.log(posicion);
            
 }

 // Podemos evaluar una condicion (SI se cumple o NO) con la estructura WHILE   
 var diasSemana = ["lunes", "martes","miercoles", "jueves","viernes", "sabado", "domingo"];
 var recorroDiasSemana=0;
 console.log("los dias de la semana son: ")
 while (recorroDiasSemana <7){
     console.log(diasSemana[recorroDiasSemana]);
     recorroDiasSemana++;
 }

 // Podemos evaluar una condicion (SI se cumple o NO) con la estructura DO...WHILE   
 var diasSemana = ["lunes", "martes","miercoles", "jueves","viernes", "sabado", "domingo"];
 var recorroDiasSemana=0;
 do {
    console.log(diasSemana[recorroDiasSemana]);
    recorroDiasSemana++;
 }
 while (recorroDiasSemana <7)
    
//   
 