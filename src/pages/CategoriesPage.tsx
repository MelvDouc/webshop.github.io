import Link from "../components/Link/Link.jsx";
import apiService from "../services/api.service.js";

export default async function CategoriesPage() {
  const categories = await apiService.getCategories() ?? [];

  return (
    <ul>
      {categories.map((categoryName) => (
        <li>
          <Link url={`/categories/${encodeURI(categoryName)}`}>{categoryName}</Link>
        </li>
      ))}
    </ul>
  );
}