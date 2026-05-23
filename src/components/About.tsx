import { motion } from 'framer-motion';

const stats = [
  { value: '5+', label: 'Yıllık Deneyim' },
  { value: '500+', label: 'Mutlu Müvekkil' },
  { value: '%95', label: 'Başarı Oranı' },
  { value: '7/24', label: 'Hukuki Destek' }
];

const About = () => {
  return (
    <section id="hakkimda" className="py-24 bg-slate-50 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Elegant Background Frame */}
            <div className="absolute inset-0 border-2 border-gold translate-x-6 translate-y-6 -z-10 bg-white"></div>
            <img 
              src="/enes.jpg" 
              alt="Av. Enes Yıldırım" 
              className="w-full object-cover aspect-[4/5] shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-gold"></div>
              <span className="text-gold uppercase tracking-widest text-sm font-bold">Kurucu Avukat</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Av. Enes Yıldırım
            </h2>
            
            <h3 className="text-xl text-slate-600 mb-8 font-serif italic">
              "Adaletin tesisi, yalnızca kanunları bilmekle değil, insanı anlamakla mümkündür."
            </h3>
            
            <div className="space-y-5 text-slate-600 leading-relaxed font-light">
              <p>
                Marmara Üniversitesi Hukuk Fakültesi mezunu olarak İstanbul Barosu üyesiyim. Müvekkillerime hukuki süreçlerde tam şeffaflık, güvenilirlik ve stratejik çözüm odaklı profesyonel avukatlık hizmetleri sunuyorum.
              </p>
              <p>
                Boşanma, ceza, gayrimenkul ve ticaret hukuku alanlarındaki bilgi birikimimle, haklarınızı en üst düzeyde korumak adına modern, analitik ve sonuç odaklı hukuki stratejiler geliştiriyorum. Sürekli değişen mevzuatı ve Yargıtay kararlarını yakından takip ederek, davalarınıza güncel ve sağlam bir zemin hazırlıyorum.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-gray-200">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-slate-900 mb-1 font-serif">{stat.value}</div>
                  <div className="text-xs text-slate-500 tracking-wider uppercase font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <a href="#iletisim" className="text-sm font-bold uppercase tracking-wider text-slate-900 hover:text-gold transition-colors inline-flex items-center gap-2 group">
                İletişime Geçin 
                <span className="w-6 h-[1px] bg-slate-900 group-hover:bg-gold transition-colors"></span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
