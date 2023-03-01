import { setOutlet } from "../routing/navigate.js";

export default function Main() {
  return (
    <main>
      <div className="main__router-outlet" $init={setOutlet}></div>
    </main>
  );
}