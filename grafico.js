// Estrae i valori dalla parte hash dell'URL
const hash = window.location.hash.substring(1);
const [corrette, errate] = hash.split("-");

// Crea un grafico a ciambella con Chart.js
var ctx = document.getElementById("risultatiGrafico").getContext("2d");
var myDoughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Corrette", "Errate"],
    datasets: [
      {
        data: [corrette, errate],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  },
  options: {
    responsive: false,
  },
});
