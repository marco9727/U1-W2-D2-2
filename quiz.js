let risposteCorrette = 0;
let risposteErrate = 0;

function rispostaSelezionata(risposta) {
  if (risposta === "Roma" || risposta === "Blu") {
    risposteCorrette++;
  } else {
    risposteErrate++;
  }
}

function calcolaRisultato() {
  // Reindirizza alla pagina del grafico
  window.location.href =
    "grafico.html#" + risposteCorrette + "-" + risposteErrate;
}
