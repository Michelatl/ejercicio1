// Control de mayusculas y minusculas minuscula(.tolower-cose) mayuscula(.toUppercose)
//Coversion de  tipos de datos

//Tipos de direncias
//Mayusculas  y minusculas
//Espacio vacio
// tildes
//espacios o caracter

let age = parseInt(prompt("ingresa la edad"));
let country = prompt("ingrese el pais").toLowerCase();
console.log(age, country);

if (age == 0 || country == "") {
  alert("No ingresaste uno de los valores");
} else {
  if (age >= 18 && country != "china") {
    alert("tienes permisos para ver  el catalogo de peliculas de terror");
  } else {
    alert("No tienes permisos para ver  el catalogo de peliculas de terror");
  }
}

/* Operacion de Comparacion ( se les suele decir operadores logicos)
*>: indica que es mayor que
 *<: indicar que es menor que
 *== : indica igual que
 *>= : indica mayor o igual que
 *<= : indica que es menor igual que
 *!= indica diferente que
 *Operadores logicos
 &&:Indica y
 ||:Indica el no */
