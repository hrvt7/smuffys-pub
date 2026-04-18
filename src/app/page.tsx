import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Prices from "@/components/Prices";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { CartProvider } from "@/context/CartContext";

export default function Home() {
  return (
    <CartProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <Menu />
        <About />
        <Prices />
        <Hours />
        <Contact />
      </main>
      <Footer />
      <Cart />
    </CartProvider>
  );
}
