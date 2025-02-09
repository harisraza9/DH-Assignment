import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import Graphs from "../components/Graphs";
import { fetchProducts } from "../services/api";
import "./Dashboard.css"; // Optional for additional styles

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Product Dashboard</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
          <div className="data-table-container">
            <DataTable products={products} />
          </div>
          <Graphs products={products} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
