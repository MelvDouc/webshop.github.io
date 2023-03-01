import { setOutlet } from "../../routing/navigate.js";
import "./Main.scss";

export default function Main() {
  return (
    <main>
      <div className="main__router-outlet" $init={setOutlet}></div>
    </main>
  );
}