export default function ProductCard({ product }: {
  product: Product;
}) {
  return (
    <div className="product-card">
      <section className="product-card__title">
        <p>{product.title}</p>
      </section>
      <section className="product-card__img">
        <img src={product.image} alt={product.title} />
      </section>
      <section className="product-card__desc">
        <dl>
          <dt>Description</dt>
          <dd>{product.description}</dd>
          <dt>Price</dt>
          <dd>{product.price}</dd>
          <dt>Rating</dt>
          <dd>{product.rating.rate} ({product.rating.count} votes)</dd>
        </dl>
      </section>
    </div>
  );
}