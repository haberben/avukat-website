import { Scale } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t-4 border-gold">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-6">
              <Scale className="text-gold w-10 h-10" />
              <div className="flex flex-col">
                 <span className="font-serif text-2xl font-bold tracking-wide text-white leading-none">
                  Av. Enes Yıldırım
                 </span>
                 <span className="text-[11px] uppercase tracking-widest text-slate-400 mt-1 font-semibold">İstanbul Barosu</span>
              </div>
            </a>
            <p className="text-slate-400 leading-relaxed font-light text-sm max-w-sm">
              Müvekkillerimize stratejik, sonuç odaklı ve profesyonel hukuki danışmanlık ile dava takibi hizmetleri sunmaktayız. Haklarınız güvence altında.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white font-serif font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-gold"></span> Menü
            </h4>
            <ul className="space-y-3 font-light text-sm uppercase tracking-wide">
              {['Ana Sayfa', 'Hizmetlerimiz', 'Hakkımızda', 'Yorumlar', 'İletişim'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '').replace('ı', 'i').replace('ş', 's').replace('ç', 'c')}`} className="text-slate-400 hover:text-gold transition-colors block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-serif font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-gold"></span> Hizmetler
            </h4>
            <ul className="space-y-3 text-slate-400 font-light text-sm">
              <li><a href="#hizmetler" className="hover:text-gold transition-colors inline-block">Ceza Hukuku</a></li>
              <li><a href="#hizmetler" className="hover:text-gold transition-colors inline-block">Boşanma & Aile Hukuku</a></li>
              <li><a href="#hizmetler" className="hover:text-gold transition-colors inline-block">Gayrimenkul Hukuku</a></li>
              <li><a href="#hizmetler" className="hover:text-gold transition-colors inline-block">Miras Hukuku</a></li>
              <li><a href="#hizmetler" className="hover:text-gold transition-colors inline-block">İş Hukuku</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-light">
          <p>© {new Date().getFullYear()} Avukat Enes Yıldırım. Tüm hakları saklıdır.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-gold transition-colors">KVKK Aydınlatma Metni</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
