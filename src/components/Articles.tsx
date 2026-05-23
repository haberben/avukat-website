import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, X, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  keywords: string[];
  image?: string;
}

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { articles, selectedCategory, setSelectedCategory } = useSite();
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ['Hepsi', ...Array.from(new Set(articles.map((art) => art.category)))];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'Hepsi' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="yayinlar" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy-light/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy-dark/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Title Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-burgundy-light"></div>
            <span className="text-burgundy-light uppercase tracking-widest text-sm font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Hukuki Bilgi Bankası
            </span>
            <div className="w-8 h-[2px] bg-burgundy-light"></div>
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
                    ? 'bg-burgundy-muted text-white shadow-lg border border-burgundy-muted'
                    : 'bg-gray-50 text-slate-600 hover:bg-gray-150 border border-slate-200'
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
              className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 pl-10 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-burgundy-light focus:bg-white focus:ring-1 focus:ring-burgundy-light text-sm transition-all"
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
                  className="bg-white rounded-lg overflow-hidden border border-slate-150 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {article.image && (
                    <div className="w-full h-48 overflow-hidden border-b border-slate-100 flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                    </div>
                  )}
                  <div className="p-8 flex-grow">
                    {/* Category Label */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-burgundy-light/10 text-burgundy-light text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-light">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 group-hover:text-burgundy-light transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-slate-600 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Article Keywords */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {article.keywords.slice(0, 3).map((keyword, kIdx) => (
                        <span key={kIdx} className="text-[10px] text-slate-400 bg-slate-50 px-2 py-0.5 rounded font-light border border-slate-100">
                          #{keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More Footer Button */}
                  <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 mt-auto flex justify-between items-center group-hover:bg-burgundy-muted group-hover:border-burgundy-muted transition-colors duration-300">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                      Makaleyi Oku
                    </span>
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-900 border border-slate-200 group-hover:bg-burgundy-light group-hover:text-white group-hover:border-burgundy-light transition-all duration-300 shadow-sm"
                      aria-label={`${article.title} makalesini okuyun`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full text-center py-16 bg-white border border-slate-150 rounded-lg shadow-sm">
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
                  <span className="bg-burgundy-light/10 text-burgundy-light text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded">
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
                    <User className="w-4 h-4 text-burgundy-light" />
                    <span className="font-semibold">Av. Enes Yıldırım</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-burgundy-light sm:hidden" />
                    <span className="sm:hidden">{activeArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-burgundy-light" />
                    <span>{activeArticle.readTime}</span>
                  </div>
                </div>

                {/* Dynamic Image in Modal */}
                {activeArticle.image && (
                  <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 border border-slate-100 shadow-sm flex-shrink-0">
                    <img
                      src={activeArticle.image}
                      alt={activeArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Article Contents */}
                <div className="space-y-6 text-slate-700 leading-relaxed font-light text-base md:text-lg">
                  {activeArticle.content.map((paragraph, index) => {
                    if (paragraph.includes('\n')) {
                      const lines = paragraph.split('\n');
                      return (
                        <div key={index} className="space-y-4">
                          <h4 className="text-lg font-bold text-slate-900 mt-6 font-serif flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-burgundy-light rounded-full inline-block"></span>
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

                {/* Article Footer Keywords */}
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
                  className="px-6 py-3 bg-burgundy-dark text-white rounded text-sm font-bold uppercase tracking-wider hover:bg-burgundy-light transition-colors duration-300 inline-block text-center shadow-lg"
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
