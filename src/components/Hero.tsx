import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="anasayfa" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop" 
          alt="Hukuk Bürosu" 
          className="w-full h-full object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-gold"></div>
            <p className="text-gold uppercase tracking-widest text-sm font-bold">Güvenilir Hukuki Danışmanlık</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-serif font-semibold text-slate-900 leading-[1.1] mb-8"
          >
            Adalete Giden Yolda <br />
            <span className="italic font-light text-slate-600">Güçlü Mimariniz.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl font-light"
          >
            Haklarınızı en yüksek standartlarda savunmak ve hukuki süreçlerinizi profesyonellikle yönetmek için İstanbul'da yanınızdayız. 
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#iletisim" className="px-8 py-4 bg-slate-900 text-white text-sm font-bold uppercase tracking-wider hover:bg-gold transition-colors duration-300">
              Ücretsiz Danışmanlık
            </a>
            <a href="#hizmetler" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 text-sm font-bold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors duration-300">
              Çalışma Alanlarımız
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
