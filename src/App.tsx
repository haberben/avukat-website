import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900">
      <Helmet>
        <title>Avukat Enes Yıldırım | İstanbul Barosu - Hukuki Danışmanlık</title>
        <meta name="description" content="Avukat Enes Yıldırım. Profesyonel hukuki danışmanlık ve avukatlık hizmetleri. Ceza, Boşanma, Gayrimenkul, İş ve Miras Hukuku." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App;
