import { useState, useEffect } from 'react';
import { Menu, X, Scale, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#anasayfa' },
    { name: 'Uzmanlıklar', href: '#hizmetler' },
    { name: 'Hakkımızda', href: '#hakkimda' },
    { name: 'Bilgi Bankası', href: '#yayinlar' },
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50 transition-all duration-300">
      
      {/* Premium Top Bar (Hidden on Mobile/Tablet to save space, shown on Large Screens) */}
      <div className="hidden lg:block bg-slate-950 text-slate-300 border-b border-white/5 py-2.5 text-xs">
        <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+905455619465" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>0545 561 94 65</span>
            </a>
            <a href="mailto:info@avukatenesyildirim.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>info@avukatenesyildirim.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>Bayrampaşa, İstanbul</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-white/10 py-3 md:py-4'
            : 'bg-slate-950/80 backdrop-blur-sm border-white/5 py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center">
          
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-2.5 md:gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-md shadow-gold/10 group-hover:scale-105 transition-transform duration-300">
              <Scale className="text-slate-950 w-5.5 h-5.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-wide text-white leading-tight">
                AVUKAT ENES YILDIRIM
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                İstanbul Barosu • Hukuki Danışmanlık
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-bold text-slate-300 hover:text-gold transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#iletisim"
              className="px-6 py-3 bg-gradient-to-r from-gold via-gold-dark to-gold text-slate-950 hover:shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:scale-[1.02] transition-all duration-300 text-xs font-bold uppercase tracking-widest rounded"
            >
              Danışmanlık Alın
            </a>
          </div>

          {/* Mobile & Tablet Toggle Menu Button */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile & Tablet Full Screen Overlay Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-gold transition-colors py-3 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Mobile Quick Info */}
                <div className="pt-6 space-y-4 text-xs text-slate-400">
                  <a href="tel:+905455619465" className="flex items-center gap-3 py-2 text-slate-300 hover:text-gold transition-colors">
                    <Phone className="w-4 h-4 text-gold" />
                    <span>0545 561 94 65</span>
                  </a>
                  <a href="mailto:info@avukatenesyildirim.com" className="flex items-center gap-3 py-2 text-slate-300 hover:text-gold transition-colors">
                    <Mail className="w-4 h-4 text-gold" />
                    <span className="break-all">info@avukatenesyildirim.com</span>
                  </a>
                  <div className="flex items-start gap-3 py-2">
                    <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Yıldırım Mh. Zafer Cd. No:71B Bayrampaşa/İstanbul</span>
                  </div>
                </div>

                <a
                  href="#iletisim"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center py-4 bg-gradient-to-r from-gold to-gold-dark text-slate-950 text-sm font-bold uppercase tracking-widest rounded shadow-lg shadow-gold/10"
                >
                  Danışmanlık Alın
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
