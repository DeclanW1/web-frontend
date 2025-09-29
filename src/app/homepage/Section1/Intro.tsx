import Image from "next/image";
import Background from "./Background";

// Intro section with main title, paragrpah text below and computer image
export default function Intro() {
  return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/*Layout of grid- text on the left and image on the right*/}
        <div className="relative grid gap-10 min-h-[100svh] items-center lg:grid-cols-[0.62fr_0.38fr] xl:grid-cols-[0.6fr_0.4fr] pt-20 sm:pt-24 md:pt-28">

          {/*Title + paragraph */}
          <div className="pl-4 sm:pl-6 md:pl-8 lg:pr-6 pt-0">
            <h1 className="font-sans font-bold text-white text-[48px] sm:text-[64px] lg:text-[72px] leading-[0.95] tracking-[-0.01em]">
                We make your<br /> <span className="whitespace-nowrap">IT work easy.</span>
            </h1>

            <p className="font-mono font-normal text-base text-white mt-6 leading-[1.55] tracking-[0.001em] max-w-none">
              Recognising your frustrations with your{" "}
              <span className="whitespace-nowrap">print environment,</span>
              <br className="hidden lg:block" />
              IT services, document management & communications and
              <br className="hidden lg:block" />
              finding a solution to overcome them.
            </p>
          </div>

          {/* Image on the right*/}
          <div className="flex justify-center items-center">
            <div className="relative w-[85%] h-64 md:h-96 lg:h-[28rem]">
              <Image
                src="/introimage.png"
                alt="Computer and router image"
                fill
                className="object-contain"
                sizes="(min-width:1024px) 32rem, 90vw"/>
            </div>
          </div>
        </div>
      </div>
  );
}

