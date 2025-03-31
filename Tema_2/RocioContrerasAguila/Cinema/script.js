const N = 12; 
let butacas = setup();
let sugerenciaActual = new Set();

function setup() {
  let idContador = 1;
  let matriz = [];

  for (let i = 0; i < N; i++) {
    let fila = [];
    for (let j = 0; j < N; j++) {
      fila.push({
        id: idContador++,
        estado: false
      });
    }
    matriz.push(fila);
  }

  // Simular butacas ya reservadas
  matriz[11][5].estado = true;
  matriz[11][6].estado = true;

  return matriz;
}

function suggest(butacas, cantidad) {
  if (cantidad > N) return new Set();

  for (let i = N - 1; i >= 0; i--) {
    for (let j = 0; j <= N - cantidad; j++) {
      let disponibles = true;
      for (let k = 0; k < cantidad; k++) {
        if (butacas[i][j + k].estado) {
          disponibles = false;
          break;
        }
      }

      if (disponibles) {
        let seleccion = new Set();
        for (let k = 0; k < cantidad; k++) {
          seleccion.add(butacas[i][j + k].id);
        }
        return seleccion;
      }
    }
  }

  return new Set();
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const btnSugerir = document.getElementById("btn-sugerir");
  const btnConfirmar = document.getElementById("btn-confirmar");

  // Solo los elementos visuales de butacas (ignora <td> de "Fila X")
  const seatElements = Array.from(document.querySelectorAll(".seat"));

  btnSugerir.addEventListener("click", () => {
    seatElements.forEach(seat => seat.classList.remove("selected"));
    sugerenciaActual.clear();

    const cantidad = parseInt(input.value);
    const sugerencia = suggest(butacas, cantidad);

    if (sugerencia.size === 0) {
      alert("No hay suficientes butacas disponibles juntas.");
      return;
    }

    sugerenciaActual = sugerencia;

    // Marcar visualmente los asientos sugeridos
    let id = 1;
    for (let seat of seatElements) {
      if (sugerencia.has(id)) {
        seat.classList.add("selected");
      }
      id++;
    }
  });

  btnConfirmar.addEventListener("click", () => {
    if (sugerenciaActual.size === 0) {
      alert("Primero debes buscar los asientos.");
      return;
    }

    // Cambiar el estado lógico de los asientos y su clase visual
    let id = 1;
    for (let fila of butacas) {
      for (let asiento of fila) {
        if (sugerenciaActual.has(asiento.id)) {
          asiento.estado = true;
        }
      }
    }

    let idVisual = 1;
    for (let seat of seatElements) {
      if (sugerenciaActual.has(idVisual)) {
        seat.classList.remove("selected");
        seat.classList.add("reserved");
      }
      idVisual++;
    }

    sugerenciaActual.clear();
    alert("¡Reserva confirmada!");
  });
});
