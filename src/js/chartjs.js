import Chart from "https://esm.sh/chart.js/auto";
import "https://esm.sh/chartjs-adapter-date-fns";

const series = [
  { x: "2025-04-28T00:00:00", y: 10225.8 },
  { x: "2025-04-29T00:00:00", y: 146874.7 },
  { x: "2025-04-30T00:00:00", y: 184709.0 },
  { x: "2025-05-01T00:00:00", y: 270942.0 },
  { x: "2025-05-02T00:00:00", y: 250071.6 },
  { x: "2025-05-03T00:00:00", y: 230099.6 },
  { x: "2025-05-04T00:00:00", y: 224374.6 },
  { x: "2025-05-05T00:00:00", y: 221405.2 },
  { x: "2025-05-06T00:00:00", y: 223778.3 },
  { x: "2025-05-07T00:00:00", y: 241896.4 },
  { x: "2025-05-08T00:00:00", y: 264784.2 }
];

const datas = [
  { x: "2025-04-08T00:00:00", y: 0.0 },
  { x: "2025-04-09T00:00:00", y: 41856.9 },
  { x: "2025-04-10T00:00:00", y: 682955.1 },
  { x: "2025-04-11T00:00:00", y: 526729.8 },
  { x: "2025-04-12T00:00:00", y: 519423.6 },
  { x: "2025-04-13T00:00:00", y: 399147.8 },
  { x: "2025-04-14T00:00:00", y: 354060.8 },
  { x: "2025-04-15T00:00:00", y: 332866.8 },
  { x: "2025-04-16T00:00:00", y: 316656.0 },
  { x: "2025-04-17T00:00:00", y: 328163.5 },
  { x: "2025-04-18T00:00:00", y: 386818.3 },
  { x: "2025-04-19T00:00:00", y: 390287.7 },
  { x: "2025-04-20T00:00:00", y: 284609.0 },
  { x: "2025-04-21T00:00:00", y: 264556.5 },
  { x: "2025-04-22T00:00:00", y: 244658.2 },
  { x: "2025-04-23T00:00:00", y: 236314.7 },
  { x: "2025-04-24T00:00:00", y: 251658.7 },
  { x: "2025-04-25T00:00:00", y: 302331.5 },
  { x: "2025-04-26T00:00:00", y: 309558.5 },
  { x: "2025-04-27T00:00:00", y: 221439.5 },
  { x: "2025-04-28T00:00:00", y: 289263.0 },
  { x: "2025-04-29T00:00:00", y: 376700.0 },
  { x: "2025-04-30T00:00:00", y: 340958.9 },
  { x: "2025-05-01T00:00:00", y: 375753.9 },
  { x: "2025-05-02T00:00:00", y: 403760.3 },
  { x: "2025-05-03T00:00:00", y: 294349.5 },
  { x: "2025-05-04T00:00:00", y: 267803.6 },
  { x: "2025-05-05T00:00:00", y: 251258.6 },
  { x: "2025-05-06T00:00:00", y: 244285.7 },
  { x: "2025-05-07T00:00:00", y: 243364.2 },
  { x: "2025-05-08T00:00:00", y: 276700.7 }
];

let graphiques = new Chart(document.querySelector("canvas").getContext("2d"), {
  type: "line",
  data: {
    datasets: [
      {
        label: "Battlefield 6",
        data: datas,
        borderWidth: 2,
        tension: 0.4, // 0 linéaire, 0.5 smooth
        fill: true,
        borderColor: "rgba(239, 85, 82, 1)",
        backgroundColor: "rgba(239, 85, 82, 0.1)",
        pointRadius: 0
      },
      {
        label: "ARC Raiders",
        data: series,
        borderWidth: 2,
        tension: 0.4, // 0 linéaire, 0.5 smooth
        fill: true,
        borderColor: "rgba(85, 239, 85, 1)",
        backgroundColor: "rgba(85, 239, 85, 0.1)",
        pointRadius: 0
      }
    ]
  },
  options: {
    locale: "fr-CA",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Joueurs simultanés (SteamDB)"
      }
      // legend: { display: false }
    },
    scales: {
      x: {
        type: "time",
        time: { tooltipFormat: "yyyy-MM-dd" }, // Pour le tooltip
        title: {
          display: true,
          text: "Jours",
          color: "#fff",
          font: {
            family: "Arial",
            size: 12,
            weight: "600"
          },
          padding: { top: 15 }
        },

        // Grille
        grid: {
          color: "rgba(222, 222, 222, 0.2)", // Couleur des lignes
          lineWidth: 1 // Largeur des lignes
        },

        // Bordure de l’axe
        border: {
          color: "rgba(222, 222, 222, 0.2)",
          width: 2,
          dash: [0, 0] // Lignes à l'intérieur
        },

        // Gradations / étiquettes
        ticks: {
          display: true,
          color: "#fff",
          font: {
            family: "Arial",
            size: 11,
            weight: "500"
          },
          maxTicksLimit: 5,
          mirror: false,
          z: 1
        }
      },

      y: {
        type: "linear",

        title: {
          display: true,
          text: "Joueurs simultanés",
          color: "#fff",
          font: {
            family: "Arial",
            size: 12,
            weight: "600"
          },
          padding: { bottom: 20 }
        },

        grid: {
          color: "rgba(222, 222, 222, 0.2)",
          lineWidth: 1
        },

        ticks: {
          display: true,
          color: "#fff",
          font: {
            family: "Arial",
            size: 11,
            weight: "500"
          },
          maxTicksLimit: 5,
          mirror: false
        },

        border: {
          color: "rgba(222, 222, 222, 0.2)",
          width: 2,
          dash: [0, 0] // Lignes à l'intérieur
        }
      }
    }
  }
});

// Décommenter pour animer
//
 setInterval(() => {
   for (let ds of graphiques.data.datasets) {
     for (let i = 0; i < ds.data.length; i++) {
       const currentY = parseFloat(ds.data[i].y);
       const random = Math.round(Math.random() * 20000 - 10000);
       ds.data[i].y = Math.max(0, currentY + random);
     }
   }
   graphiques.update();
 }, 100);


const data = [];

// Ici on ajoute des données bidons dans le tableau
for (let i = 0; i < 10; i++) {
  data.push({
    x: i * 1000 + 1000,
    y: Math.floor(Math.random() * 2000)
  });
}

let graphique = new Chart(document.querySelector(".chart").getContext("2d"), {
  type: "line",
  data: {
    datasets: [
      {
        label: "-",
        data: data,
        borderWidth: 2,
        tension: 0.3, // 0 linéaire, 0.5 smooth
        fill: true,
        borderColor: "rgba(239, 85, 82, 1)",
        backgroundColor: "rgba(239, 85, 82, 0)",
        pointRadius: 0
      }
    ]
  },
  options: {
    animation: {
      duration: 10000 // 20x plus lent que la modification
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false
      },
      legend: { display: false }
    },
    scales: {
      x: {
        type: "linear",
        title: {
          display: false
        },
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      },

      y: {
        type: "linear",
        title: {
          display: false
        },
        grid: {
          display: false
        },
        ticks: {
          display: false,
          maxTicksLimit: 3
        }
      }
    }
  }
});

// En événement
document.body.addEventListener("click", () => {
  for (const ds of graphique.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i].y = Math.round(Math.random() * 2000);
    }
  }
  graphique.update();
});

// En temps
setInterval(() => {
  for (let ds of graphique.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i].y = Math.round(Math.random() * 2000);
    }
  }
  graphique.update();
}, 500);
