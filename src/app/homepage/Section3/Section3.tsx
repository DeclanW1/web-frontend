import Background from "./Background";
import ImageLeft from "./ImageLeft";
import TextRight from "./TextRight";

export default function Section3() {
  return (
    <Background>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch w-full">
        <ImageLeft />
        <TextRight />
      </div>
    </Background>
  );
}
