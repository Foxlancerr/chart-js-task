import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const ChartCard = ({ title, description, link }) => {
  function NavigateMsg() {
    const msg = link.substring(1, link.length);
    toast.success(`Redirecting to ${msg.toUpperCase()} Page`);
  }
  return (
    <div className="bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 p-10">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <Link
        to={link}
        onClick={NavigateMsg}
        className="block mt-4 text-blue-500 hover:underline"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ChartCard;
