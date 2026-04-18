import { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function CashflowChart({ income, expense, theme }) {
  const textColor = theme === 'dark' ? '#f1f5f9' : '#1e293b';

  const data = {
    labels: ['Masuk', 'Keluar'],
    datasets: [
      {
        label: 'Cashflow',
        data: [income, expense],
        backgroundColor: ['#10b981', '#ef4444'],
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { display: false, grid: { display: false } },
      x: { ticks: { color: textColor }, grid: { display: false } },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}
