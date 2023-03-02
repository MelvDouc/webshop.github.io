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
      <section className="product-card__details">
        <div className="product-card__detail">
          <p className="product-card__detail-title">Description</p>
          <p>{shortDescription(product.description)}</p>
        </div>
        <div className="product-card__detail">
          <p className="product-card__detail-title">Price</p>
          <p>{product.price}</p>
        </div>
        <div className="product-card__detail">
          <p className="product-card__detail-title">Rating</p>
          <p>{product.rating.rate} ({product.rating.count} votes)</p>
        </div>
      </section>
    </div>
  );
}

function shortDescription(desc: string, addDots = false): string {
  if (desc.length <= 150 - 3)
    return (addDots) ? `${desc}...` : desc;

  return shortDescription(desc.slice(0, desc.lastIndexOf(" ")), true);
}