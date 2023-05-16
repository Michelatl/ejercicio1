let day = prompt(" Ingrese un dia la semana").toLowerCase();

if (day == "sabado" || day == "domindo") {
  alert("Es fin de semana");
} else {
  if (
    day == "lunes" ||
    day == "martes" ||
    day == "miercoles" ||
    day == "jueves" ||
    day == "viernes"
  ) {
    alert("Es un dia entre semana");
  } else {
    alert("No es un dia ");
  }
}
