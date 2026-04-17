import { Sparkles, Heart, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Friss, kézműves hozzávalók",
    desc: "Minden hozzávaló naponta frissen érkezik, a húst helyben daráljuk, a palacsintatésztát rendelésre keverjük.",
  },
  {
    icon: Heart,
    title: "Szenvedéllyel készítjük",
    desc: "Szeretjük amit csinálunk, és ez meglátszik minden tányéron. Nem gyártunk — főzünk.",
  },
  {
    icon: Clock,
    title: "Gyors kiszolgálás",
    desc: "Smash burgereink pár perc alatt készülnek — vidd el, vagy fogyaszd helyben kényelmesen.",
  },
  {
    icon: Users,
    title: "Családias hangulat",
    desc: "Baráti csapatnak, randira, családi ebédre vagy csak egy gyors falatra — nálunk mindig otthon érzed magad.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 text-pink-dark text-xs font-semibold uppercase tracking-wider mb-4">
              Rólunk
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Igazi smash, <br />
              <span className="brand-text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                felhőpuha
              </span>{" "}
              palacsinta
            </h2>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              A Smuffy&apos;s Pub Szombathelyen egy olyan hely, ahol a
              klasszikus american smash burger és a trendi japán stílusú fluffy
              palacsinta találkozik. Nálunk minden kézzel készül: a húst helyben
              daráljuk, a tésztát rendelésre keverjük, a szószokat saját
              recept alapján készítjük.
            </p>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              Hozd a barátaidat, a családod vagy csak magadat — garantáljuk,
              hogy megéri az utat.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-gradient-to-br from-white to-pink-50/40 border border-zinc-100 rounded-3xl p-6 hover:border-pink/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center mb-4 shadow-lg shadow-pink/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-black mb-2">{f.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
