import ProductCard from "../components/ProductCard/ProductCard.jsx";
import apiService from "../services/api.service.js";

export default async function HomePage() {
  const products = (await apiService.getProducts()) ?? [];

  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
}