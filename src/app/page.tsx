import Hero from "./sections/hero/hero";
import Iban from "./sections/iban/Iban";
import Place from "./sections/place/Place";
import Break from "./components/Break/Break";
import Thanks from "./sections/thanks/Thanks";
import Where2 from "./sections/where2/Where2";
import RingsSvg from "./components/Svgs/Rings";
import Confirm from "./sections/confirm/Confirm";
import Receiving from "./sections/receiving/Receiving";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Where2 />
      {/*  <Invitation /> */}
      {/*  <Church /> */}
      <Place />
      <Receiving />
      <Break isOrange="true">
        <RingsSvg stroke="#ff8c69"></RingsSvg>
      </Break>
      <Confirm />
      <Iban />
      <Thanks />
    </main>
  );
}
