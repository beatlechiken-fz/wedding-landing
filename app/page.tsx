import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import EventInfo from "./components/EventInfo";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-light text-primary">
      <Hero />
      <Gallery />
      <div className="flex w-full bg-[#e2e5de]">
        <EventInfo />
      </div>
      <Quotes />
      <Footer />
    </main>
  );
}
