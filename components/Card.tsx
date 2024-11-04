"use client";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Card() {
  const data = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Ventes 2024',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Title</h2>
      <p>Paragraphe</p>
      <div className="w-full h-40 mt-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
