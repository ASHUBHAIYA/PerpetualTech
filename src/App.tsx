import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import Deployments from '@/components/Deployments';
import TechStack from '@/components/TechStack';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Deployments />
        <TechStack />
        <Process />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
