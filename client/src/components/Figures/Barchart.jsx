import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  defaults,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
defaults.color = '#000000';
export const options = {
  scales: {
    y: {
      ticks: {
        color: 'black',
      },
    },
    x: {
      ticks: {
        color: 'black',
      },
    },
  },
  responsive: true,
  plugins: {
    colors: {
      enabled: true,
    },
    legend: {
      position: 'top',
      display: false,
      color: '#000000',
    },

    title: {
      display: true,
      text: 'Your Monthly Income From Rented Properties',
      color: '#000000',
    },
  },
};

function Barchart({ chartData }) {
  return (
    <div>
      <Bar options={options} data={chartData} />
    </div>
  );
}

export default Barchart;
