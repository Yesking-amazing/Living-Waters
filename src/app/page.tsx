import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Hero />
        <Events />
      </main>
      <Footer />
    </>
  );
}
