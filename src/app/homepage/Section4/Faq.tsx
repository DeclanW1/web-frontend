
// FAQ questions
export default function Faq() {
  const questions = [
    "Do you offer 24hr support?",
    "Do you sell Xerox printers?",
    "Can I upgrade my support package?",
    "How quickly can you deploy a solution?",
    "What industries do you specialise in?",
    "Can you integrate with our current systems?",
    "Do you provide on-site training?",
    "What SLAs do you offer?",
    "How do we get started?",
  ];

  return (
    <section>
      {/* FAQ title */}
      <h3 className="pl-5 text-white text-2xl font-extrabold">FAQ’s</h3>

      {/* FAQ Question */}
      <div className="mt-5 border-t border-b border-white/10 divide-y divide-white/10">
        {questions.map((q, idx) => (
          <button
            key={idx}
            type="button"
            className="flex w-full items-center justify-between gap-4 pl-5 pr-5 py-4 text-left text-white cursor-pointer">
            <span className="text-sm sm:text-base">{q}</span>
            <span className="inline-block text-white">
              +
            </span>
          </button>
        ))}
      </div>

      <a
        href=""
        className="pl-5 mt-4 inline-block text-sm font-medium text-neutral-300 underline underline-offset-4">
        View all FAQs
      </a>
    </section>
  );
}
