import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    text: "Kira tahliye ve sözleşme uyuşmazlığı davamızda Enes Bey'in engin mevzuat bilgisi ve sunduğu pratik çözümler sayesinde süreci çok hızlı ve lehimize tamamladık. Bayrampaşa'da danışabileceğiniz en profesyonel avukat.",
    author: "Ahmet Hakan K.",
    role: "Mülk Sahibi"
  },
  {
    text: "Boşanma ve mal paylaşımı sürecimde Enes Bey her detayla titizlikle ilgilendi. İhtiyacım olan psikolojik ve hukuki desteği fazlasıyla hissettirdi. Haklarımı tam anlamıyla koruduğu için kendisine minnettarım.",
    author: "Zeynep S.",
    role: "Danışan"
  },
  {
    text: "İş kazası sonrası kıdem, ihbar ve tazminat haklarımı alma sürecimde kendisiyle çalıştık. Dava öncesinde arabuluculuk aşamasında bile sergilediği kararlılık ve bilgisiyle haklarımızı tam olarak teslim aldı.",
    author: "Mustafa Y.",
    role: "Çalışan"
  },
  {
    text: "Kat karşılığı inşaat sözleşmesi ve kentsel dönüşüm uyuşmazlığımızda, gayrimenkul hukukundaki yetkinliği ile tüm risklerimizi ortadan kaldırdı. Sözleşmeyi en ince ayrıntısına kadar revize etti.",
    author: "Mehmet Emin B.",
    role: "İş İnsanı / Müteahhit"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="yorumlar" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      
      {/* Background visual element */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-slate-50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* Title Section */}
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
            Müvekkillerimizin Yorumları
          </motion.h2>
          <p className="text-slate-500 font-light text-sm sm:text-base">
            Bizimle çalışan ve davalarını başarıyla yürüttüğümüz müvekkillerimizin gerçek deneyimleri.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12 md:px-16 min-h-[380px] sm:min-h-[320px] flex items-center">
          
          <Quote className="w-20 h-20 text-gold/10 absolute -top-4 left-0 md:left-6 z-0" />
          
          <div className="w-full relative overflow-hidden py-4 z-10">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="bg-slate-50 p-8 sm:p-12 rounded border border-slate-150 shadow-sm relative"
              >
                {/* 5 Stars rating */}
                <div className="flex gap-1 mb-6 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 font-serif italic text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                  "{reviews[activeIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-gold/40">
                    <span className="text-white font-bold font-serif text-lg">
                      {reviews[activeIndex].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm sm:text-base">
                      {reviews[activeIndex].author}
                    </h4>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                      {reviews[activeIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons (Sized for mobile touch targets) */}
          <div className="flex justify-center sm:justify-between items-center mt-8 sm:mt-0 gap-6 sm:gap-0 sm:absolute sm:inset-x-0 sm:top-1/2 sm:-translate-y-1/2 z-20">
            <button
              onClick={prevTestimonial}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow hover:bg-gold hover:text-white hover:border-gold active:scale-95 transition-all flex items-center justify-center text-slate-700"
              aria-label="Önceki Yorum"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow hover:bg-gold hover:text-white hover:border-gold active:scale-95 transition-all flex items-center justify-center text-slate-700"
              aria-label="Sonraki Yorum"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`w-3.5 h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'bg-gold w-6' : 'bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Yorum ${idx + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
