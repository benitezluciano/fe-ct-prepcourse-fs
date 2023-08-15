// var deportes = {
//     conBalon: ['Futbol', 'Basketball', 'Golf'],
//     sinBalon: ['Boxeo', 'Surf', 'Trekking'],
//  };
//  var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } }; 
 // Las claves son unicas en un objeto. Los valores si pueden ser iguales, e incluso puede ser cualquier tipo de dato de JS.

 //console.log(persona.edad); // Para acceder a la propiedad de un objeto, debemos colocar el nombre del objeto seguio de un punto y el nombre de la propiedad.
// persona.nombre = "Luciano"; // Para cambiar el valor de una propiedad simplemente accedemos a ella e igualamos al nuevo valor;
// console.log(persona.nombre);

//CREAR
// var autos = {};
// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// console.log(autos);
// //BORRAR
// delete autos.marcas; //Utilizamos la palabra reservaba "delete"
// console.log(autos);

//Dentro de la propiedad del objeto podemos guardar funciones
// var misFunciones = {
//     saludar: function(){
//         console.log("hola");
//     }
// };
// misFunciones.saludar();

// DOT NOTATION
// var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
//console.log(atuendos);
// BRACKET NOTATION
// atuendos['piernas'] = ['Bermudas', 'Pantalones']; //Agregamos propiedades de esta manera nombre de objeto 
//seguido del nombre de la propiedad entre corchetes []
// console.log(atuendos);

//Utilizar Bracket.Notation nos favorecera para utilizar una variable externa para guardarla como propiedad en un objeto
//Veremos en el siguiente ejemplo de una funcion
// var comidas = {};
// var diferenciaDeNotaciones = function (propUno, propDos){
//     comidas.propUno = ["Frutas","Vegetales"]; //Aca agregamos valores a propUno con Dot Notation
//     comidas[propUno] = ["Hamburguesa", "Papas Fritas"];//Aca con Bracket.Notation pero sin comillas
// };
// diferenciaDeNotaciones ("saludable","noSaludable");
// console.log(comidas);

// HAS OWN PROPERTY
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var tienePropiedad = libro.hasOwnProperty('nombre');

// console.log(tienePropiedad);
// // KEYS
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var todasLasPropiedades = Object.keys(libro);

// console.log(todasLasPropiedades);
// var mundo = { continentes: 7, paises: 195, oceanos: 5};
// for (let prop in mundo) { //Dentro del parentecis escribimos unos valores y palabras claves. 1ro Declaramos la var de iteracion con las que podremos acceder a las propiedades
//"prop in mundo". 
//     console.log('Esta es la propiedad: '+ prop);
//     console.log('Este es el valor: '+ mundo[prop]);
//  }

 //THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function (){
       console.log('Mi perro es un  ' + this.raza); //Si no colocamos this, la terminal nos avisara que la palabra raza no existe
    },
 };
