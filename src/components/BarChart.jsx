// LineChart.js
import React, { useEffect, useState } from "react";
import { Bar} from "react-chartjs-2";
import realData from "../utils/index.js";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const BarChart = () => {
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
    <div>
      <h2>Language Popularity Comparison</h2>
      {/* <Line data={chartData} /> */}
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
