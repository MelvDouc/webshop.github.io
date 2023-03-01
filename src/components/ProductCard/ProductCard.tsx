export default function ProductCard({ product }: {
  product: Product;
}) {
  return (
    <div>
      <h2>{product.title}</h2>
      <div>{product.category}</div>
      <div>{product.description}</div>
      <div>
        <img src={product.image} alt={product.title} style={{
          maxWidth: "50px"
        }} />
      </div>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} votes)</p>
    </div>
  );
}