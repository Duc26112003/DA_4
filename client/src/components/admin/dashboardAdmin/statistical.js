import React, { useState, useEffect } from 'react';
// Corrected import for named exports
import { dailyRevenueData, weeklyRevenueData, monthlyRevenueData } from '../dashboardAdmin/mockData';
import DailyRevenueChart from './DailyRevenueChart'; // Assuming this is your chart component

function Dashboard() {
  const [period, setPeriod] = useState('daily'); // State to track selected period
  const [chartData, setChartData] = useState(dailyRevenueData); // State to store data to be passed to the chart

  // Update chart data when period changes
  useEffect(() => {
    if (period === 'daily') {
      setChartData(dailyRevenueData);
    } else if (period === 'weekly') {
      setChartData(weeklyRevenueData);
    } else if (period === 'monthly') {
      setChartData(monthlyRevenueData);
    }

    // This is where you'd fetch data from the backend in the future
    // If you were calling an API, you'd replace the setChartData calls with your API calls
  }, [period]); // Re-run useEffect whenever the selected period changes

  // Handle period change from dropdown
  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      
    
      {/* Display chart based on selected data */}
      <DailyRevenueChart data={chartData} />
    </div>
  );
}

export default Dashboard;
