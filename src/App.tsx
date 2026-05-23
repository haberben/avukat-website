import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Articles from './components/Articles';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  // SEO Schema markup (JSON-LD) for Google Rich Snippets (LegalService schema)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Avukat Enes Yıldırım Hukuk Bürosu",
    "image": "https://xn--avukatenesyldrm-ilccb.com/enes.jpg", 
    "@id": "https://xn--avukatenesyldrm-ilccb.com/#legalservice",
    "url": "https://xn--avukatenesyldrm-ilccb.com",
    "telephone": "+905455619465",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yıldırım Mahallesi Zafer Caddesi No:71B",
      "addressLocality": "Bayrampaşa",
      "addressRegion": "İstanbul",
      "postalCode": "34030",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.060604,
      "longitude": 28.899732
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://github.com/haberben/avukat-website"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-silver selection:text-burgundy-dark">
      <Helmet>
        {/* Basic SEO Tags */}
        <title>Avukat Enes Yıldırım | İstanbul Bayrampaşa Avukat ve Danışmanlık</title>
        <meta name="description" content="Avukat Enes Yıldırım Hukuk Bürosu. İstanbul Bayrampaşa'da Boşanma Hukuku, Kira ve Tahliye Davaları, İş ve Kıdem Tazminatı Hukuku, Ceza Hukuku alanlarında uzman hukuki destek." />
        <meta name="keywords" content="Bayrampaşa avukat, İstanbul avukat, Bayrampaşa boşanma avukatı, Bayrampaşa kira avukatı, kira tahliye davası avukatı, kıdem tazminatı avukatı, Bayrampaşa hukuk bürosu, Enes Yıldırım" />
        
        {/* Open Graph / Facebook SEO Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xn--avukatenesyldrm-ilccb.com/" />
        <meta property="og:title" content="Avukat Enes Yıldırım | Bayrampaşa Hukuki Danışmanlık" />
        <meta property="og:description" content="İstanbul Bayrampaşa'da profesyonel avukatlık hizmeti. Ceza, boşanma, gayrimenkul, iş ve kira hukuku uyuşmazlıklarında uzman çözümler." />
        <meta property="og:image" content="https://xn--avukatenesyldrm-ilccb.com/enes.jpg" />

        {/* Twitter Card SEO Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://xn--avukatenesyldrm-ilccb.com/" />
        <meta property="twitter:title" content="Avukat Enes Yıldırım | Bayrampaşa Hukuk Bürosu" />
        <meta property="twitter:description" content="İstanbul Bayrampaşa'da profesyonel avukatlık ve danışmanlık hizmeti. Ceza, aile, iş, kira ve miras davaları." />
        <meta property="twitter:image" content="https://xn--avukatenesyldrm-ilccb.com/enes.jpg" />

        {/* Structured Schema Data for Google Search Engine Optimization */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      {/* Navigation Menu */}
      <Navbar />
      
      {/* Page Sections */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Articles />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer Details */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  )
}

export default App;
