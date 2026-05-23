import { Scale, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-burgundy-dark pt-20 pb-10 border-t-2 border-burgundy-light relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-burgundy-light/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="w-9 h-9 rounded bg-silver/15 flex items-center justify-center text-silver group-hover:scale-105 transition-transform">
                <Scale className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide text-white leading-none">
                  AVUKAT ENES YILDIRIM
                </span>
                <span className="text-[9px] uppercase tracking-widest text-silver-dark mt-1 font-bold">İstanbul Barosu</span>
              </div>
            </a>
            <p className="text-silver-dark leading-relaxed font-light text-sm max-w-sm mb-6">
              Müvekkillerimize stratejik, sonuç odaklı ve profesyonel hukuki danışmanlık ile dava takibi hizmetleri sunmaktayız. Haklarınız bizimle güvence altında.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-serif font-bold text-base mb-6 flex items-center gap-2">
              <span className="w-4.5 h-[1.5px] bg-burgundy-light rounded-full"></span> Menü
            </h4>
            <ul className="space-y-3 font-light text-sm uppercase tracking-wider text-silver-dark">
              <li>
                <a href="#anasayfa" className="hover:text-silver transition-colors block">Ana Sayfa</a>
              </li>
              <li>
                <a href="#hizmetler" className="hover:text-silver transition-colors block">Uzmanlık Alanları</a>
              </li>
              <li>
                <a href="#hakkimda" className="hover:text-silver transition-colors block">Hakkımızda</a>
              </li>
              <li>
                <a href="#yayinlar" className="hover:text-silver transition-colors block">Bilgi Bankası</a>
              </li>
              <li>
                <a href="#yorumlar" className="hover:text-silver transition-colors block">Yorumlar</a>
              </li>
              <li>
                <a href="#iletisim" className="hover:text-silver transition-colors block">İletişim</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="md:col-span-3">
            <h4 className="text-white font-serif font-bold text-base mb-6 flex items-center gap-2">
              <span className="w-4.5 h-[1.5px] bg-burgundy-light rounded-full"></span> İletişim
            </h4>
            <ul className="space-y-4 text-silver-dark font-light text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-silver flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Yıldırım Mahallesi Zafer Caddesi No:71B Bayrampaşa/İstanbul
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-silver flex-shrink-0" />
                <a href="tel:+905455619465" className="hover:text-silver transition-colors">
                  0545 561 94 65
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-silver flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5">
                  <a href="mailto:av.enessyildirim@gmail.com" className="hover:text-silver transition-colors break-all">
                    av.enessyildirim@gmail.com
                  </a>
                  <a href="mailto:yildirimlawpartners@gmail.com" className="hover:text-silver transition-colors break-all">
                    yildirimlawpartners@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-burgundy-muted pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-silver-dark text-xs sm:text-sm font-light">
          
          <div className="text-center md:text-left">
            <p>© {currentYear} Avukat Enes Yıldırım. Tüm hakları saklıdır.</p>
            <p className="text-[10px] text-slate-500 mt-1">
              Bu sitede yer alan bilgiler Türkiye Barolar Birliği'nin meslek kurallarına uygun olarak hazırlanmıştır ve reklam amacı taşımaz.
            </p>
          </div>

          {/* Privacy Links & Scroll to Top */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a href="#" className="hover:text-silver transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-silver transition-colors">KVKK Aydınlatma Metni</a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-burgundy-muted border border-white/5 hover:border-silver hover:text-silver active:scale-95 transition-all flex items-center justify-center text-slate-400"
              aria-label="Yukarı Çık"
            >
              <ArrowUp className="w-4.5 h-4.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
