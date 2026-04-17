import { MapPin, Phone } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.26.82-.38.38-.62.75-.82 1.26-.15.39-.33.97-.38 2.04C2.71 9.5 2.7 9.85 2.7 13s.01 3.5.07 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.82 1.26.38.38.75.62 1.26.82.39.15.97.33 2.04.38 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.26-.82.38-.38.62-.75.82-1.26.15-.39.33-.97.38-2.04.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04a3.39 3.39 0 00-.82-1.26 3.39 3.39 0 00-1.26-.82c-.39-.15-.97-.33-2.04-.38C15.5 4.01 15.15 4 12 4zm0 3.07A4.93 4.93 0 1112 17a4.93 4.93 0 010-9.93zm0 8.13A3.2 3.2 0 1012 8.8a3.2 3.2 0 000 6.4zm6.28-8.33a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 text-pink-dark text-xs font-semibold uppercase tracking-wider mb-4">
            Kapcsolat
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Gyere el, vagy{" "}
            <span className="brand-text-gradient" style={{ fontFamily: "var(--font-display)" }}>
              hívj minket
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Szombathelyen várunk — foglalj asztalt, rendelj telefonon, vagy
            csak ugorj be egy gyors falatra.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <a
              href="tel:+36300718737"
              className="flex items-start gap-4 bg-white rounded-3xl p-6 border border-zinc-100 hover:border-pink/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center shrink-0 shadow-lg shadow-pink/20">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                  Telefon
                </div>
                <div className="text-2xl font-bold text-black mt-1">
                  +36 30 071 8737
                </div>
                <div className="text-sm text-zinc-600 mt-1">
                  Foglalás, rendelés, kérdések
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-white rounded-3xl p-6 border border-zinc-100">
              <div className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center shrink-0 shadow-lg shadow-pink/20">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                  Cím
                </div>
                <div className="text-lg font-bold text-black mt-1">
                  Szombathely
                </div>
                <div className="text-sm text-zinc-600 mt-1">
                  A pontos címért kérlek hívj minket vagy nézz rá a Facebook
                  oldalunkra.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-3xl p-6 border border-zinc-100">
              <div className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center shrink-0 shadow-lg shadow-pink/20">
                <FacebookIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                  Közösség
                </div>
                <div className="text-lg font-bold text-black mt-1">
                  Kövess minket!
                </div>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61576789435725"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-gradient-to-br from-pink to-pink-light text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border border-zinc-100 overflow-hidden min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21760.728!2d16.622!3d47.231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEzJzUxLjYiTiAxNsKwMzcnMTkuMiJF!5e0!3m2!1shu!2shu!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smuffy's Pub Szombathely térkép"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
