import CategoriesPage from "../pages/CategoriesPage.js";
import CategoryPage from "../pages/CategoryPage.jsx";
import HomePage from "../pages/HomePage.js";

const pages = {
  HOME_PAGE: {
    isUrl: (url: string) => url === "/",
    title: "Home",
    component: HomePage
  },
  CATEGORY_PAGE: {
    isUrl: (url: string) => !!url.match(/^\/categories\/.+$/),
    title: "?",
    component: CategoryPage
  },
  CATEGORIES_PAGE: {
    isUrl: (url: string) => url === "/categories",
    title: "Categories",
    component: CategoriesPage
  },
} as Readonly<Record<string, Page>>;

export default pages;