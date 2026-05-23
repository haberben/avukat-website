import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
  {
    text: "Boşanma sürecimde Enes Bey her detayı titizlikle takip etti ve haklarımı en iyi şekilde korudu. Profesyonel yaklaşımı ve samimiyetiyle zor bir süreci çok daha kolay atlattım.",
    author: "Ayşe K."
  },
  {
    text: "İş kazası sonrası tazminat davamda hukuki bilgisi ve keskin stratejileri sayesinde hakkımı kısa sürede aldım. Süreç boyunca beni her aşamada şeffafça bilgilendirdi.",
    author: "Mehmet Y."
  },
  {
    text: "Gayrimenkul alım-satım sürecinde yaşadığımız sorunları kendisinin profesyonel ve çözüm odaklı yaklaşımıyla çözdük. Kesinlikle çalışmaktan memnun kalacağınız bir isim.",
    author: "Zeynep S."
  }
];

const Testimonials = () => {
  return (
    <section id="yorumlar" className="py-24 bg-white border-t border-gray-100 relative">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="w-8 h-[2px] bg-gold"></div>
             <span className="text-gold uppercase tracking-widest text-sm font-bold">Referanslar</span>
             <div className="w-8 h-[2px] bg-gold"></div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6"
          >
            Müvekkil Yorumları
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-slate-50 p-10 relative border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-gold absolute top-8 right-8 opacity-40" />
              <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed font-serif text-lg">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border-2 border-gold/40">
                  <span className="text-white font-bold font-serif">{review.author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold">{review.author}</h4>
                  <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold inline-block"></span> Danışan
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
