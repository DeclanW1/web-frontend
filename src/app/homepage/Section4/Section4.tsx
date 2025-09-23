import TopBand from "./TopBand";
import Testimonial from "./Testimonial";
import DarkBody from "./DarkBody";
import Insights from "./Insights";
import Faq from "./Faq";

export default function Section4() {
  return (
    <section className="relative">
      <TopBand />
      <Testimonial />
      <DarkBody>
        <div className="font-sans mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Insights />
          <Faq />
        </div>
        <div className="h-20" />
      </DarkBody>
    </section>
  );
}
