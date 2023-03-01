import ProductCard from "../components/ProductCard.jsx";
import apiService from "../services/api.service.js";

export default async function CategoryPage(url: string) {
  const categoryName = url.replace("/categories/", "");
  document.title = document.title.replace("?", categoryName);
  const products = (await apiService.getProductsInCategory(categoryName)) ?? [];

  return (
    <div className="category-page">
      <ul>
        {products.map((product) => (
          <li>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}