import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { ThemeContext } from '../context/themeContext';

export const PokemonStats= ({ stats }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const prevStats = useRef(null);

  useEffect(() => {
    if (!stats || stats.length === 0) {
      return;
    }

    if (prevStats.current === null || JSON.stringify(prevStats.current) !== JSON.stringify(stats)) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy previous chart instance
      }

      const labels = stats.map(stat => stat.stat.name);
      const values = stats.map(stat => stat.base_stat);

      const chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Base Stats',
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      };

      const chartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        maintainAspectRatio: false,
      };

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions,
      });

      prevStats.current = stats;
    }
  }, [stats]);

  return (
    <div style={{ height: '250px', width: '400px',overflow: 'hidden' }}>
      <canvas ref={chartRef} width="400" height="300"></canvas>
    </div>
  );
};

