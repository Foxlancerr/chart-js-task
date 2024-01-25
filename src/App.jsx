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
// function App() {
//   return (
//     <div className="App">
//       <Home></Home>
//       <header className="App-header">
//
//       </header>
//     </div>
//   );
// }

export default App;
