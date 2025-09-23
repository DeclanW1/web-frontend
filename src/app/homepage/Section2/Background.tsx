export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-8 pt-20 pb-28">{children}</div>
    </section>
  );
}
