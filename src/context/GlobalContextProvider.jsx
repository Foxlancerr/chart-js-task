import { createContext, useState } from "react";
import React from "react";
import realData from "../utils";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  // chart data displayed
  function chartDataShowing() {
    // console.log("Printed")
    const labels = realData.languages;
    const datasets = realData.metrics.map((metric) => ({
      label: metric.name,
      data: metric.data,
      fill: false,
      //   backgroundColor: "#f8f9fa",
      backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 1)`,
      pointBackgroundColor: "#4361ee",
      pointRadius: 5,
      pointBorderColor: "#fff",
      borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 1)`,
    }));

    setChartData({
      labels,
      datasets,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        chartData,
        chartDataShowing,
        setChartData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
