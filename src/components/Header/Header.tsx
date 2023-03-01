import Link from "../Link/Link.jsx";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <section className="header__top">
        <h1>Web Shop</h1>
      </section>
      <section className="header__bottom">
        <nav>
          <ul>
            <li>
              <Link url="/">Home</Link>
            </li>
            <li>
              <Link url="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}