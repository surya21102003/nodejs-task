
import { useState } from "react";
import API from "../api";

const AddProductForm = ({ refreshProducts }) => {
  const [product, setProduct] = useState({
    productId: "", name: "", price: "", featured: false, rating: "", company: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/products", {
        ...product,
        price: parseFloat(product.price),
        rating: parseFloat(product.rating),
      });
      refreshProducts();
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input required placeholder="Product ID" onChange={(e) => setProduct({ ...product, productId: e.target.value })} />
      <input required placeholder="Name" onChange={(e) => setProduct({ ...product, name: e.target.value })} />
      <input required type="number" placeholder="Price" onChange={(e) => setProduct({ ...product, price: e.target.value })} />
      <input required placeholder="Company" onChange={(e) => setProduct({ ...product, company: e.target.value })} />
      <input type="number" placeholder="Rating" onChange={(e) => setProduct({ ...product, rating: e.target.value })} />
      <label>
        Featured:
        <input type="checkbox" onChange={(e) => setProduct({ ...product, featured: e.target.checked })} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
