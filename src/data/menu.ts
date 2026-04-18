export type Item = {
  name: string;
  desc: string;
  price: number;
  badge?: string;
  emoji: string;
  video?: string;
  image?: string;
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  items: Item[];
};

export const categories: Category[] = [
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
