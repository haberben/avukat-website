import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Users, Home, ShieldAlert, BookOpen, Briefcase, Handshake, Building, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  desc: string;
  icon: (className: string) => React.ReactNode;
  details: string[];
}

const servicesData: Service[] = [
  { 
    id: 1, 
    title: 'Ceza Hukuku', 
    desc: 'Soruşturma ve kovuşturma aşamalarında profesyonel ceza müdafaa ve savunma hizmetleri.', 
    icon: (className) => <Scale className={className} />,
    details: [
      'Ağır Ceza ve Asliye Ceza Mahkemelerinde sanık müdafiliği ve müşteki vekilliği.',
      'Soruşturma aşamasında savcılık ve kolluk (karakol) sorgularında refakat ve hazır bulunma.',
      'Tutuklama ve adli kontrol kararlarına karşı hukuki itirazların yapılması.',
      'Yargıtay ve İstinaf (Bölge Adliye Mahkemesi) kanun yolları başvuru süreçlerinin takibi.'
    ]
  },
  { 
    id: 2, 
    title: 'Boşanma Hukuku', 
    desc: 'Anlaşmalı ve çekişmeli boşanma, nafaka, velayet ve mal paylaşımı davalarında titiz temsil.', 
    icon: (className) => <Users className={className} />,
    details: [
      'Anlaşmalı boşanma protokolünün hazırlanması ve tek celsede boşanmanın gerçekleştirilmesi.',
      'Çekişmeli boşanma davalarının takibi, tazminat ve nafaka taleplerinin yönetilmesi.',
      'Çocukların velayeti, kişisel ilişki kurulması ve velayetin değiştirilmesi davaları.',
      'Evlilik birliği içerisinde edinilen malların tasfiyesi ve mal paylaşımı davaları.'
    ]
  },
  { 
    id: 3, 
    title: 'Gayrimenkul Hukuku', 
    desc: 'Tapu iptal, tescil, ortaklığın giderilmesi ve kentsel dönüşüm süreçlerinde hukuki güvenlik.', 
    icon: (className) => <Home className={className} />,
    details: [
      'Tapu iptali ve tescil davaları, muris muvazaası (mirastan mal kaçırma) uyuşmazlıkları.',
      'Ortaklığın giderilmesi (İzale-i Şüyu) davaları yoluyla gayrimenkul paylaşımı.',
      'Kentsel dönüşüm süreci hukuki danışmanlığı ve inşaat sözleşmelerinin denetimi.',
      'Kamulaştırma ve kamulaştırmasız el atma davalarında hak takibi.'
    ]
  },
  { 
    id: 4, 
    title: 'Tazminat Davaları', 
    desc: 'İş kazaları, trafik kazaları veya tıbbi malpraktis kaynaklı bedeni ve maddi zararların tazmini.', 
    icon: (className) => <ShieldAlert className={className} />,
    details: [
      'Ölümlü ve yaralamalı trafik kazalarından doğan maddi ve manevi tazminat talepleri.',
      'İş kazaları neticesinde işverene karşı açılacak tazminat ve destekten yoksun kalma davaları.',
      'Tıbbi malpraktis (doktor ve hastane hataları) kaynaklı tazminat uyuşmazlıkları.',
      'Haksız fiil ve kişilik haklarına saldırı nedeniyle açılacak manevi tazminat süreçleri.'
    ]
  },
  { 
    id: 5, 
    title: 'Miras Hukuku', 
    desc: 'Vasiyetname düzenlenmesi, mirasın reddi, tenkis ve veraset ilamı işlemlerinde uzman destek.', 
    icon: (className) => <BookOpen className={className} />,
    details: [
      'Mirasçılık belgesi (Veraset İlamı) alınması ve intikal işlemlerinin yürütülmesi.',
      'Vasiyetname, miras sözleşmesi ve ölünceye kadar bakma sözleşmelerinin hazırlanması.',
      'Saklı pay ihlali nedeniyle açılacak Tenkis ve Muris Muvazaası davaları.',
      'Mirasın reddi (Redd-i Miras) davaları ve tereke tespit süreçlerinin takibi.'
    ]
  },
  { 
    id: 6, 
    title: 'İş Hukuku', 
    desc: 'İşçi-işveren uyuşmazlıkları, işe iade ve kıdem-ihbar tazminatı davalarında kesin çözümler.', 
    icon: (className) => <Briefcase className={className} />,
    details: [
      'Kıdem tazminatı, ihbar tazminatı ve fazla mesai alacağı davaları.',
      'İş sözleşmesinin haksız feshine karşı İşe İade davalarının açılması ve takibi.',
      'Mobbing (işyerinde psikolojik taciz) nedeniyle hak talepleri ve tazminatlar.',
      'İş sözleşmelerinin yasal mevzuata uygun şekilde hazırlanması ve revizyonu.'
    ]
  },
  { 
    id: 7, 
    title: 'Arabuluculuk', 
    desc: 'Dava yoluna gitmeden, uyuşmazlıkların hızlı, ekonomik ve barışçıl yollarla çözümü.', 
    icon: (className) => <Handshake className={className} />,
    details: [
      'İş hukuku, ticari hukuk ve tüketici uyuşmazlıklarında zorunlu arabuluculuk süreci temsilciliği.',
      'İhtiyari arabuluculuk yoluyla davaların aylar sürmeden günler içinde çözülmesi.',
      'Arabuluculuk anlaşma belgelerinin hukuki geçerliliğinin ve icra edilebilirliğinin denetimi.',
      'Tarafların menfaat dengesini gözeten müzakerelerin yürütülmesi.'
    ]
  },
  { 
    id: 8, 
    title: 'Kira Hukuku', 
    desc: 'Kira tespit, tahliye davaları ve kira sözleşmelerinin profesyonel bir şekilde hazırlanması.', 
    icon: (className) => <Building className={className} />,
    details: [
      'Tahliye taahhütnamesinin geçerlilik analizi ve tahliye takibi/davası süreçleri.',
      'Kira bedelinin tespiti (kira artırım) ve kira uyarlama (indirim/artış) davaları.',
      'İhtiyaç nedeniyle, iki haklı ihtar nedeniyle veya tadilat nedeniyle tahliye davaları.',
      'Kira sözleşmelerinin ileride yaşanabilecek uyuşmazlıkları önleyecek şekilde hazırlanması.'
    ]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section id="hizmetler" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="mb-16 md:flex justify-between items-end border-b border-slate-100 pb-8">
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="w-8 h-[2px] bg-burgundy-light"></div>
              <span className="text-burgundy-light uppercase tracking-widest text-sm font-bold">Faaliyet Alanları</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-slate-900"
            >
              Uzmanlık Alanlarımız
            </motion.h2>
          </div>
          <p className="hidden md:block text-slate-500 max-w-sm text-right font-light text-sm leading-relaxed">
            Avukat Enes Yıldırım, hukuki sorunlarınızın her aşamasında haklarınızı korumak adına uzman ekibiyle birlikte nitelikli danışmanlık sunar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service, idx) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              onClick={() => setActiveService(service)}
              className="group bg-gray-50 p-8 sm:p-10 hover:bg-burgundy-muted transition-all duration-300 border border-slate-200 hover:border-burgundy-muted rounded shadow-sm hover:shadow-2xl cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 w-14 h-14 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm group-hover:bg-burgundy-light/10 group-hover:border-burgundy-light/20 transition-all duration-300">
                  {service.icon("w-8 h-8 text-burgundy-light group-hover:text-silver transition-colors duration-300")}
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">
                  {service.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-silver transition-colors duration-300">
                <span>Detayları İncele</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Modal Overlay */}
      <AnimatePresence>
        {activeService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100"
            >
              {/* Modal Header */}
              <div className="bg-burgundy-dark px-6 sm:px-8 py-6 text-white flex justify-between items-center relative border-b border-silver/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-burgundy-light/20 flex items-center justify-center">
                    {activeService.icon("w-6 h-6 text-silver")}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                      {activeService.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-silver uppercase tracking-wider font-semibold">Uzmanlık Detayları</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveService(null)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  aria-label="Kapat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-slate-600 text-base leading-relaxed font-light italic border-l-2 border-burgundy-light pl-4">
                  "{activeService.desc}"
                </p>

                <div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Verdiğimiz Hizmetler</h4>
                  <ul className="space-y-3.5">
                    {activeService.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-light leading-relaxed">
                        <ShieldCheck className="w-5 h-5 text-burgundy-light flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-slate-50 px-6 sm:px-8 py-5 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="text-xs text-slate-500 text-center sm:text-left font-light">
                  Bu alanda hukuki yardıma ihtiyacınız mı var?
                </span>
                <a 
                  href="#iletisim"
                  onClick={() => setActiveService(null)}
                  className="w-full sm:w-auto px-6 py-3 bg-burgundy-dark text-white rounded text-center text-xs font-bold uppercase tracking-widest hover:bg-burgundy-light transition-colors duration-300"
                >
                  Hemen Danışın
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
