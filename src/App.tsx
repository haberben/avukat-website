import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Articles from './components/Articles';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdminPanel from './components/AdminPanel';
import { useSite } from './context/SiteContext';
import { Lock } from 'lucide-react';

function App() {
  const { adminLoggedIn } = useSite();
  const [isAdminView, setIsAdminView] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setIsAdminView(window.location.hash === '#admin');
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);
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

  // Structured Q&A data for Google FAQPage Rich Results and AI Generative Engine Search
  const faqSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Bayrampaşa'da Avukatlık ve Hukuki Danışmanlık hizmeti nasıl alınır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avukat Enes Yıldırım Hukuk Bürosu, İstanbul Bayrampaşa Yıldırım Mahallesi Zafer Caddesi No:71B adresindeki ofisinde müvekkillerine yüz yüze ve online danışmanlık hizmeti sunmaktadır. Hukuki destek, dava takibi ve randevu talepleriniz için web sitemizdeki iletişim formunu doldurabilir, telefon numaramızı arayabilir veya sağ alttaki yüzen butonu kullanarak doğrudan WhatsApp üzerinden bizimle iletişime geçebilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "Kira tahliye davası ne kadar sürer ve tahliye taahhütnamesinin önemi nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kira tahliye davası, mahkemelerin iş yoğunluğuna ve tahliye sebebine bağlı olarak ortalama 6 ay ile 1.5 yıl arasında sürmektedir. Ancak, kiralananın tesliminden sonra imzalanmış yasal ve geçerli bir 'Tahliye Taahhütnamesi' mevcut ise, süreç icra takibi veya sulh hukuk davası yoluyla çok daha hızlı ve pratik şekilde neticelendirilir."
        }
      },
      {
        "@type": "Question",
        "name": "Anlaşmalı boşanma davası tek celsede biter mi ve şartları nelerdir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, anlaşmalı boşanma davaları tüm şartlar sağlandığında genellikle tek celsede ve 1-2 ay gibi kısa bir sürede sonuçlanır. Anlaşmalı boşanma için evlilik birliğinin en az 1 (bir) yıl sürmüş olması, eşlerin boşanma hususunda ortak irade göstermesi ve velayet, nafaka, tazminatlar ile mal paylaşımı konularını kapsayan profesyonel bir 'Anlaşmalı Boşanma Protokolü' imzalayarak hakim huzurunda bunu bizzat beyan etmesi zorunludur."
        }
      },
      {
        "@type": "Question",
        "name": "Kıdem ve ihbar tazminatı hakları nelerdir, arabuluculuk süreci zorunlu mudur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İş sözleşmesi işveren tarafından haksız olarak feshedilen veya kendisi haklı nedenle (SGK primlerinin eksik yatırılması, maaş gecikmesi, mobbing vb.) sözleşmeyi fesheden işçi, en az 1 yıllık çalışması varsa kıdem tazminatı talep edebilir. İhbar süresine uyulmadan yapılan fesihlerde ise ihbar tazminatı hakkı doğar. İş hukuku uyuşmazlıklarında dava açmadan önce arabuluculuk sürecine başvurulması zorunludur."
        }
      },
      {
        "@type": "Question",
        "name": "Ceza davalarında (Ağır Ceza / Asliye Ceza) avukat tutmak neden önemlidir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Türk hukuk sisteminde avukat tutmak zorunlu olmasa da, hürriyeti bağlayıcı (hapis cezası) sonuçlar doğuran son derece kritik bir alan olduğu için, kolluk ve savcılık ifadesinden başlayarak mahkeme aşamalarına kadar savunmanın bir ceza avukatı vasıtasıyla profesyonelce yapılması, telafisi imkansız hak kayıplarını engellemek adına hayati önem taşır."
        }
      }
    ]
  };

  if (isAdminView) {
    return <AdminPanel />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-silver selection:text-burgundy-dark font-sans">
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
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaMarkup)}
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
        <Faq />
        <Contact />
      </main>
      
      {/* Footer Details */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Floating Admin Button for Quick Access */}
      {adminLoggedIn && (
        <a
          href="#admin"
          className="fixed bottom-6 left-6 z-50 p-4 bg-burgundy hover:bg-burgundy-light text-white rounded-full shadow-2xl hover:scale-105 transition-all border border-white/10 flex items-center justify-center group"
          title="Yönetim Paneline Git"
        >
          <Lock className="w-5 h-5 text-silver" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out text-xs uppercase tracking-wider font-bold whitespace-nowrap">
            Yönetim Paneli
          </span>
        </a>
      )}
    </div>
  )

}

export default App;
