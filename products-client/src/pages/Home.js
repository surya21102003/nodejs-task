
import { useEffect, useState } from "react";
import API from "../api";
import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await API.get("/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <AddProductForm refreshProducts={fetchProducts} />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
