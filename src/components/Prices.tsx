import { BookOpen } from "lucide-react";
import { categories } from "@/data/menu";

const formatHUF = (n: number) =>
  new Intl.NumberFormat("hu-HU").format(n) + " Ft";

export default function Prices() {
  return (
    <section
      id="prices"
      className="relative py-24 bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/20 text-pink-light text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Étlap & Árak
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Teljes{" "}
            <span
              className="brand-text-gradient"
              style={{ fontFamily: "var(--font-display)" }}
            >
              étlapunk
            </span>
          </h2>
          <p className="mt-4 text-zinc-300">
            Válaszd ki a kedvencedet és rendelj WhatsAppon. Az árak HUF-ban értendők.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 space-y-10">
          {categories.map((cat, idx) => (
            <div key={cat.id}>
              <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-white/10">
                <h3
                  className="text-2xl md:text-3xl font-bold brand-text-gradient"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat.title}
                </h3>
                <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold">
                  #{String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="divide-y divide-white/5">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline gap-4 py-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-semibold text-white">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] font-bold uppercase tracking-wider brand-gradient text-white px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                    <span className="shrink-0 font-bold text-pink-light tabular-nums">
                      {formatHUF(item.price)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 brand-gradient text-white px-7 py-4 rounded-full text-base font-semibold shadow-xl shadow-pink/30 hover:scale-105 transition-transform"
          >
            Rendelés indítása
          </a>
        </div>
      </div>
    </section>
  );
}
