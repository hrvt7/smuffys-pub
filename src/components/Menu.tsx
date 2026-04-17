"use client";

import { useState } from "react";
import { Flame, Star, Plus, Check } from "lucide-react";
import { useCart, formatHUF } from "@/context/CartContext";

type Item = {
  name: string;
  desc: string;
  price: number;
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
      { name: "Classic Smuffy", desc: "Dupla smash pogácsa, cheddar, saláta, paradicsom, lilahagyma, Smuffy's szósz", emoji: "🍔", badge: "Kedvenc", image: "/menu/burger.jpg", price: 2890 },
      { name: "Bacon Blast", desc: "Dupla smash, dupla cheddar, ropogós bacon, karamellizált hagyma, BBQ", emoji: "🥓", image: "/menu/burger.jpg", price: 3290 },
      { name: "Spicy Fire", desc: "Smash pogácsa, pepperoni, jalapeño, chipotle mayo, csípős cheddar", emoji: "🌶️", badge: "Csípős", image: "/menu/burger.jpg", price: 2990 },
      { name: "Mushroom Swiss", desc: "Smash pogácsa, pirított gomba, ementáli, truffle mayo", emoji: "🍄", image: "/menu/burger.jpg", price: 3190 },
      { name: "Chicken Crunch", desc: "Rántott csirkemell, savanyú uborka, coleslaw, honey-mustard", emoji: "🍗", image: "/menu/burger.jpg", price: 2790 },
      { name: "Veggie Smash", desc: "Házi zöldségburger, grillezett padlizsán, hummusz, rukkola", emoji: "🥗", image: "/menu/burger.jpg", price: 2690 },
    ],
  },
  {
    id: "pancakes",
    title: "Fluffy Palacsinták",
    subtitle: "Felhőpuha, vastag japán stílusú palacsinták",
    items: [
      { name: "Berry Cloud", desc: "Friss málna, eper, áfonya, tejszínhab, vaníliaöntet", emoji: "🍓", badge: "Szezon", image: "/menu/fluffy-pancake.jpg", price: 2690 },
      { name: "Choco Dream", desc: "Belga csokiszósz, brownie darabok, tejszínhab, M&M's", emoji: "🍫", image: "/menu/fluffy-pancake.jpg", price: 2590 },
      { name: "Nutella Bomb", desc: "Nutella, banán, mogyoró, karamell, tejszínhab", emoji: "🍌", image: "/menu/fluffy-pancake.jpg", price: 2590 },
      { name: "Oreo Fluffy", desc: "Oreo darabok, csokiszósz, vaníliafagyi, tejszínhab", emoji: "🍪", image: "/menu/fluffy-pancake.jpg", price: 2690 },
      { name: "Classic Butter", desc: "Olvasztott vaj, juharszirup, porcukor", emoji: "🧈", image: "/menu/fluffy-pancake.jpg", price: 2190 },
      { name: "Tiramisu Twist", desc: "Mascarpone krém, kávéöntet, kakaópor, piskóta", emoji: "☕", image: "/menu/fluffy-pancake.jpg", price: 2790 },
    ],
  },
  {
    id: "sides",
    title: "Köretek & Snackek",
    subtitle: "Ropogós, frissen sütött kiegészítők",
    items: [
      { name: "Truffle Fries", desc: "Ropogós hasábburgonya, szarvasgombaolaj, parmezán", emoji: "🍟", image: "/menu/krumpli.jpg", price: 1690 },
      { name: "Classic Fries", desc: "Frissen sütött steak cut burgonya", emoji: "🥔", image: "/menu/krumpli.jpg", price: 990 },
      { name: "Onion Rings", desc: "Ropogós bundázott hagymakarikák", emoji: "🧅", image: "/menu/hagyma-karika.jpg", price: 1290 },
      { name: "Mozzarella Sticks", desc: "Olvadós mozzarella rudak, marinara szósz", emoji: "🧀", image: "/menu/mozzarella-sticks.jpg", price: 1790 },
      { name: "Chicken Wings", desc: "6 db szárny — BBQ, buffalo vagy honey-mustard", emoji: "🍗", image: "/menu/chicken-wings.jpg", price: 2290 },
      { name: "Nachos Loaded", desc: "Ropogós nachos, cheddar, guacamole, salsa, sour cream", emoji: "🌽", image: "/menu/nachos.jpg", price: 1990 },
    ],
  },
  {
    id: "drinks",
    title: "Italok & Shake-ek",
    subtitle: "Krémes shake-ek, üdítők és hideg csapolt sörök",
    items: [
      { name: "Oreo Shake", desc: "Vaníliafagyi, tej, Oreo, tejszínhab", emoji: "🥤", badge: "Must-try", image: "/menu/oreo-shake.jpg", price: 1690 },
      { name: "Strawberry Shake", desc: "Eper, vaníliafagyi, tej", emoji: "🍓", image: "/menu/eper-shake.jpg", price: 1590 },
      { name: "Choco Shake", desc: "Belga csoki, vaníliafagyi, tej", emoji: "🍫", image: "/menu/choco-shake.jpg", price: 1590 },
      { name: "Limonádé", desc: "Házi limonádé — klasszikus / eperes / málnás", emoji: "🍋", image: "/menu/limonade.jpg", price: 990 },
      { name: "Csapolt sör", desc: "Hideg magyar csapolt sör, 0.3 / 0.5L", emoji: "🍺", image: "/menu/csapolt-sor.jpg", price: 690 },
      { name: "Kávé & tea", desc: "Espresso, cappuccino, latte, tea válogatás", emoji: "☕", image: "/menu/tea.jpg", price: 590 },
    ],
  },
];

function AddButton({ item, size = "md" }: { item: Item; size?: "sm" | "md" }) {
  const { add, items } = useCart();
  const inCart = items.find((i) => i.name === item.name);
  const [clicked, setClicked] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    add({ name: item.name, price: item.price, image: item.image });
    setClicked(true);
    setTimeout(() => setClicked(false), 900);
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-all shrink-0 ${
        clicked
          ? "bg-green-500 text-white"
          : "brand-gradient text-white hover:scale-105"
      } ${size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"}`}
      aria-label={`${item.name} kosárba`}
    >
      {clicked ? (
        <Check className="w-4 h-4" strokeWidth={3} />
      ) : (
        <Plus className="w-4 h-4" strokeWidth={3} />
      )}
      {clicked ? "Hozzáadva" : inCart ? `${inCart.qty} a kosárban` : "Kosárba"}
    </button>
  );
}

function MediaBlock({ item }: { item: Item }) {
  if (item.image) {
    return (
      <div className="relative w-full aspect-[4/5] bg-white overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }
  if (item.video) {
    return (
      <div className="relative w-full aspect-[4/5] bg-white">
        <video
          src={item.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }
  return (
    <div className="relative w-full aspect-[4/5] bg-zinc-50 flex items-center justify-center text-7xl">
      {item.emoji}
    </div>
  );
}

function Card({ item, mobile }: { item: Item; mobile?: boolean }) {
  return (
    <article
      className={`group relative bg-white rounded-3xl border border-zinc-100 overflow-hidden flex flex-col transition-all ${
        mobile
          ? "shadow-sm shrink-0 w-[75vw] max-w-[320px] snap-start"
          : "hover:border-pink/30 hover:shadow-xl hover:shadow-pink/10"
      }`}
    >
      {item.badge && (
        <div className="absolute top-3 right-3 z-10 brand-gradient text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
          <Star className="w-3 h-3 fill-white" />
          {item.badge}
        </div>
      )}

      <MediaBlock item={item} />

      <div className="p-5 flex-1 flex flex-col">
        <h4 className="text-lg font-bold text-black mb-1.5">{item.name}</h4>
        <p className="text-sm text-zinc-600 leading-relaxed flex-1">
          {item.desc}
        </p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="text-lg font-bold brand-text-gradient">
            {formatHUF(item.price)}
          </span>
          <AddButton item={item} size={mobile ? "sm" : "md"} />
        </div>
      </div>
    </article>
  );
}

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
            Amit{" "}
            <span
              className="brand-text-gradient"
              style={{ fontFamily: "var(--font-display)" }}
            >
              szeretni
            </span>{" "}
            fogsz
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Minden egyes falat kézzel készül, friss és minőségi hozzávalókból.
            Add kosárba a kedvenceidet, és rendelj WhatsAppon pár kattintással.
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

              {/* Mobile horizontal scroll */}
              <div className="sm:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {cat.items.map((item) => (
                  <Card key={item.name + "-m"} item={item} mobile />
                ))}
                <div className="shrink-0 w-1" aria-hidden />
              </div>

              {/* Desktop grid */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item) => (
                  <Card key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
