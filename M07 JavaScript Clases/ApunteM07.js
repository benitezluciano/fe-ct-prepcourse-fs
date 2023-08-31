// // FUNCIÓN CONSTRUCTORA
// function Auto(puertas, color, marca, año, ruedas) {
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;
//  }
//  let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
//  console.log(miPrimerAuto);
//  console.log(miPrimerAuto.marca);

 // EXPRESIÓN DE CLASE //Nuevo metodo
// class Auto { //Utilizamos la palabra reservada seguido de su nombre (primera letra en mayucula) y abrimos llaves
//     constructor(puertas, color, marca, año, ruedas) { //Para declarar prop utilizamos la palabra reservada "constructor"
//        this.puertas = puertas;
//        this.color = color;
//        this.marca = marca;
//        this.año = año;
//        this.ruedas = ruedas;
//     }

//     informacion (){
//       console.log("Este es un" + this.marca + " de color " + this.color );
//     }
//  }
//  let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
//  miSegundoAuto.informacion();
//  console.log(miSegundoAuto);
//  console.log(miSegundoAuto.marca);
 //Listo ¿Ahora como agregamos metodos? Al ser un metodo y no una propiedad lo agregamos por fuera del constructor...
 //... simplemente escribimos el nom. del metodo seguido de parentesis y llaves. Luego explicitamos su funcionalidad...
 // declaramos su nombre "informacion" 

//  Array.prototype.mayorQueTres = function () {
//    var arregloModificado = [];
//    for (var i = 0; i < this.length; i++) {
//       	if (this[ i ] > 3) {
//          		arregloModificado.push(false);
//      	 } else {
//         		 arregloModificado.push(this[ i ]);
//      	 }
//    }
//    return arregloModificado;
// };
 
// var arreglo = [1, 2, 3, 4, 5];
// var nuevoArreglo = arreglo.mayorQueTres();
// console.log(nuevoArreglo);
// //
// class LatinoAmerica {
// 	constructor() {
// 		this.paises = [ ];
// 	};
// };
 
// LatinoAmerica.prototype.agregarPais = function (pais) { //Escribimos una funcion que recibe por parametro la propiedad "pais"
// 	//y que finalmente accede a la propiedad "paises" utilizando la palabra "this" y por medio de "push" le pushea a "paises" lo que recibe por parametro "pais" 
//    	this.paises.push(pais);
// };
// let continente = new LatinoAmerica(); //Para acceder a la propiedad creamos una var "contienente" que sera = a una nueva instancia de "LatinoAmerica"
// continente.agregarPais('México');
// console.log(continente.paises);

//EXTENSION DE CLASE: Primero creamos una clase como las demas llamda "Persona"
class Persona {
	constructor(nombre, edad) {
	   this.nombre = nombre;
	   this.edad = edad;
	}
	saludar() {
	   console.log(
		  'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
	   );
	}
 }
//  let martin = new Persona('Martin', 26);
//  martin.saludar();

 //¿ Como hacemos para extneder esta clase?
 class Programador extends Persona {
	constructor(nombre, edad, añosDeExperiencia) {
	   super(nombre, edad);
	   this.añosDeExperiencia = añosDeExperiencia; //Como esta prop. no es heredada utilizamos this
	}
	codear() {
	   console.log(
		  'Soy ' +
			 this.nombre +
			 ' . Codeo desde hace  ' +
			 this.añosDeExperiencia +
			 ' años'
	   );
	}
}
 
 let martin = new Persona('Martín', 26);
 let programador = new Programador('María', 37, 4);
 martin.saludar();
 programador.codear();