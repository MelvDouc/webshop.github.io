export default function ProductCard({ product }: {
  product: Product;
}) {
  return (
    <div className="product-card">
      <section className="product-card__top">
        <article className="img-container">
          <img src={product.image} alt={product.title} />
        </article>
      </section>
      <section className="product-card__bottom">
        <article className="title">
          <p>{product.title}</p>
        </article>
        <article className="details">
          <div className="details-description">
            <p>{shortDescription(product.description)}</p>
          </div>
          <div className="details-price">
            {product.price}
          </div>
          <div className="details-rating">
            <div>{product.rating.rate} ({product.rating.count} votes)</div>
          </div>
        </article>
      </section>
    </div>
  );
}

function shortDescription(desc: string, addDots = false): string {
  if (desc.length <= 150 - 3)
    return (addDots) ? `${desc}...` : desc;

  return shortDescription(desc.slice(0, desc.lastIndexOf(" ")), true);
}