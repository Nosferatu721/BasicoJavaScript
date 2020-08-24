let obj = {
  name: "Elkin",
  lastname: "Torres",
  age: 19,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} ${this.lastname} and have ${this.age} years old`
    );
  },
};
// obj.greet()
// console.log(obj.name)

function auto(marca, modelo, year) {
  this.marca = marca;
  this.modelo = modelo;
  this.year = year;
}

let auto1 = new auto("kjsadhf", "lkajsd", 2020);
let auto2 = new auto("qwiopue", "oweirut", 3030);

let articulos = [
  { nombre: "Bici", costo: 110 },
  { nombre: "Tv", costo: 810 },
  { nombre: "Libro", costo: 50 },
  { nombre: "Celular", costo: 600 },
];
// Filter
let articulosFilter = articulos.filter(function (articulo) {
  return articulo.costo <= 300;
});
// console.log(articulosFilter)

// Map
let articulosMap = articulos.map(function (articulo) {
  return articulo.nombre;
});
// console.log(articulosMap)

let articulosFind = articulos.find(function (art) {
  return art.nombre === "Celular";
});
// console.log(articulosFind);
// console.log(articulosFind ? true : false);

let articulosFor = articulos.forEach(function (arti) {
  // console.log(arti.nombre);
});
// console.log(articulosFor);

let articulosBaratos = articulos.some(function (artic) {
  return artic.costo <= 40;
});
console.log(articulosBaratos);

// https://i.emezeta.com/weblog/css3-cheatsheet/css3-cheatsheet-2017-emezeta.pdf
// https://i.emezeta.com/weblog/html5-cheatsheet/html5-cheatsheet-2019.pdf

switch (false) { 
	case false: console.log("Soy falso :( ") 
	case true: console.log("Soy verdadero!") 
}