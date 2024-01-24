// App.js
import React from "react";
import { LineChart, BarChart, PieChart } from "./components";
import { Home } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/line" element={<LineChart></LineChart>}></Route>
      <Route path="/bar" element={<BarChart></BarChart>}></Route>
      <Route path="/pie" element={<PieChart></PieChart>}></Route>
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
