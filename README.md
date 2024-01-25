# Implementation of Charts Using ChartJS Library

## Routes

1. http://localhost:5173
2. http://localhost:5173/linechart
3. http://localhost:5173/barchart
4. http://localhost:5173/piechart
5. http://localhost:5173/covidchart

## Fetch the real time COVID-19 API Reference

```jsx
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/countries?yesterday=false"
    );
    const data = await response.json();
    console.log(data[0].cases);

    const updatedData = {
      ...covidData,
      metrics: [
        {
          ...covidData.metrics[0],
          data: data.map((country) => country.cases / country.population),
        },
        {
          ...covidData.metrics[1],
          data: data.map((country) => country.deaths / country.population),
        },
      ],
    };

    console.log(updatedData);

    setChartData(updatedData);
  } catch (error) {
    console.error("Error fetching COVID-19 data:", error);
  }
};

fetchData();
```

## Used the Context API to aviod the PROP Drillings

```jsx
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
```

## How I draw the Chart (Simple Example)

```jsx
// LineChart.js
import React, { useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { GlobalContext } from "../context/GlobalContextProvider.jsx";

Chart.register(CategoryScale);

const LineChart = () => {
  // import globalContext
  const { chartDataShowing, chartData } = useContext(GlobalContext);

  useEffect(() => {
    chartDataShowing();
  }, []); // Empty dependency array means this useEffect runs once, like componentDidMount

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="w-[60%]">
        <h2 className="text-4xl mb-10 font-bold text-blue-600 text-center">
          Language Popularity Comparison
        </h2>
        {/* <Line data={chartData} /> */}
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default LineChart;
```

## Routing in react

```jsx
// App.js
import React from "react";
import { LineChart, BarChart, PieChart, CovidCharts } from "./components";
import { Home } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/linechart" element={<LineChart></LineChart>}></Route>
      <Route path="/barchart" element={<BarChart></BarChart>}></Route>
      <Route path="/piechart" element={<PieChart></PieChart>}></Route>
      <Route path="/covidchart" element={<CovidCharts></CovidCharts>}></Route>
    </Routes>
  );
}

export default App;
```
