// LineChart.js
import React, { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import realData from "../utils/index.js";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const labels = realData.languages;
    const datasets = realData.metrics.map((metric) => ({
      label: metric.name,
      data: metric.data,
      fill: false,
      borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 1)`,
    }));

    setChartData({
      labels,
      datasets,
    });
  }, []); // Empty dependency array means this useEffect runs once, like componentDidMount

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[60%] ">
        <h2 className="text-4xl mb-10 font-bold text-blue-600 text-center">Language Popularity Comparison</h2>
        {/* <Line data={chartData} /> */}
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
