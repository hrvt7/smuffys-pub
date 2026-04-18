import { Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 -z-0">
        <video
          src="/hero-video-mobile.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster-mobile.jpg"
          className="absolute inset-0 w-full h-full object-cover lg:hidden"
        />
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
        {/* Bottom fade into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[var(--cream)] pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 pb-32 md:pt-40 md:pb-48 text-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-pink animate-pulse" />
            Szombathely · Étterem & Pub
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.15] text-white drop-shadow-xl">
            <span className="block">Smash Burger</span>
            <span
              className="block brand-text-gradient pb-2"
              style={{ fontFamily: "var(--font-display)", lineHeight: 1.25 }}
            >
              &amp; Fluffy
            </span>
            <span className="block">Palacsinta</span>
          </h1>

          <p className="mt-6 text-lg text-zinc-100 max-w-xl leading-relaxed mx-auto drop-shadow-md">
            Ropogós szélű smash burgerek, felhőpuha fluffy palacsinták,
            kézműves hozzávalókból. Szombathely új kedvenc helye — gyere be,
            vagy rendelj telefonon.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 brand-gradient text-white px-7 py-4 rounded-full text-base font-semibold shadow-xl shadow-pink/30 hover:shadow-pink/50 hover:scale-105 transition-all"
            >
              Menü megtekintése
            </a>
            <a
              href="tel:+36305252336"
              className="inline-flex items-center gap-2 bg-black text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-zinc-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Rendelés telefonon
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-zinc-200 justify-center">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink" />
              Szombathely
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-pink" />
              +36 30 525 2336
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
