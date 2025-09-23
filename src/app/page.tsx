import Section1 from "./homepage/Section1/Section1";
import Section2 from "./homepage/Section2/Section2";
import Section3 from "./homepage/Section3/Section3";
import Section4 from "./homepage/Section4/Section4";
import Section5 from "./homepage/Section5/Section5";
import Section6 from "./homepage/Section6/Section6";

import Reveal from "./components/motion/Reveal";

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Reveal><Section3 /></Reveal>
      <Reveal><Section4 /></Reveal>
      <Reveal><Section5 /></Reveal>
      <Reveal><Section6 /></Reveal>
    </>
  );
}

