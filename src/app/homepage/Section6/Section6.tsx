import Background from "./Background";
import LeftText from "./LeftText";
import ContactForm from "./ContactForm";
import InfoRow from "./InfoRow";
import FooterBar from "./FooterBar";

export default function Section6() {
  return (
    <Background>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <LeftText />
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
        <InfoRow />
      </div>
      <FooterBar />
    </Background>
  );
}
