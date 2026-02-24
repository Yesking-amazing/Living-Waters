import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Hero />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
