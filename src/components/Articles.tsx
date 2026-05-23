import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, X, Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  keywords: string[];
}

const articlesData: Article[] = [
  {
    id: 1,
    title: 'Kira Sözleşmelerinde Tahliye Taahhütnamesi ve Tahliye Davaları',
    category: 'Kira Hukuku',
    date: '12 Mayıs 2026',
    readTime: '6 dk okuma',
    summary: 'Kira hukukunda en çok uyuşmazlık yaşanan konulardan biri olan tahliye taahhütnamelerinin geçerlilik şartları, tahliye davaları ve yeni yasal düzenlemeler hakkında detaylı rehber.',
    keywords: ['kira tahliye davası', 'tahliye taahhütnamesi geçerlilik şartları', 'kiracı tahliyesi nasıl yapılır', 'Bayrampaşa kira avukatı'],
    content: [
      'Türkiye\'de son yıllarda yaşanan ekonomik gelişmeler ve gayrimenkul değerlerindeki artış, kiracı ile kiralayan (ev sahibi) arasındaki uyuşmazlıkları zirveye taşımıştır. Bu uyuşmazlıkların en önemli çözüm yollarından biri de tahliye davaları ve geçerli bir tahliye taahhütnamesinin varlığıdır. Avukat Enes Yıldırım Hukuk Bürosu olarak, kira hukukundan doğan bu hassas süreçleri profesyonel şekilde yönetmekteyiz.',
      'Tahliye Taahhütnamesinin Geçerlilik Şartları Nelerdir? \nTürk Borçlar Kanunu (TBK) kapsamında tahliye taahhütnamesinin geçerli kabul edilebilmesi için belirli şekil ve zaman kurallarına sıkı sıkıya bağlı olması gerekir. Yargıtay içtihatları doğrultusunda geçerlilik şartları şunlardır:\n1. Yazılı Şekil Şartı: Taahhüt mutlaka yazılı olmalıdır. Adi yazılı veya noter huzurunda yapılması geçerlidir ancak ispat kolaylığı açısından noterlikçe yapılması tavsiye edilir.\n2. Kiralananın Tesliminden Sonra Verilmiş Olması: En kritik unsur budur. Kira sözleşmesi imzalanırken veya imza tarihinden önce alınan tahliye taahhütnameleri, kiracının müzayede (baskı) altında olduğu kabul edilerek geçersiz sayılır. Taahhüt, kiracı eve yerleştikten ve sözleşmeden makul bir süre geçtikten sonra imzalanmalıdır.\n3. Belirli Bir Tahliye Tarihinin Bulunması: Taahhütnamede tahliyenin yapılacağı gün, ay ve yıl net olarak belirtilmelidir.',
      'Tahliye Davası ve Süresi \nGeçerli bir tahliye taahhütnamesine dayanarak kiracısını çıkarmak isteyen ev sahibi, taahhüt edilen tahliye tarihinden itibaren 1 (bir) ay içinde icra dairesine başvurarak tahliye takibi başlatmalı veya sulh hukuk mahkemesinde tahliye davası açmalıdır. Bu 1 aylık süre hak düşürücü niteliktedir; sürenin kaçırılması halinde taahhütnameye dayanarak doğrudan tahliye hakkı o dönem için kaybedilir.',
      'İhtiyaç Nedeniyle Tahliye ve Haklı İhtarlar \nSözleşme süresinin bitimi, ev sahibinin kendisinin, eşinin, altsoyunun, üstsoyunun veya kanunen bakmakla yükümlü olduğu diğer kişilerin konut veya işyeri ihtiyacı ortaya çıkarsa, TBK m. 350 uyarınca tahliye davası açılabilir. Ayrıca kiracının bir kira yılı içerisinde kirayı iki kez geciktirmesi ve bu durumun iki haklı ihtar ile belgelenmesi halinde de ev sahibi tahliye davası açma hakkı kazanır. İstanbul Bayrampaşa ve çevre ilçelerindeki kira uyuşmazlıklarında hak kaybına uğramamak adına bir gayrimenkul avukatından hukuki destek alınması hayati önem taşımaktadır.'
    ]
  },
  {
    id: 2,
    title: 'İş Hukukunda Kıdem ve İhbar Tazminatı Hakları ve Hesaplama Usulü',
    category: 'İş Hukuku',
    date: '02 Nisan 2026',
    readTime: '8 dk okuma',
    summary: 'İş sözleşmesinin feshinde çalışanların en temel güvencesi olan kıdem ve ihbar tazminatına hak kazanma koşulları, haklı fesih nedenleri ve güncel hesaplama esasları.',
    keywords: ['kıdem tazminatı nasıl alınır', 'ihbar tazminatı hesaplama', 'işe iade davası süresi', 'Bayrampaşa iş hukuku avukatı', 'İstanbul iş davası avukatı'],
    content: [
      'İşçi ve işveren arasındaki ilişkileri düzenleyen 4857 sayılı İş Kanunu, zayıf konumda olan işçiyi koruma ilkesini benimsemiştir. İş ilişkisinin sona ermesi durumunda ortaya çıkan kıdem tazminatı ve ihbar tazminatı hakları, işçinin emeğinin ve yıllar boyu verdiği hizmetin yasal güvenceleridir. Bu yazımızda, tazminat haklarının kapsamını ve uyuşmazlık durumunda yapılması gerekenleri mercek altına alıyoruz.',
      'Kıdem Tazminatına Hak Kazanma Şartları \nBir işçinin kıdem tazminatına hak kazanabilmesi için öncelikle aynı işverene bağlı işyerinde en az 1 (bir) tam yıl çalışmış olması gerekir. İkinci temel şart ise iş sözleşmesinin kanunda belirtilen tazminata hak kazandıracak şekilde sona ermiş olmasıdır. İşçinin kendi isteğiyle istifa etmesi kural olarak kıdem tazminatına hak kazandırmaz. Ancak; \n- İşçinin haklı nedenle derhal fesih yapması (Maaşın düzensiz ödenmesi, mobbing, SGK primlerinin eksik yatırılması vb.)\n- Askerlik görevi nedeniyle işten ayrılma\n- Emeklilik hakkının kazanılması\n- Kadın işçinin evlendiği tarihten itibaren 1 yıl içinde sözleşmeyi feshetmesi gibi durumlarda istifa halinde dahi kıdem tazminatı ödenmek zorundadır.',
      'İhbar Tazminatı ve Bildirim Süreleri \nİş sözleşmesini feshetmek isteyen taraf (işçi veya işveren), bunu kanunda belirlenen bildirim sürelerine uyarak karşı tarafa bildirmekle yükümlüdür. Bildirim süreleri işçinin kıdemine göre belirlenir: \n- 6 aya kadar çalışanlar için: 2 hafta \n- 6 aydan 1.5 yıla kadar çalışanlar için: 4 hafta \n- 1.5 yıldan 3 yıla kadar çalışanlar için: 6 hafta \n- 3 yıldan fazla çalışanlar için: 8 hafta. \nİşveren, bu bildirim sürelerine uymadan işçiyi derhal işten çıkarırsa, bildirim süresine ilişkin ücret tutarında ihbar tazminatı ödemekle yükümlü olur. Aynı şekilde işçi de bildirim süresine uymadan haklı bir nedeni olmaksızın işi bırakırsa işverene ihbar tazminatı ödemek zorunda kalabilir.',
      'Arabuluculuk ve Dava Süreçleri \nİş hukuku uyuşmazlıklarında (tazminatlar, fazla mesai, yıllık izin ücretleri vb.) dava açmadan önce arabulucuya başvurmak zorunlu dava şartıdır. Arabuluculuk aşamasında anlaşma sağlanamazsa, 2 hafta içinde İş Mahkemesi\'nde dava açılması gerekir. İşçilik alacakları davaları teknik ve hesaplama uzmanlığı gerektiren davalardır. Hak kaybı yaşamamak ve alacaklarınızı eksiksiz tahsil edebilmek için profesyonel bir iş hukuku avukatından destek almanız kritiktir.'
    ]
  },
  {
    id: 3,
    title: 'Anlaşmalı ve Çekişmeli Boşanma Davaları ve Protokolün Önemi',
    category: 'Aile Hukuku',
    date: '20 Mart 2026',
    readTime: '7 dk okuma',
    summary: 'Türk Medeni Kanunu uyarınca anlaşmalı ve çekişmeli boşanma davalarının hukuki süreçleri, velayet, nafaka, mal paylaşımı ve hak kayıplarını önleyecek protokol hazırlama esasları.',
    keywords: ['anlaşmalı boşanma protokolü örneği', 'boşanma davası nasıl açılır', 'çekişmeli boşanmada mal paylaşımı', 'İstanbul boşanma avukatı', 'Bayrampaşa aile mahkemesi'],
    content: [
      'Boşanma süreçleri taraflar için sadece psikolojik olarak değil, hukuki ve finansal olarak da oldukça yıpratıcı olabilmektedir. Türk Medeni Kanunu (TMK) kapsamında boşanma davaları "Anlaşmalı" ve "Çekişmeli" olmak üzere iki temel usulle yürütülür. Davanın doğru temellerde açılması ve yönetilmesi, özellikle velayet, nafaka ve mal paylaşımı konularında geleceğinizi doğrudan etkiler.',
      'Anlaşmalı Boşanma Davası Şartları \nAnlaşmalı boşanma, çekişmeli sürece göre çok daha kısa süren (genellikle tek celsede sonuçlanan) ve tarafların uzlaşarak ayrıldığı yöntemdir. Anlaşmalı boşanma davası açabilmek için şu şartların birlikte gerçekleşmesi zorunludur:\n1. Evliliğin En Az 1 Yıl Sürmüş Olması: 1 yıldan kısa süren evliliklerde anlaşmalı boşanma davası açılamaz.\n2. Eşlerin Mahkemeye Birlikte Başvurması veya Bir Eşin Açtığı Davayı Diğerinin Kabul Etmesi.\n3. Hakimin Tarafları Bizzat Dinlemesi: Avukatınız olsa dahi, anlaşmalı boşanma duruşmasında hakim karşısına çıkıp boşanma iradenizi sözlü olarak beyan etmeniz gerekir.\n4. Anlaşmalı Boşanma Protokolünün Hazırlanması: Velayet, nafaka, iştirak nafakası, mal paylaşımı, maddi ve manevi tazminat gibi tüm hususları içeren yazılı bir protokol hazırlanmalı ve hakim tarafından onaylanmalıdır.',
      'Anlaşmalı Boşanma Protokolünün Hayati Önemi \nProtokolün muğlak ifadeler barındırması veya hak kayıplarına yol açacak şekilde aceleyle hazırlanması, boşanma sonrasında yıllarca sürecek yeni uyuşmazlıklara (nafakanın artırılması, velayetin değiştirilmesi, mal kaçırma davaları vb.) yol açar. Bu nedenle, protokolün her maddesinin uzman bir boşanma avukatı tarafından titizlikle kaleme alınması büyük önem taşır.',
      'Çekişmeli Boşanma Davası ve Süreç \nEşler arasında boşanmanın mali sonuçları veya velayet gibi konularda anlaşma sağlanamadığı takdirde çekişmeli boşanma davası yoluna gidilir. Çekişmeli davalar; zina, hayata kast, pek kötü muamele, suç işleme, terk veya evlilik birliğinin temelinden sarsılması (şiddetli geçimsizlik) gibi özel ve genel boşanma sebeplerine dayandırılabilir. Çekişmeli boşanma davalarında iddiaların tanık, mesajlaşma kayıtları, otel kayıtları, banka hareketleri gibi hukuken geçerli delillerle kanıtlanması gerekir. Dava süreci 1.5 ila 3 yıl arasında sürebilmektedir.'
    ]
  }
];

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Hepsi');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ['Hepsi', 'Kira Hukuku', 'İş Hukuku', 'Aile Hukuku'];

  const filteredArticles = articlesData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'Hepsi' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="yayinlar" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Title Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-gold"></div>
            <span className="text-gold uppercase tracking-widest text-sm font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Hukuki Bilgi Bankası
            </span>
            <div className="w-8 h-[2px] bg-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Yayınlar & Hukuki Rehberler
          </h2>
          <p className="text-slate-600 font-light text-base leading-relaxed">
            Güncel yargı kararları, mevzuat değişiklikleri ve sık karşılaşılan hukuki sorunlara dair anlaşılır, bilgilendirici makalelerimiz.
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-6 rounded-lg shadow-md border border-slate-100">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10 border border-slate-900'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Makale veya anahtar kelime ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 pl-10 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-gold focus:bg-white focus:ring-1 focus:ring-gold text-sm transition-all"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
          </div>

        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, idx) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="p-8 flex-grow">
                    {/* Category Label */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gold/10 text-gold-dark text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-light">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-slate-600 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Article Keywords (SEO helper tag list) */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {article.keywords.slice(0, 3).map((keyword, kIdx) => (
                        <span key={kIdx} className="text-[10px] text-slate-400 bg-slate-50 px-2 py-0.5 rounded font-light border border-slate-100">
                          #{keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More Footer Button */}
                  <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 mt-auto flex justify-between items-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-colors duration-300">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                      Makaleyi Oku
                    </span>
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-900 border border-slate-200 group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300 shadow-sm"
                      aria-label={`${article.title} makalesini okuyun`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full text-center py-16 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-500 font-light">Aramanızla eşleşen hukuki yayın bulunamadı.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Full-Screen Article Modal Overlay */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white text-slate-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-200"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-150 px-6 md:px-10 py-5 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <span className="bg-gold/10 text-gold-dark text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded">
                    {activeArticle.category}
                  </span>
                  <span className="text-slate-400 text-xs hidden sm:inline">|</span>
                  <span className="text-slate-500 text-xs hidden sm:flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {activeArticle.date}
                  </span>
                </div>
                
                <button
                  onClick={() => setActiveArticle(null)}
                  className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  aria-label="Kapat"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="px-6 md:px-10 py-8">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-950 mb-6 leading-tight">
                  {activeArticle.title}
                </h2>

                {/* Article Info Bar */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-slate-500 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gold" />
                    <span className="font-semibold">Av. Enes Yıldırım</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold sm:hidden" />
                    <span className="sm:hidden">{activeArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>{activeArticle.readTime}</span>
                  </div>
                </div>

                {/* Article Contents */}
                <div className="space-y-6 text-slate-700 leading-relaxed font-light text-base md:text-lg">
                  {activeArticle.content.map((paragraph, index) => {
                    // Check if it has headings inside paragraphs (split by newline and make bold/headers)
                    if (paragraph.includes('\n')) {
                      const lines = paragraph.split('\n');
                      return (
                        <div key={index} className="space-y-4">
                          <h4 className="text-lg font-bold text-slate-900 mt-6 font-serif flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-gold rounded-full inline-block"></span>
                            {lines[0]}
                          </h4>
                          {lines.slice(1).map((line, lIdx) => (
                            <p key={lIdx} className="whitespace-pre-line">{line}</p>
                          ))}
                        </div>
                      );
                    }
                    return <p key={index}>{paragraph}</p>;
                  })}
                </div>

                {/* Article Footer Keywords (SEO support) */}
                <div className="mt-12 pt-6 border-t border-slate-100">
                  <h5 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Anahtar Kelimeler</h5>
                  <div className="flex flex-wrap gap-2">
                    {activeArticle.keywords.map((keyword, kIdx) => (
                      <span key={kIdx} className="text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full font-light">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="bg-slate-50 px-6 md:px-10 py-6 border-t border-slate-150 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-500 font-light text-center sm:text-left">
                  Bu makale bilgilendirme amaçlıdır. Hukuki sorununuz için doğrudan büromuzla iletişime geçebilirsiniz.
                </p>
                <a
                  href="#iletisim"
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-3 bg-slate-900 text-white rounded text-sm font-bold uppercase tracking-wider hover:bg-gold transition-colors duration-300 inline-block text-center shadow-lg"
                >
                  Ücretsiz Ön Görüşme Yapın
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Articles;
