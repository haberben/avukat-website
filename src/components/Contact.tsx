import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="iletisim" className="py-24 bg-slate-50 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-5 gap-0 bg-white shadow-xl overflow-hidden rounded-sm border border-gray-100">
          
          {/* Contact Info (Dark Navy Side) */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-slate-900 text-white p-12 lg:p-16 relative overflow-hidden"
          >
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-slate-800 rounded-full opacity-50"></div>
            
            <h2 className="text-3xl font-serif font-bold mb-2">İletişim Bilgileri</h2>
            <p className="text-slate-400 mb-12 font-light text-sm">Problemleriniz için hukuki sürecinizi bugün başlatın.</p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-bold mb-1">Adres</h4>
                  <p className="text-slate-300 font-light text-sm leading-relaxed">Mecidiyeköy Trump AVM<br/>Şişli / İstanbul</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-bold mb-1">Telefon</h4>
                  <a href="tel:+905455619465" className="text-slate-300 font-light text-sm hover:text-gold transition-colors">0545 561 94 65</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-bold mb-1">E-posta</h4>
                  <a href="mailto:info@avukatenesyildirim.com" className="text-slate-300 font-light text-sm break-all hover:text-gold transition-colors">info@avukatenesyildirim.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Clock className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-bold mb-1">Çalışma Saatleri</h4>
                  <p className="text-slate-300 font-light text-sm">Hafta içi: 09:00 - 18:00<br/>Cumartesi: Randevulu Görüşme</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (White Side) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-3 p-12 lg:p-16 bg-white"
          >
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-8">Mesaj Gönderin</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">Ad Soyad</label>
                  <input type="text" className="w-full bg-slate-50 border border-gray-200 text-slate-900 px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="Tam adınız" />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">Telefon</label>
                  <input type="tel" className="w-full bg-slate-50 border border-gray-200 text-slate-900 px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="05XX XXX XX XX" />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">E-posta</label>
                <input type="email" className="w-full bg-slate-50 border border-gray-200 text-slate-900 px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="ornek@email.com" />
              </div>

              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">Konu & Mesajınız</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-gray-200 text-slate-900 px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-y" placeholder="Hukuki probleminizi kısaca özetleyin..."></textarea>
              </div>

              <button type="button" className="inline-block bg-slate-900 text-white font-bold py-4 px-10 hover:bg-gold transition-colors duration-300 uppercase tracking-widest text-sm">
                Mesajı İlet
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
