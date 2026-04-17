import { Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 -z-0">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-burger.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up text-center lg:text-left">
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

            <p className="mt-6 text-lg text-zinc-100 max-w-xl leading-relaxed mx-auto lg:mx-0 drop-shadow-md">
              Ropogós szélű smash burgerek, felhőpuha fluffy palacsinták,
              kézműves hozzávalókból. Szombathely új kedvenc helye — gyere be,
              vagy rendelj telefonon.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
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

            <div className="mt-10 flex items-center gap-6 text-sm text-zinc-200 justify-center lg:justify-start">
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

          <div className="relative fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 brand-gradient rounded-[3rem] rotate-6 opacity-20 blur-2xl" />
              <div className="relative bg-white rounded-[3rem] shadow-2xl shadow-pink/20 overflow-hidden border border-pink/10">
                <div className="relative aspect-square">
                  <img
                    src="/smuffys-logo.jpg"
                    alt="Smuffy's Pub"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center py-4 bg-gradient-to-t from-white via-white/95 to-transparent">
                  <div className="text-2xl font-bold tracking-tight">
                    <span className="text-black">Sm</span>
                    <span className="brand-text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                      uffy&apos;s
                    </span>
                  </div>
                  <div className="text-xs tracking-[0.3em] uppercase text-zinc-500 mt-1">
                    Pub
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider rotate-12 shadow-xl">
                NEW!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
