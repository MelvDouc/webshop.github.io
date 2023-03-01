import { setOutlet } from "../../routing/navigate.js";

export default function Main() {
  return (
    <main $init={setOutlet}></main>
  );
}