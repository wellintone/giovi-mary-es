import Break from "./components/Break/Break";
import RingsSvg from "./components/Svgs/Rings";
import Church from "./sections/church/Church";
import Confirm from "./sections/confirm/Confirm";
import Hero from "./sections/hero/hero";
import Iban from "./sections/iban/Iban";
import Invitation from "./sections/invitation/Invitation";
import Place from "./sections/place/Place";
import Receiving from "./sections/receiving/Receiving";
import Thanks from "./sections/thanks/Thanks";
import Where from "./sections/where/Where";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Where />
      <Invitation />
      <Church />
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
