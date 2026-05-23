import { useState, useEffect } from 'react';
import { Menu, X, Scale, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSite } from '../context/SiteContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { menus, changeCategoryAndScroll } = useSite();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 left-0 z-50 transition-all duration-300">
      
      {/* Premium Top Bar (Burgundy & Silver themed) */}
      <div className="hidden lg:block bg-burgundy-dark/95 text-silver-dark border-b border-white/5 py-2.5 text-xs">
        <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+905455619465" className="flex items-center gap-2 hover:text-silver transition-colors">
              <Phone className="w-3.5 h-3.5 text-silver" />
              <span>0545 561 94 65</span>
            </a>
            <a href="mailto:av.enessyildirim@gmail.com" className="flex items-center gap-2 hover:text-silver transition-colors">
              <Mail className="w-3.5 h-3.5 text-silver" />
              <span>av.enessyildirim@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-silver-dark">
            <MapPin className="w-3.5 h-3.5 text-silver" />
            <span>Bayrampaşa, İstanbul</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-burgundy-muted/95 backdrop-blur-md shadow-lg border-white/10 py-3 md:py-4'
            : 'bg-burgundy-dark/85 backdrop-blur-sm border-white/5 py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center">
          
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-2.5 md:gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-burgundy-light to-burgundy flex items-center justify-center shadow-md shadow-burgundy-light/20 group-hover:scale-105 transition-transform duration-300">
              <Scale className="text-silver w-5.5 h-5.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-wide text-white leading-tight">
                AVUKAT ENES YILDIRIM
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-silver-dark font-bold">
                İstanbul Barosu • Hukuki Danışmanlık
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {menus.map((link) => {
              if (link.subMenus && link.subMenus.length > 0) {
                return (
                  <div key={link.id} className="relative py-1 group cursor-pointer">
                    <span className="text-xs uppercase tracking-widest font-bold text-silver-dark group-hover:text-silver transition-colors duration-300 flex items-center gap-1">
                      {link.name}
                      <svg className="w-3.5 h-3.5 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded bg-burgundy-dark/95 backdrop-blur-md border border-white/10 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {link.subMenus.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => changeCategoryAndScroll(sub.categoryName)}
                          className="w-full text-left px-4 py-2.5 text-[10px] text-silver-dark hover:text-white hover:bg-white/5 transition-colors font-bold uppercase tracking-wider block"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-xs uppercase tracking-widest font-bold text-silver-dark hover:text-silver transition-colors duration-300 relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-silver group-hover:w-full transition-all duration-300"></span>
                </a>
              );
            })}
            <a
              href="#iletisim"
              className="px-6 py-3 bg-gradient-to-r from-silver to-silver-dark text-burgundy-dark hover:shadow-[0_4px_20px_rgba(209,213,219,0.25)] hover:scale-[1.02] transition-all duration-300 text-xs font-bold uppercase tracking-widest rounded"
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
            {isMenuOpen ? <X className="w-6 h-6 text-silver" /> : <Menu className="w-6 h-6" />}
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
              className="lg:hidden absolute top-full left-0 w-full bg-burgundy-dark border-b border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
                {menus.map((link) => {
                  if (link.subMenus && link.subMenus.length > 0) {
                    return (
                      <div key={link.id} className="flex flex-col py-1 border-b border-white/5">
                        <span className="text-sm font-bold uppercase tracking-widest text-silver py-2">
                          {link.name}
                        </span>
                        <div className="pl-4 space-y-1 pb-2">
                          {link.subMenus.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => {
                                setIsMenuOpen(false);
                                changeCategoryAndScroll(sub.categoryName);
                              }}
                              className="w-full text-left py-2.5 text-xs font-bold uppercase tracking-wider text-silver-dark hover:text-white transition-colors block"
                            >
                              • {sub.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm font-bold uppercase tracking-widest text-silver hover:text-silver-bright transition-colors py-3 border-b border-white/5"
                    >
                      {link.name}
                    </a>
                  );
                })}
                
                {/* Mobile Quick Info */}
                <div className="pt-6 space-y-4 text-xs text-silver-dark">
                  <a href="tel:+905455619465" className="flex items-center gap-3 py-2 text-silver hover:text-silver-bright transition-colors">
                    <Phone className="w-4 h-4 text-silver" />
                    <span>0545 561 94 65</span>
                  </a>
                  <a href="mailto:av.enessyildirim@gmail.com" className="flex items-center gap-3 py-2 text-silver hover:text-silver-bright transition-colors">
                    <Mail className="w-4 h-4 text-silver" />
                    <span className="break-all">av.enessyildirim@gmail.com</span>
                  </a>
                  <div className="flex items-start gap-3 py-2">
                    <MapPin className="w-4 h-4 text-silver flex-shrink-0 mt-0.5" />
                    <span>Yıldırım Mh. Zafer Cd. No:71B Bayrampaşa/İstanbul</span>
                  </div>
                </div>

                <a
                  href="#iletisim"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center py-4 bg-gradient-to-r from-silver to-silver-dark text-burgundy-dark text-sm font-bold uppercase tracking-widest rounded shadow-lg shadow-silver/10"
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
