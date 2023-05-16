// condicionales -if/else

// Algoritmo dependiendo si el usuaio son mayores de 18 para habiliar  un catalogo de peliculas de terror
//si  el pais es china asi sea mayor  o igual que 18 no habilitara el catalogo

let age = prompt("ingresa la edad");
let country = prompt("ingrese el pais");

if (age >= 18 && country != "china" )
{
  alert("tienes permisos para ver  el catalogo de peliculas de terror");
} else {
  alert("No tienes permisos para ver  el catalogo de peliculas de terror");
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
