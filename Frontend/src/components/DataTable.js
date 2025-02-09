import React from "react";

const DataTable = ({ products }) => {
  return (
    <table className="data-table">
  <thead>
    <tr>
      <th>Category</th>
      <th>Name</th>
      <th>Product Code</th>
      <th>Price</th>
      <th>SKU</th>
      <th>Stock Quantity</th>
      <th>Date Added</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
      <tr key={product.id}>
        <td>{product.category}</td>
        <td>{product.name}</td>
        <td>{product.productCode}</td>
        <td>{product.price.toFixed(2)}</td>
        <td>{product.sku}</td>
        <td>{product.stockQuantity}</td>
        <td>{new Date(product.dateAdded).toLocaleDateString()}</td>
      </tr>
    ))}
  </tbody>
</table>
  );
};

export default DataTable;
