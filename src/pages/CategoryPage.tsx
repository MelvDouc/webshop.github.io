import ProductCard from "../components/ProductCard/ProductCard.jsx";
import apiService from "../services/api.service.js";

export default async function CategoryPage(url: string) {
  const categoryName = url.replace("/categories/", "");
  const products = (await apiService.getProductsInCategory(categoryName)) ?? [];

  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
}