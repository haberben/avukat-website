import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, ArrowRight, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="anasayfa" className="relative min-h-screen pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-burgundy-dark flex items-center">
      
      {/* Premium Background Graphics & Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(209,213,219,0.06),transparent_70%)]"></div>
        <div 
          className="absolute inset-0 opacity-[0.02] bg-repeat bg-center"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54 48c-2 0-3 1-3 3 0 1-1 2-2 2s-2-1-2-2c0-2-1-3-3-3s-3 1-3 3c0 1-1 2-2 2s-2-1-2-2c0-2-1-3-3-3s-3 1-3 3c0 1-1 2-2 2s-2-1-2-2c0-2-1-3-3-3s-3 1-3 3c0 1-1 2-2 2s-2-1-2-2c0-2-1-3-3-3s-3 1-3 3c0 1-1 2-2 2s-2-1-2-2c0-2-1-3-3-3s-3 1-3 3c0 1-1 2-2 2s-2-1-2-2z\' fill=\'%23ffffff\' fill-opacity=\'0.2\' fill-rules=\'evenodd\'/%3E%3C/svg%3E")' }}
        ></div>
        {/* Subtle grid lines */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Top Badge (Silver/Burgundy themed) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6 self-center lg:self-start bg-silver/10 border border-silver/20 px-4 py-1.5 rounded-full text-silver text-xs uppercase tracking-widest font-bold"
            >
              <ShieldCheck className="w-4 h-4 text-silver" />
              <span>Güvenilir, Çözüm Odaklı ve Kararlı Hukuki Temsil</span>
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1] mb-6"
            >
              Adaletin Tesisi ve <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver via-silver-light to-silver font-light italic">
                Haklarınızın Güvencesi.
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-silver-dark text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
            >
              İstanbul Bayrampaşa'da faaliyet gösteren büromuz, her hukuki uyuşmazlığa stratejik ve sonuç odaklı çözümler üreterek haklarınızı en yüksek standartta savunur.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <a 
                href="#iletisim" 
                className="px-8 py-4 bg-gradient-to-r from-silver to-silver-dark hover:shadow-[0_4px_25px_rgba(209,213,219,0.2)] text-burgundy-dark text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 rounded hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4" />
                <span>Randevu Oluşturun</span>
              </a>
              <a 
                href="#hizmetler" 
                className="px-8 py-4 bg-white/5 border border-white/10 text-white text-sm font-bold uppercase tracking-wider hover:bg-white/10 hover:border-silver transition-all duration-300 flex items-center justify-center gap-2 rounded"
              >
                <span>Çalışma Alanlarımız</span>
                <ArrowRight className="w-4 h-4 text-silver" />
              </a>
            </motion.div>

            {/* Micro details / Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 pt-8 border-t border-white/5 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-xl sm:text-2xl font-serif font-bold text-white">5+ Yıl</span>
                <span className="text-[10px] sm:text-xs text-silver-dark font-bold uppercase tracking-wider">Hukuki Tecrübe</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-xl sm:text-2xl font-serif font-bold text-white">500+</span>
                <span className="text-[10px] sm:text-xs text-silver-dark font-bold uppercase tracking-wider">Çözülen Dosya</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-xl sm:text-2xl font-serif font-bold text-white">%96</span>
                <span className="text-[10px] sm:text-xs text-silver-dark font-bold uppercase tracking-wider">Başarı Oranı</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Lawyer Photo Column (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0"
          >
            {/* Elegant Double Border Geometric Frame */}
            <div className="relative w-72 h-[360px] sm:w-80 sm:h-[400px] lg:w-full lg:max-w-sm lg:aspect-[4/5] xl:aspect-[3/4] z-10 group">
              {/* Outer decorative silver frame */}
              <div className="absolute -inset-4 border border-silver/20 rounded translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-500"></div>
              
              {/* Background solid offset shape */}
              <div className="absolute inset-0 bg-burgundy border border-white/5 rounded -z-20"></div>

              {/* The Image */}
              <div className="w-full h-full overflow-hidden border border-silver/30 rounded shadow-2xl relative">
                <img 
                  src="/enes.jpg" 
                  alt="Avukat Enes Yıldırım" 
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Image Gradient Dark Overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark via-transparent to-transparent opacity-85"></div>
                
                {/* Floating Info tag on image */}
                <div className="absolute bottom-4 left-4 right-4 bg-burgundy/90 border border-silver/30 backdrop-blur-md p-4 rounded flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-silver/10 flex items-center justify-center text-silver flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold font-serif uppercase tracking-wider">Av. Enes Yıldırım</h4>
                    <p className="text-[10px] text-silver-dark font-light">Marmara Üniversitesi Hukuk Mezunu</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background glowing orb */}
            <div className="absolute -z-10 w-72 h-72 rounded-full bg-silver/5 blur-3xl pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
