import { Flame, Star } from "lucide-react";

type Item = {
  name: string;
  desc: string;
  price?: string;
  badge?: string;
  emoji: string;
  video?: string;
  image?: string;
};

const categories: { id: string; title: string; subtitle: string; items: Item[] }[] = [
  {
    id: "burgers",
    title: "Smash Burgerek",
    subtitle: "Ropogós szélű, forró lapon sütött marhahúsos burgerek",
    items: [
      {
        name: "Classic Smuffy",
        desc: "Dupla smash pogácsa, cheddar, saláta, paradicsom, lilahagyma, Smuffy's szósz",
        emoji: "🍔",
        badge: "Kedvenc",
        image: "/menu/classic-smuffy.jpg",
      },
      {
        name: "Bacon Blast",
        desc: "Dupla smash, dupla cheddar, ropogós bacon, karamellizált hagyma, BBQ",
        emoji: "🥓",
      },
      {
        name: "Spicy Fire",
        desc: "Smash pogácsa, pepperoni, jalapeño, chipotle mayo, csípős cheddar",
        emoji: "🌶️",
        badge: "Csípős",
      },
      {
        name: "Mushroom Swiss",
        desc: "Smash pogácsa, pirított gomba, ementáli, truffle mayo",
        emoji: "🍄",
      },
      {
        name: "Chicken Crunch",
        desc: "Rántott csirkemell, savanyú uborka, coleslaw, honey-mustard",
        emoji: "🍗",
      },
      {
        name: "Veggie Smash",
        desc: "Házi zöldségburger, grillezett padlizsán, hummusz, rukkola",
        emoji: "🥗",
      },
    ],
  },
  {
    id: "pancakes",
    title: "Fluffy Palacsinták",
    subtitle: "Felhőpuha, vastag japán stílusú palacsinták",
    items: [
      {
        name: "Berry Cloud",
        desc: "Friss málna, eper, áfonya, tejszínhab, vaníliaöntet",
        emoji: "🍓",
        badge: "Szezon",
        video: "/menu/smuffy-palacsinta.mp4",
      },
      {
        name: "Choco Dream",
        desc: "Belga csokiszósz, brownie darabok, tejszínhab, M&M's",
        emoji: "🍫",
      },
      {
        name: "Nutella Bomb",
        desc: "Nutella, banán, mogyoró, karamell, tejszínhab",
        emoji: "🍌",
      },
      {
        name: "Oreo Fluffy",
        desc: "Oreo darabok, csokiszósz, vaníliafagyi, tejszínhab",
        emoji: "🍪",
      },
      {
        name: "Classic Butter",
        desc: "Olvasztott vaj, juharszirup, porcukor",
        emoji: "🧈",
      },
      {
        name: "Tiramisu Twist",
        desc: "Mascarpone krém, kávéöntet, kakaópor, piskóta",
        emoji: "☕",
      },
    ],
  },
  {
    id: "sides",
    title: "Köretek & Snackek",
    subtitle: "Ropogós, frissen sütött kiegészítők",
    items: [
      { name: "Truffle Fries", desc: "Ropogós hasábburgonya, szarvasgombaolaj, parmezán", emoji: "🍟" },
      { name: "Classic Fries", desc: "Frissen sütött steak cut burgonya", emoji: "🥔" },
      { name: "Onion Rings", desc: "Ropogós bundázott hagymakarikák", emoji: "🧅" },
      { name: "Mozzarella Sticks", desc: "Olvadós mozzarella rudak, marinara szósz", emoji: "🧀" },
      { name: "Chicken Wings", desc: "6 db szárny — BBQ, buffalo vagy honey-mustard", emoji: "🍗" },
      { name: "Nachos Loaded", desc: "Ropogós nachos, cheddar, guacamole, salsa, sour cream", emoji: "🌽" },
    ],
  },
  {
    id: "drinks",
    title: "Italok & Shake-ek",
    subtitle: "Krémes shake-ek, üdítők és hideg csapolt sörök",
    items: [
      { name: "Oreo Shake", desc: "Vaníliafagyi, tej, Oreo, tejszínhab", emoji: "🥤", badge: "Must-try" },
      { name: "Strawberry Shake", desc: "Eper, vaníliafagyi, tej", emoji: "🍓" },
      { name: "Choco Shake", desc: "Belga csoki, vaníliafagyi, tej", emoji: "🍫" },
      { name: "Limonádé", desc: "Házi limonádé — klasszikus / eperes / málnás", emoji: "🍋" },
      { name: "Csapolt sör", desc: "Hideg magyar csapolt sör, 0.3 / 0.5L", emoji: "🍺" },
      { name: "Kávé & tea", desc: "Espresso, cappuccino, latte, tea válogatás", emoji: "☕" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 text-pink-dark text-xs font-semibold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5" />
            Menünk
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Amit <span className="brand-text-gradient" style={{ fontFamily: "var(--font-display)" }}>szeretni</span> fogsz
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Minden egyes falat kézzel készül, friss és minőségi hozzávalókból —
            ahogy egy igazi smash burger és fluffy palacsinta megérdemli.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat.id}>
              <div className="mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                  {cat.title}
                </h3>
                <p className="mt-2 text-zinc-600">{cat.subtitle}</p>
                <div className="mt-4 h-1 w-20 brand-gradient rounded-full" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item) => (
                  <article
                    key={item.name}
                    className={`group relative bg-white rounded-3xl border border-zinc-100 hover:border-pink/30 hover:shadow-xl hover:shadow-pink/10 transition-all overflow-hidden ${
                      item.video || item.image ? "" : "p-6"
                    }`}
                  >
                    {item.badge && (
                      <div className="absolute top-3 right-3 z-10 brand-gradient text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        {item.badge}
                      </div>
                    )}

                    {item.image ? (
                      <>
                        <div className="relative w-full aspect-[4/5] bg-white overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-black mb-2">
                            {item.name}
                          </h4>
                          <p className="text-sm text-zinc-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </>
                    ) : item.video ? (
                      <>
                        <div className="relative w-full aspect-video bg-white">
                          <video
                            src={item.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-black mb-2">
                            {item.name}
                          </h4>
                          <p className="text-sm text-zinc-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                          {item.emoji}
                        </div>
                        <h4 className="text-xl font-bold text-black mb-2">
                          {item.name}
                        </h4>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-600 mb-6">
            Az aktuális árakért és akciókért hívj minket vagy látogass el hozzánk!
          </p>
          <a
            href="tel:+36300718737"
            className="inline-flex items-center gap-2 brand-gradient text-white px-8 py-4 rounded-full text-base font-semibold shadow-xl shadow-pink/30 hover:scale-105 transition-transform"
          >
            Rendelj most: +36 30 071 8737
          </a>
        </div>
      </div>
    </section>
  );
}
