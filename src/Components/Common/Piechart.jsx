


import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Piechart() {
  const data = {
    labels: ["65%", "20%", "15%"],
    datasets: [
      {
        data: [65, 20, 15],
        backgroundColor: ["#2B4DED", "#FFD1A7", "#FF9E69"],
        borderWidth: 0,
        cutout: "70%", // Makes it a donut chart
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false }, // Hide the legend
      tooltip: {
        backgroundColor: "#FFFFFF", // Set background color to white
        borderColor: "#D3D3D3", // Optional: Add a light border for better visibility
        borderWidth: 1, // Optional: Border thickness
        borderRadius: 20,  // Make the tooltip rounded
        titleColor: "#000", // Set title color
        bodyColor: "#000", // Set tooltip text color
        padding: 10, // Add padding inside the tooltip
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "112px", height: "112px", textAlign: "center" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default Piechart;

