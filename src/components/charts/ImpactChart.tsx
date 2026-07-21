"use client";

import { Line } from "react-chartjs-2";

export default function ImpactChart() {
  const data = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "People Educated",
        data: [1200, 3400, 5800],
        borderColor: "#00a884",
        backgroundColor: "rgba(0,168,132,0.2)"
      }
    ]
  };

  return <Line data={data} />;
}
