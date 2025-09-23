import Background from "./Background";
import { Stats } from "./Card";

export default function Section5() {
  return (
    <Background>
      <h2 className="font-sans text-center text-2xl sm:text-3xl font-extrabold text-black">
        A team of accredited experts <br /> that can support you
      </h2>
      <Stats />
    </Background>
  );
}
