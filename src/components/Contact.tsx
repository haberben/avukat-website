import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useSite } from '../context/SiteContext';

const Contact = () => {
  const { officeInfo } = useSite();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${officeInfo.email}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Ad Soyad": formData.name,
          "Telefon": formData.phone,
          "E-posta": formData.email,
          "Mesaj": formData.message,
          "_subject": "Avukat Enes Yıldırım Web Sitesi - Yeni İletişim Formu"
        })
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => {
          setFormSubmitted(false);
        }, 6000);
      } else {
        alert("Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyiniz.");
      }
    } catch (error) {
      console.error(error);
      alert("Bir bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="iletisim" className="py-24 bg-gray-50 border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Title Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-burgundy-light"></div>
            <span className="text-burgundy-light uppercase tracking-widest text-sm font-bold">İletişim</span>
            <div className="w-8 h-[2px] bg-burgundy-light"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base">
            Hukuki danışmanlık talepleriniz veya sorularınız için formu doldurabilir ya da doğrudan arayabilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start bg-white shadow-xl rounded overflow-hidden border border-slate-200">
          
          {/* Contact Info (Left Burgundy Side - Stacks on mobile) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-burgundy-muted text-white p-8 sm:p-12 lg:p-16 h-full flex flex-col justify-between relative overflow-hidden"
          >
            {/* Visual background circle */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-burgundy-dark rounded-full opacity-40 pointer-events-none"></div>
            
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">İletişim Bilgileri</h3>
              <p className="text-silver-dark mb-10 font-light text-xs sm:text-sm">Hukuki süreçlerinizi başlatmak ve haklarınızı korumak için buradayız.</p>

              <div className="space-y-6 sm:space-y-8 relative z-10">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="text-silver w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-base font-bold mb-1 font-sans">Ofis Adresimiz</h4>
                    <p className="text-silver-dark font-light text-xs sm:text-sm leading-relaxed">
                      {officeInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="text-silver w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-base font-bold mb-1 font-sans">Telefon Numarası</h4>
                    <a href={`tel:${officeInfo.phone.replace(/\D/g, '')}`} className="text-silver-dark font-light text-xs sm:text-sm hover:text-silver transition-colors block">
                      {officeInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="text-silver w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-base font-bold mb-1 font-sans">E-Posta Adreslerimiz</h4>
                    <a href={`mailto:${officeInfo.email}`} className="text-silver-dark font-light text-xs sm:text-sm break-all hover:text-silver transition-colors block">
                      {officeInfo.email}
                    </a>
                    {officeInfo.emailSecondary && (
                      <a href={`mailto:${officeInfo.emailSecondary}`} className="text-silver-dark font-light text-xs sm:text-sm break-all hover:text-silver transition-colors block mt-1">
                        {officeInfo.emailSecondary}
                      </a>
                    )}
                  </div>
                </div>

                {/* Clock */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="text-silver w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-base font-bold mb-1 font-sans">Çalışma Saatleri</h4>
                    <p className="text-silver-dark font-light text-xs sm:text-sm">
                      Hafta İçi: 09:00 - 18:00 <br />
                      Cumartesi: Randevulu Görüşme
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right White Side - Stacks on mobile) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7 p-8 sm:p-12 lg:p-16 bg-white"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-8">İletişim Formu</h3>
            
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Ad Soyad</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-950 px-4 py-3 rounded focus:outline-none focus:border-burgundy-light focus:bg-white focus:ring-1 focus:ring-burgundy-light text-sm transition-all" 
                        placeholder="Tam adınız" 
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Telefon</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-950 px-4 py-3 rounded focus:outline-none focus:border-burgundy-light focus:bg-white focus:ring-1 focus:ring-burgundy-light text-sm transition-all" 
                        placeholder="05XX XXX XX XX" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">E-posta</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-950 px-4 py-3 rounded focus:outline-none focus:border-burgundy-light focus:bg-white focus:ring-1 focus:ring-burgundy-light text-sm transition-all" 
                      placeholder="ornek@email.com" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Konu & Mesajınız</label>
                    <textarea 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-950 px-4 py-3 rounded focus:outline-none focus:border-burgundy-light focus:bg-white focus:ring-1 focus:ring-burgundy-light text-sm transition-all resize-y" 
                      placeholder="Hukuki uyuşmazlığınızı veya sorunuzu kısaca özetleyin..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-burgundy-dark hover:bg-burgundy-light text-white font-bold py-4 px-10 rounded transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:shadow-lg shadow-burgundy-light/10 active:scale-98 disabled:bg-slate-300 disabled:text-slate-500 disabled:pointer-events-none"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 px-6 border-2 border-dashed border-emerald-350 bg-emerald-50 rounded text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Mesajınız Başarıyla İletildi!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto font-light leading-relaxed">
                    Avukat Enes Yıldırım uyuşmazlığınızı inceleyerek en kısa sürede sizinle iletişime geçecektir. Teşekkür ederiz.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 bg-white rounded border border-slate-200 p-2 shadow-lg overflow-hidden h-72 sm:h-96 md:h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.3846665796245!2d28.89973277656606!3d41.06060417134371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab11a681c62f3%3A0xe54d6fa7c6f059cb!2zWcSxbGTEsXLEsW0sIFphZmVyIENkLiBObzogNzEsIDM0MDMwIEJheXJhbXBhxZ9hL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1716480000000!5m2!1str!2str" 
            className="w-full h-full border-none rounded"
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Avukat Enes Yıldırım Ofis Haritası"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;
