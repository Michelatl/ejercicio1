let numbertires = parseInt(prompt("Ingrese el numero de llantas"));
let numtransport = prompt(
  "Elija un medio de trasporte terrestre o avion, luego ingrese su respuesta"
).toLowerCase();

if (numbertires == 4 && numtransport == "terrestre") {
  alert("automivil");
} else {
  if (numbertires > 4 && numtransport == "terrestre") {
    alert("camion");
  } else {
    if (numbertires == 2 && numtransport == "terrestre") {
      alert("moto o bicicleta");
    } else {
      if (numbertires == 1 && numtransport == "terrestre") {
        alert("monociclo");
      } else {
        if (numbertires == 0 && numtransport == "acuatico") {
          alert("barco");
        } else {
          if (numbertires == 20 && numtransport == "aereo") {
            alert("avion");
          } else {
            if (numtransport != "terrestre" && numtransport != "avion" && numtransport != "acuatico") {
              alert(
                "El medio de transporte no esta dentro de los establecidos"
              );
            } else {
            }
          }
        }
      }
    }
  }
}
