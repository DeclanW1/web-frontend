
// Section with white background where testimonal image is
export default function TopBand() {
  return (
    <div className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-24">
        <div className="flex items-start justify-between gap-8">
          {/* Title */}
          <p className=" max-w-sm font-sans font-bold text-[24px] leading-tight text-black">
            Don’t just take our word for it…
          </p>
          
          {/* Link to case study */}
          <a
            href=""
            className="ml-auto font-mono text-[12px] font-medium text-black underline underline-offset-4">
            View all case studies
          </a>
        </div>
      </div>
    </div>
  );
}
