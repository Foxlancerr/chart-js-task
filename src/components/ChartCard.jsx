import React from "react";
import { Link } from "react-router-dom";

const ChartCard = ({ title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
    <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
    <p className="text-gray-600">{description}</p>
    <Link to={link} className="block mt-4 text-blue-500 hover:underline">
      Learn More
    </Link>
  </div>
);

export default ChartCard;
