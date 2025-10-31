import Hero from '@/components/Hero';
import ExpandableCanvas from '@/components/ExpandableCanvas';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="cosmic-background">
      <Hero />
      <ExpandableCanvas />
      <Footer />
    </main>
  );
}

