import Break from "./components/Break/Break";
import RingsSvg from "./components/Svgs/Rings";
import Booking from "./sections/booking/Booking";
import Church from "./sections/church/Church";
import Confirm from "./sections/confirm/Confirm";
import Hero from "./sections/hero/hero";
import Iban from "./sections/iban/Iban";
import Invitation from "./sections/invitation/Invitation";
import Place from "./sections/place/Place";
import Receiving from "./sections/receiving/Receiving";
import Thanks from "./sections/thanks/Thanks";
import VisitValencia from "./sections/visitValencia/VisitValencia";
import Where2 from "./sections/where2/Where2";

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
      <Booking />
      <VisitValencia />
      <Thanks />
    </main>
  );
}
