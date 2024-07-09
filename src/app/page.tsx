import Hero from "./sections/hero/hero";
import Break from "./components/Break/Break";
import Where2 from "./sections/where2/Where2";
import RingsSvg from "./components/Svgs/Rings";
import Confirm from "./sections/confirm/Confirm";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Where2 />
    </main>
  );
}
