import Hero from "./sections/hero/hero";
import Iban from "./sections/iban/Iban";
import Break from "./components/Break/Break";
import Thanks from "./sections/thanks/Thanks";
import Where2 from "./sections/where2/Where2";
import RingsSvg from "./components/Svgs/Rings";
import Confirm from "./sections/confirm/Confirm";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Where2 />

      <Confirm />
      <Iban />
      <Thanks />
    </main>
  );
}
