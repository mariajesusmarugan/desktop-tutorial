//Prueba bucle for condición simple

for (let i= 0; i<10; i++){
    console.log("dentro del bucle");
    console.log(i);

}

//Prueba bucle for para pintarala en consola, mejor coigo que console.log(i); anterior

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