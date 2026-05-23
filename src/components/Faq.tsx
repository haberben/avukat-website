import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // wait, it's 'framer-motion', let me write it correctly
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Bayrampaşa'da Avukatlık ve Hukuki Danışmanlık hizmeti nasıl alınır?",
    answer: "Avukat Enes Yıldırım Hukuk Bürosu, İstanbul Bayrampaşa Yıldırım Mahallesi Zafer Caddesi No:71B adresindeki ofisinde müvekkillerine yüz yüze ve online danışmanlık hizmeti sunmaktadır. Hukuki destek, dava takibi ve randevu talepleriniz için web sitemizdeki iletişim formunu doldurabilir, telefon numaramızı arayabilir veya sağ alttaki yüzen butonu kullanarak doğrudan WhatsApp üzerinden bizimle iletişime geçebilirsiniz."
  },
  {
    question: "Kira tahliye davası ne kadar sürer ve tahliye taahhütnamesinin önemi nedir?",
    answer: "Kira tahliye davası, mahkemelerin iş yoğunluğuna ve tahliye sebebine bağlı olarak ortalama 6 ay ile 1.5 yıl arasında sürmektedir. Ancak, kiralananın tesliminden sonra imzalanmış yasal ve geçerli bir 'Tahliye Taahhütnamesi' mevcut ise, süreç icra takibi veya sulh hukuk davası yoluyla çok daha hızlı ve pratik şekilde neticelendirilir. Kira tespiti, tahliye ve kira sözleşmesi uyuşmazlıklarında hak kaybı yaşamamak adına bir gayrimenkul ve kira avukatıyla çalışmanız önemle tavsiye edilir."
  },
  {
    question: "Anlaşmalı boşanma davası tek celsede biter mi ve şartları nelerdir?",
    answer: "Evet, anlaşmalı boşanma davaları tüm şartlar sağlandığında genellikle tek celsede ve 1-2 ay gibi kısa bir sürede sonuçlanır. Anlaşmalı boşanma için evlilik birliğinin en az 1 (bir) yıl sürmüş olması, eşlerin boşanma hususunda ortak irade göstermesi ve velayet, nafaka, tazminatlar ile mal paylaşımı konularını kapsayan profesyonel bir 'Anlaşmalı Boşanma Protokolü' imzalayarak hakim huzurunda bunu bizzat beyan etmesi zorunludur."
  },
  {
    question: "Kıdem ve ihbar tazminatı hakları nelerdir, arabuluculuk süreci zorunlu mudur?",
    answer: "İş sözleşmesi işveren tarafından haksız olarak feshedilen veya kendisi haklı nedenle (SGK primlerinin eksik yatırılması, maaş gecikmesi, mobbing vb.) sözleşmeyi fesheden işçi, en az 1 yıllık çalışması varsa kıdem tazminatı talep edebilir. İhbar süresine uyulmadan yapılan fesihlerde ise ihbar tazminatı hakkı doğar. İş hukuku uyuşmazlıklarında (tazminat, fazla mesai, izin ücretleri) dava açmadan önce yasalar gereği arabuluculuk sürecine başvurulması zorunludur."
  },
  {
    question: "Ceza davalarında (Ağır Ceza / Asliye Ceza) avukat tutmak neden önemlidir?",
    answer: "Türk hukuk sisteminde bazı özel durumlar (savunmanın zorunlu olduğu alt sınırı yüksek suçlar, yaş küçüklüğü vb.) dışında ceza davasında avukat tutmak zorunlu değildir. Ancak ceza hukuku, hürriyeti bağlayıcı (hapis cezası) sonuçlar doğuran son derece kritik bir alan olduğu için, kolluk ve savcılık ifadesinden başlayarak mahkeme aşamalarına kadar savunmanın bir ceza avukatı vasıtasıyla profesyonelce yapılması, telafisi imkansız hak kayıplarını engellemek adına hayati önem taşır."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-burgundy-light/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* Title Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-burgundy-light"></div>
            <span className="text-burgundy-light uppercase tracking-widest text-sm font-bold flex items-center gap-2">
              <HelpCircle className="w-4 h-4" /> Merak Edilenler
            </span>
            <div className="w-8 h-[2px] bg-burgundy-light"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
            Hukuki süreçlerinizde en sık karşılaşılan sorulara verdiğimiz hızlı ve açıklayıcı yanıtlar.
          </p>
        </div>

        {/* Collapsible FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-gray-50 border border-slate-200 rounded overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* FAQ Header (Touch target 48px) */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 focus:outline-none select-none text-slate-900 hover:text-burgundy-light transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg leading-snug">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 text-slate-500 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-burgundy-light" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* FAQ Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base font-light leading-relaxed border-t border-slate-150">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;
