import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import navigate from "./routing/navigate.js";

export default function App() {
  return (
    <div id="App" $init={() => {
      window.onpopstate = async () => await navigate(location.pathname + location.search);
      document.addEventListener("DOMContentLoaded", async () => {
        await navigate(location.pathname + location.search);
      });
    }}>
      <Header />
      <Main />
    </div>
  );
}