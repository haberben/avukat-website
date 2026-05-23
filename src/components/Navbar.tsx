import { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';

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
    { name: 'Hizmetlerimiz', href: '#hizmetler' },
    { name: 'Hakkımızda', href: '#hakkimda' },
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-4' : 'bg-white border-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <Scale className="text-gold w-8 h-8" />
          <div className="flex flex-col">
             <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-slate-900 leading-none">
              Av. Enes Yıldırım
             </span>
             <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1 font-semibold">İstanbul Barosu</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold uppercase tracking-wide text-slate-600 hover:text-gold transition-colors duration-300">
              {link.name}
            </a>
          ))}
          <a href="#iletisim" className="px-7 py-3 bg-slate-900 text-white hover:bg-gold hover:text-white transition-all duration-300 text-sm font-semibold uppercase tracking-wider">
            Danışmanlık Alın
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
               <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-base font-semibold uppercase tracking-wide text-slate-800 hover:text-gold transition-colors py-4 border-b border-gray-50">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
