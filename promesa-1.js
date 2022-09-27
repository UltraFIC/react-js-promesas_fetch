

console.log('-------> hola mundo');

//FIC: funcion que recibe un nuemero y le suma uno. 
function fcnSumarUno( numero, fcnResultadoCallBack ){ 
    setTimeout(function(){ 
       //return numero + 1;  
       fcnResultadoCallBack( numero + 1 ); 
    }, 800); 
}

//FIC: llamar la funcion.
//let Resultado = fcnSumarUno (5);

//FIC: llamar la funcion. 
fcnSumarUno (5, function(nuevoValor1){ 
    //FIC: desplegar el resultado en consola. 
    console.log("Resultado:", nuevoValor1); 
});


//console.log('-------> la suma es:', Resultado);