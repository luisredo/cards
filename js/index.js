import { Baraja } from "./Infraestructure/Baraja.js";
import { Crupier } from "./Infraestructure/crupier.js";

function app() {
  var baraja = new Baraja();
  var crupier = new Crupier().fill();
  baraja.setMazo(crupier);
  crupier.getOut(baraja.getMazo());

  debugger;
}

app();
