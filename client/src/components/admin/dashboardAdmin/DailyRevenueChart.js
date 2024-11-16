import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { dailyRevenueData, weeklyRevenueData, monthlyRevenueData } from '../dashboardAdmin/mockData';  // Import data
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function RevenueChart() {
  const [period, setPeriod] = useState('daily'); // State for selected period
  const [data, setData] = useState(dailyRevenueData); // Default data is for daily

  // Update chart data based on the selected period
  const handlePeriodChange = (selectedPeriod) => {
    setPeriod(selectedPeriod);
    if (selectedPeriod === 'daily') {
      setData(dailyRevenueData);
    } else if (selectedPeriod === 'weekly') {
      setData(weeklyRevenueData);
    } else if (selectedPeriod === 'monthly') {
      setData(monthlyRevenueData);
    }
  };

  const chartData = {
    labels: data.map(item => item.time),  // Labels change based on selected period
    datasets: [
      {
        label: 'Revenue ($)',
        data: data.map(item => item.revenue),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Revenue ($)',
        },
      },
      x: {
        title: {
          display: true,
          text: period === 'daily' ? 'Time of Day' : period === 'weekly' ? 'Days of Week' : 'Days of Month',
        },
      },
    },
  };

  return (
    <div>
      {/* Dropdown to select period */}
      <select onChange={(e) => handlePeriodChange(e.target.value)} value={period}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      {/* Bar Chart */}
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default RevenueChart;
