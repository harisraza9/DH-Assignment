import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

// Register all necessary components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Graphs = ({ products }) => {
  // Helper: Prepare Pie chart data
  const categories = [...new Set(products.map((p) => p.category))];
  const stockByCategory = categories.map((cat) =>
    products
      .filter((p) => p.category === cat)
      .reduce((sum, p) => sum + p.stockQuantity, 0)
  );

  const pieChartData = {
    labels: categories,
    datasets: [
      {
        label: "Stock Quantity",
        data: stockByCategory,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Helper: Prepare Bar chart data
  const totalAddedByPeriod = (days) =>
    products.filter(
      (p) => new Date() - new Date(p.dateAdded) < days * 24 * 60 * 60 * 1000
    ).length;

  const barChartData = {
    labels: ["This Week", "This Month", "This Year"],
    datasets: [
      {
        label: "Products Added",
        data: [totalAddedByPeriod(7), totalAddedByPeriod(30), totalAddedByPeriod(365)],
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <div>
      <div className="chart-container">
  <Pie
    data={{
      labels: categories,
      datasets: [
        {
          label: "Stock Quantity",
          data: stockByCategory,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    }}
    options={{
      maintainAspectRatio: false,
    }}
  />
</div>
      <div className="chart-container">
      <Bar
    data={{
      labels: ["This Week", "This Month", "This Year"],
      datasets: [
        {
          label: "Products Added",
          data: [10, 30, 50], // Example data
          backgroundColor: "#36A2EB",
        },
      ],
    }}
    options={{
      maintainAspectRatio: false,
    }}
  />
    </div>
    </div>
  );
};

export default Graphs;
