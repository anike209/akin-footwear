export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-body text-xs tracking-[0.3em] text-gold uppercase">
        Step 1 — Setup Check
      </p>
      <h1 className="font-heading text-4xl md:text-6xl text-cream">
        AKIN
      </h1>
      <p className="font-body text-cream/70 max-w-sm">
        Background, cream text, brown &amp; gold accents, Playfair + Inter
        fonts — all wired. Nav, hero and real content land in Step 2.
      </p>
      <div className="flex gap-4 mt-2">
        <span className="px-4 py-2 rounded-2xl bg-brown text-cream font-body text-sm">
          Brown button
        </span>
        <span className="px-4 py-2 rounded-2xl border border-cream text-cream font-body text-sm">
          Outline button
        </span>
      </div>
    </main>
  );
}
