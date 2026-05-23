import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, HeartHandshake } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Yıllık Deneyim', icon: <Clock className="w-5 h-5 text-gold" /> },
  { value: '500+', label: 'Çözülen Dosya', icon: <Award className="w-5 h-5 text-gold" /> },
  { value: '%96', label: 'Başarı Oranı', icon: <Award className="w-5 h-5 text-gold" /> },
  { value: '7/24', label: 'Hukuki Danışma', icon: <HeartHandshake className="w-5 h-5 text-gold" /> }
];

const About = () => {
  return (
    <section id="hakkimda" className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl pointer-events-none"></div>

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
            {/* Elegant Background Frame (Mobile Safe Translates) */}
            <div className="absolute inset-0 border-2 border-gold translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 lg:translate-x-6 lg:translate-y-6 -z-10 bg-white rounded shadow-sm"></div>
            
            <div className="relative group overflow-hidden rounded border border-slate-200 shadow-lg">
              <img 
                src="/enes.jpg" 
                alt="Avukat Enes Yıldırım" 
                className="w-full object-cover aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              
              {/* Mini Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-gold/30 backdrop-blur-md px-4 py-3 rounded text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gold" />
                <span className="text-xs font-serif font-bold uppercase tracking-wider">Marmara Üni. Hukuk Fakültesi</span>
              </div>
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
              <div className="w-8 h-[2px] bg-gold"></div>
              <span className="text-gold uppercase tracking-widest text-sm font-bold">Kurucu Avukat</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Av. Enes Yıldırım
            </h2>
            
            <h3 className="text-lg sm:text-xl text-slate-700 mb-8 font-serif italic border-l-2 border-gold pl-4">
              "Adaletin tesisi, yalnızca kanunları bilmekle değil, her davaya özgü insani ve ticari dinamikleri anlamakla mümkündür."
            </h3>
            
            <div className="space-y-5 text-slate-600 leading-relaxed font-light text-sm sm:text-base">
              <p>
                Marmara Üniversitesi Hukuk Fakültesi mezunu olarak İstanbul Barosu bünyesinde kayıtlıyım. Kurmuş olduğum **Avukat Enes Yıldırım Hukuk Bürosu** çatısı altında, bireysel ve kurumsal müvekkillerime profesyonel dava takibi ile koruyucu hukuki danışmanlık hizmetleri sağlamaktayım.
              </p>
              <p>
                Çalışmalarımda dürüstlük, şeffaflık, bilgi güvenliği ve sonuç odaklılık prensiplerini esas almaktayım. Sürekli değişen mevzuatı ve Yargıtay kararlarını yakından takip ederek, davalarınıza analitik, güncel ve sağlam bir zemin hazırlamaktayım. Müvekkillerimin haklarını her aşamada en üst düzeyde korumak temel vizyonumdur.
              </p>
            </div>

            {/* Stats Cards (Fully Responsive Layout) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-4 rounded border border-slate-150 shadow-sm flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-2 w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
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
            
            <div className="mt-12 self-start">
              <a 
                href="#iletisim" 
                className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-gold transition-colors inline-flex items-center gap-3 group focus:outline-none"
              >
                <span>Hukuki Destek Talep Edin</span>
                <span className="w-10 h-[1.5px] bg-slate-900 group-hover:bg-gold transition-colors group-hover:translate-x-1.5 duration-300"></span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
