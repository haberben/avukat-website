import { motion } from 'framer-motion';
import { Scale, Users, Home, ShieldAlert, BookOpen, Briefcase, Handshake, Building } from 'lucide-react';

const services = [
  { id: 1, title: 'Ceza Hukuku', desc: 'Soruşturma ve kovuşturma aşamalarında profesyonel ceza müdafaa ve müdahillik hizmetleri.', icon: <Scale className="w-8 h-8 text-gold" /> },
  { id: 2, title: 'Boşanma Hukuku', desc: 'Anlaşmalı ve çekişmeli boşanma, nafaka, velayet ve mal paylaşımı davalarında titiz temsil.', icon: <Users className="w-8 h-8 text-gold" /> },
  { id: 3, title: 'Gayrimenkul Hukuku', desc: 'Tapu iptal, tescil ve kentsel dönüşüm süreçlerinde hukuki güvenlik sağlayan danışmanlık.', icon: <Home className="w-8 h-8 text-gold" /> },
  { id: 4, title: 'Tazminat Davaları', desc: 'İş kazaları veya tıbbi malpraktis kaynaklı bedeni ve maddi zararların tazmini.', icon: <ShieldAlert className="w-8 h-8 text-gold" /> },
  { id: 5, title: 'Miras Hukuku', desc: 'Vasiyetname düzenlenmesi, mirasın reddi ve tenkis davalarında uzman destek.', icon: <BookOpen className="w-8 h-8 text-gold" /> },
  { id: 6, title: 'İş Hukuku', desc: 'İşçi-işveren uyuşmazlıkları, işe iade ve kıdem tazminatı davalarında kesin çözümler.', icon: <Briefcase className="w-8 h-8 text-gold" /> },
  { id: 7, title: 'Arabuluculuk', desc: 'Dava yoluna gitmeden, uyuşmazlıkların hızlı ve etkin bir şekilde barışçıl yollarla çözümü.', icon: <Handshake className="w-8 h-8 text-gold" /> },
  { id: 8, title: 'Kira Hukuku', desc: 'Kira tespit, tahliye davaları ve kira sözleşmelerinin profesyonel bir şekilde hazırlanması.', icon: <Building className="w-8 h-8 text-gold" /> }
];

const Services = () => {
  return (
    <section id="hizmetler" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="mb-16 md:flex justify-between items-end border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-gold"></div>
              <span className="text-gold uppercase tracking-widest text-sm font-bold">Faaliyet Alanları</span>
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
          <p className="hidden md:block text-slate-500 max-w-sm text-right font-light">
            Müvekkillerimizin hukuki haklarını güvence altına alarak, en doğru ve etkin stratejileri geliştiriyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-slate-50 p-10 hover:bg-white hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
