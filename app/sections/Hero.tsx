export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/images/archival-book.jpg)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-32 text-center md:px-8">
        <h1 className="font-display text-[clamp(3rem,10vw,7.5rem)] leading-[0.95] tracking-tight text-white">
          Objects For Thought
        </h1>
        <p
          className="mt-8 max-w-lg text-balance text-lg leading-relaxed text-white/80 md:text-xl"
          style={{ fontFamily: "var(--font-body, sans-serif)" }}
        >
          A quiet physical notebook for better memory
        </p>
        <a
          href="#registry"
          className="mt-12 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition-colors duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black/50"
        >
          Join the Registry
        </a>
      </div>
    </section>
  );
}
