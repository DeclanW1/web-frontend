
// Text on left side of the page
export default function LeftText() {
  return (
    <div className="lg:col-span-6">
      <h2 className="font-sans text-4xl font-extrabold leading-tight sm:text-5xl">
        We’re{" "}
        <span
          className="inline-block"
          style={{
            WebkitTextStrokeWidth: 2,
            WebkitTextStrokeColor: "white",
            color: "transparent",
          }}>
          your
        </span>{" "}
        IT Services
        <br className="hidden sm:block" /> problem solvers
      </h2>

      <p className="font-mono mt-6 max-w-none">
        Recognising your frustrations with your print environment, IT
        services, document management &amp; communications and finding.
      </p>

      <p className="font-mono mt-8">Get in touch today!</p>
    </div>
  );
}
