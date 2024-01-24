import React from "react";
import { Link,NavLink } from "react-router-dom";
import { ChartCard } from "../components";

const Home = () => (
  <div className="bg-gray-100 min-h-screen flex items-center justify-center flex-col">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4 leading-tight">
        Explore Interactive Charts
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Visualize and analyze data trends with our interactive charts powered by
        Chart.js.
      </p>
      <Link
        to="https://www.chartjs.org/"
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
      >
        View Charts
      </Link>
    </div>

    {/* Differents cards */}
    <div className="text-center gap-6 flex flex-col mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ChartCard
          title="Line Chart"
          description="Visualize trends over time with a line chart."
          link="/line"
        />
        <ChartCard
          title="Bar Chart"
          description="Compare different categories with a bar chart."
          link="/bar"
        />
        <ChartCard
          title="Pie Chart"
          description="Display proportions with a colorful pie chart."
          link="/pie"
        />
        {/* Add more cards as needed */}
      </div>

      <NavLink
        target="_blank"
        to="https://github.com/Foxlancerr/chart-js-task"
        className="text-4xl font-bold hover:underline hover:text-blue-600"
      >
        Read Source code on GitHub
      </NavLink>
    </div>
  </div>
);

export default Home;
