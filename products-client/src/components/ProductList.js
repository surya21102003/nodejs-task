
const ProductList = ({ products }) => {
  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p._id}>
            {p.name} - ₹{p.price} - {p.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
