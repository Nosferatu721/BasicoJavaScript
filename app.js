let random = Math.floor(Math.random() * 3);

const opciones = ["Piedra", "Papel", "Tijera"];

jugar = (tiro) => {
  console.log("Bot = " + opciones[random]);
  console.log("Yo = " + (opciones[tiro] ? opciones[tiro] : 'Tiro mal??'));
  if (tiro == random) {
    console.log("Empate");
  } else if (tiro == 0 && random == 1) {
    console.log(`Has perdido contra ${opciones[random]}`);
  } else if (tiro == 0 && random == 2) {
    console.log(`Has ganado contra ${opciones[random]}`);
  } else if (tiro == 1 && random == 0) {
    console.log(`Has ganado contra ${opciones[random]}`);
  } else if (tiro == 1 && random == 2) {
    console.log(`Has perdido contra ${opciones[random]}`);
  } else if (tiro == 2 && random == 0) {
    console.log(`Has perdido contra ${opciones[random]}`);
  } else if (tiro == 2 && random == 1) {
    console.log(`Has perdido contra ${opciones[random]}`);
  } else {
    console.log("Papi valor equivocado");
  }
};

jugar(5);
