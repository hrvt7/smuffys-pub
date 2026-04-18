const features = [
  {
    image: "/menu/burger.jpg",
    title: "Prémium alapanyagok",
    desc: "Minden hozzávalót gondosan válogatunk — friss marhahús, kézműves bun, valódi cheddar. Nálunk nincs kompromisszum a minőségben.",
  },
  {
    image: "/menu/mozzarella-sticks.jpg",
    title: "Olasz inspiráció",
    desc: "Eredeti olasz alapanyagok építik fel az ízvilágot — parmezán, mozzarella, olívaolaj, friss bazsalikom. A hagyomány találkozik az amerikai klasszikussal.",
  },
  {
    image: "/menu/krumpli.jpg",
    title: "Fatüzelésű sütés",
    desc: "A burgert valódi fatüzelésű grillen készítjük — ez adja azt a füstös, mély ízt, amit sehol máshol nem kapsz meg. Ez különböztet meg minket.",
  },
  {
    image: "/menu/oreo-shake.jpg",
    title: "Gyors kiszállítás",
    desc: "Rendelj telefonon vagy WhatsAppon — pár perc alatt elkészül, pár percen belül az asztalodnál lesz. Friss, forró, úgy ahogy kell.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 text-pink-dark text-xs font-semibold uppercase tracking-wider mb-4">
              Rólunk
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Igazi smash, <br />
              <span
                className="brand-text-gradient"
                style={{ fontFamily: "var(--font-display)" }}
              >
                felhőpuha
              </span>{" "}
              palacsinta
            </h2>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              A Smuffy&apos;s Pub Szombathelyen egy olyan hely, ahol a
              klasszikus american smash burger és a trendi japán stílusú
              fluffy palacsinta találkozik. Minden kézzel készül,
              prémium alapanyagokból, fatüzelésű grillen.
            </p>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              Hozd a barátaidat, a családod vagy csak magadat — garantáljuk,
              hogy megéri az utat.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-gradient-to-br from-white to-pink-50/40 border border-zinc-100 rounded-3xl overflow-hidden hover:border-pink/30 hover:shadow-xl hover:shadow-pink/10 transition-all"
              >
                <div className="relative aspect-square overflow-hidden bg-black">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-black mb-2 text-lg">{f.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
