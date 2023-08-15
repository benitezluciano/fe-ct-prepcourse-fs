// Lenght
// var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
// console.log(nombres);

// Lista de compras
// var listaDeCompras = []; // Primero creamos una var seguida del nombre de nuestro arrays= a dos corchetes
// listaDeCompras [3]= 'Tomates'; //Agregamos elementos a nuestros arreglos de esta manera
// listaDeCompras[1] = 'Lechuga'; 
// console.log(listaDeCompras.length); //De esta manera vemos cuantos elementos tienen nuestro arrays. Con el elemento ".length"

// var elementoDelArrays= listaDeCompras [1]; //Recuperamos un elemento de esta manera 
//  console.log(elementoDelArrays);

// Metodos de Arrays:
// var colores= ["amarillo", "rojo"];
// colores.push("verde"); // Agregar un elemento al final: colocamos el nombre de la variables seguida de ".push" y entre () lo que queremos agregar
// colores.unshift("negro"); // Agregar un elemento al incio: "Nombredelavariable.unshift" 
// colores.pop(); // Con esto eliminamos el ultimo elemento
// colores.shift();//Eliminamos el primer elemento
// console.log(colores)

// INCLUDES
// var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];//Creamos una variable 
// var existeDali = pintores.includes('Dali');

// console.log(existeDali);

// EVERY
// var numeros = [ 10, 6, 8, 9, 43 ];//Creamos una varuable con un conjunto de numeros 
// var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );//Ponemos la condicion que se debe cumplir 

// console.log(cumplenCondicion);

// SPLIT
// var palabra = 'Henri'; //Creamos una variable con un string
// var palabraSeparada = palabra.split('');// Utilizamos el metodo "split" para imprimir cada elemento del string por separado
//                                         // Las comillas juntas indica que separe la palabra por cada caracter 
//                                         //En el caso de poner una letra entre las comillas, va a separar cada vez que encuentre esa letra.Lo mismo hara con el espacio
// palabraSeparada.pop(); //Eliminamos la ultima letra
// palabraSeparada.push("y");//Agregamos la letra correcta
// // console.log(palabraSeparada);
//  var palabraArreglada = palabraSeparada.join("");//Metodo join: De esta manera convertimos nuevamente en un string
// console.log(palabraArreglada);

// FOREACH
// var numeros = [ 1, 2, 3, 4 ];
// numeros.forEach( (num) => { console.log(num) } )//numeros.foreach por cada num, console.log num. Nos imprime cada numero por separado
// //Esto mismo lo podemos repetir con cualquier cosa. Por ejemplo si establecemos que nos devuelva solo el 3


// MAP
// var numeros = [ 1, 2, 3, 4 ];
// var masUno = numeros.map( (num) => { return num + 1 } );//Al igual que el ejemplo anterior nos imprime cada elemento, pero en este caso si lo podemos modificar

// console.log(masUno);

// FOR
// var arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// WHILE
// var arr = [];
// while (arr.length < 5) {
//    arr.push('Camilo');
// }
// console.log(arr);

