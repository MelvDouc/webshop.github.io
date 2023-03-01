const API_BASE_URL = "https://fakestoreapi.com";

async function fetchFromApi<T>(path: `/${string}`, init?: RequestInit) {
  try {
    const response = await fetch(API_BASE_URL + path, init);
    const data = response.json();
    return data as T;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default {
  getProducts: () => fetchFromApi<Product[]>("/products"),
  getCategories: () => fetchFromApi<string[]>("/products/categories"),
  getProductsInCategory: (categoryName: string) => fetchFromApi<Product[]>(`/products/category/${categoryName}`)
};