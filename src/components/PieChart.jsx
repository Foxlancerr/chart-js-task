import React, { useEffect, useState, useContext } from "react";
import { Pie} from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { GlobalContext } from "../context/GlobalContextProvider.jsx";

Chart.register(CategoryScale);

const PieChart = () => {
  // import globalContext
  const { chartDataShowing, chartData } = useContext(GlobalContext);

  useEffect(() => {
    chartDataShowing();
  }, []); // Empty dependency array means this useEffect runs once, like componentDidMount

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[30%] ">
        <h2 className="text-4xl mb-10 font-bold text-blue-600 text-center">
          Language Popularity Comparison
        </h2>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
