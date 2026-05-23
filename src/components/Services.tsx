import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Users, Home, ShieldAlert, BookOpen, Briefcase, Handshake, Building, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface Service {
  id: string;
  title: string;
  desc: string;
  iconName?: string;
  image?: string;
  details: string[];
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Scale,
  Users,
  Home,
  ShieldAlert,
  BookOpen,
  Briefcase,
  Handshake,
  Building
};

const renderServiceIcon = (srv: Service, className: string) => {
  if (srv.image) {
    return <img src={srv.image} alt={srv.title} className="w-full h-full object-cover" />;
  }
  const IconComponent = srv.iconName && iconMap[srv.iconName] ? iconMap[srv.iconName] : Scale;
  return <IconComponent className={className} />;
};

const Services = () => {
  const { services } = useSite();
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
          {services.map((service, idx) => (
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
                <div className="mb-6 w-14 h-14 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm group-hover:bg-burgundy-light/10 group-hover:border-burgundy-light/20 transition-all duration-300 overflow-hidden">
                  {renderServiceIcon(service, "w-8 h-8 text-burgundy-light group-hover:text-silver transition-colors duration-300")}
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
                  <div className="w-10 h-10 rounded-full bg-burgundy-light/20 flex items-center justify-center overflow-hidden">
                    {renderServiceIcon(activeService, "w-6 h-6 text-silver")}
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
