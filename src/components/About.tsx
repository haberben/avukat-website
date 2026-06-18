import { motion } from 'framer-motion';
import { Phone, BookOpen, Clock, Award, HeartHandshake, Scale, Users, Building } from 'lucide-react';
import { useSite } from '../context/SiteContext';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Clock': return <Clock className="w-5 h-5 text-burgundy-light" />;
    case 'Award': return <Award className="w-5 h-5 text-burgundy-light" />;
    case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-burgundy-light" />;
    case 'Scale': return <Scale className="w-5 h-5 text-burgundy-light" />;
    case 'Users': return <Users className="w-5 h-5 text-burgundy-light" />;
    case 'Building': return <Building className="w-5 h-5 text-burgundy-light" />;
    default: return <Award className="w-5 h-5 text-burgundy-light" />;
  }
};

const About = () => {
  const { officeInfo } = useSite();

  const defaultStats = [
    { id: 'stat-1', value: '5+', label: 'Yıllık Deneyim', iconName: 'Clock', visible: true },
    { id: 'stat-2', value: '500+', label: 'Çözülen Dosya', iconName: 'Award', visible: true },
    { id: 'stat-3', value: '%96', label: 'Başarı Oranı', iconName: 'Award', visible: true },
    { id: 'stat-4', value: '7/24', label: 'Hukuki Danışma', iconName: 'HeartHandshake', visible: true }
  ];

  const rawStats = officeInfo.aboutStats !== undefined
    ? officeInfo.aboutStats
    : defaultStats;

  const stats = rawStats
    .filter(stat => stat.visible !== false)
    .map(stat => ({
      value: stat.value,
      label: stat.label,
      icon: getIconComponent(stat.iconName)
    }));

  if (!officeInfo.aboutShowImage) {
    // Simple Contact Mode
    return (
      <section id="hakkimda" className="py-24 bg-gray-50 border-t border-slate-100 relative overflow-hidden flex items-center justify-center">
        {/* Decorative background shapes */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-burgundy-light/3 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto bg-white border border-slate-150 p-8 md:p-12 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-burgundy-light/10 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-burgundy-light" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-4">
              {officeInfo.aboutTitle}
            </h2>
            <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed mb-6">
              {officeInfo.aboutDesc}
            </p>
            <a
              href={`tel:${officeInfo.aboutPhone.replace(/\D/g, '')}`}
              className="inline-block px-8 py-4 bg-gradient-to-r from-burgundy-light to-burgundy text-white text-base font-bold uppercase tracking-widest rounded shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
            >
              {officeInfo.aboutPhone}
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  // Full Biography Mode
  return (
    <section id="hakkimda" className="py-24 bg-gray-50 border-t border-slate-100 relative overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-burgundy-light/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo Column (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant Background Frame (Burgundy accent outline) */}
            <div className="absolute inset-0 border-2 border-burgundy-light translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 lg:translate-x-6 lg:translate-y-6 -z-10 bg-white rounded shadow-sm"></div>
            
            <div className="relative group overflow-hidden rounded border border-slate-200 shadow-lg">
              <img 
                src={officeInfo.aboutImage || "/enes.jpg"} 
                alt={officeInfo.aboutTitle} 
                className="w-full object-cover aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/60 to-transparent"></div>
              
              {/* Mini Info Overlay */}
              {officeInfo.aboutFaculty && (
                <div className="absolute bottom-4 left-4 right-4 bg-burgundy-dark/95 border border-silver/20 backdrop-blur-md px-4 py-3 rounded text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-silver" />
                  <span className="text-xs font-serif font-bold uppercase tracking-wider">{officeInfo.aboutFaculty}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Text Content Column (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-burgundy-light"></div>
              <span className="text-burgundy-light uppercase tracking-widest text-sm font-bold">Kurucu Avukat</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              {officeInfo.aboutTitle}
            </h2>
            
            <h3 className="text-lg sm:text-xl text-slate-700 mb-8 font-serif italic border-l-2 border-burgundy-light pl-4">
              "{officeInfo.aboutDesc}"
            </h3>
            
            <div className="space-y-5 text-slate-600 leading-relaxed font-light text-sm sm:text-base">
              {officeInfo.aboutDetails.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Stats Cards */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-250">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-4 rounded border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="mb-2 w-9 h-9 rounded-full bg-burgundy-light/5 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-bold text-slate-900 font-serif leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-12 self-start">
              <a 
                href="#iletisim" 
                className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-burgundy-light transition-colors inline-flex items-center gap-3 group focus:outline-none"
              >
                <span>Hukuki Destek Talep Edin</span>
                <span className="w-10 h-[1.5px] bg-slate-900 group-hover:bg-burgundy-light transition-colors group-hover:translate-x-1.5 duration-300"></span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;


