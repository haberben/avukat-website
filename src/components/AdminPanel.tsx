import React, { useState, useEffect } from 'react';
import { useSite } from '../context/SiteContext';
import { 
  Lock, FileText, Menu as MenuIcon, Settings, Trash2, Edit3, Plus, LogOut, 
  Globe, AlertCircle, FileUp, Scale, Users, Home, ShieldAlert, BookOpen, 
  Briefcase, Handshake, Building, ArrowLeft, Check, Key, HelpCircle, Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { AboutStat } from '../data/defaultData';

// Icon selections for Hukuk Alanları
const iconList = [
  { name: 'Scale', label: 'Terazi (Ceza/Genel)', icon: Scale },
  { name: 'Users', label: 'Kullanıcılar (Aile/Boşanma)', icon: Users },
  { name: 'Home', label: 'Ev (Gayrimenkul/Miras)', icon: Home },
  { name: 'ShieldAlert', label: 'Kalkan & Uyarı (Tazminat)', icon: ShieldAlert },
  { name: 'BookOpen', label: 'Açık Kitap (Miras/Genel)', icon: BookOpen },
  { name: 'Briefcase', label: 'Çanta (İş Hukuku)', icon: Briefcase },
  { name: 'Handshake', label: 'El Sıkışma (Arabuluculuk)', icon: Handshake },
  { name: 'Building', label: 'Bina (Kira/Şirketler)', icon: Building }
];

const AdminPanel: React.FC = () => {
  const {
    menus, services, articles, adminLoggedIn, login, logout,
    addMenu, updateMenu, deleteMenu,
    addService, updateService, deleteService,
    addArticle, updateArticle, deleteArticle,
    exportData, importData, changePassword,
    officeInfo, updateOfficeInfo
  } = useSite();

  // Navigation / Tab state
  const [activeTab, setActiveTab] = useState<'menus' | 'services' | 'articles' | 'office' | 'settings'>('menus');

  // Login form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Password change state
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [passMessage, setPassMessage] = useState({ text: '', type: '' });

  // Office & About settings form states
  const [officePhone, setOfficePhone] = useState('');
  const [officeEmail, setOfficeEmail] = useState('');
  const [officeEmailSecondary, setOfficeEmailSecondary] = useState('');
  const [officeAddress, setOfficeAddress] = useState('');
  const [aboutTitleState, setAboutTitleState] = useState('');
  const [aboutDescState, setAboutDescState] = useState('');
  const [aboutPhoneState, setAboutPhoneState] = useState('');
  const [aboutShowImageState, setAboutShowImageState] = useState(false);
  const [aboutImageState, setAboutImageState] = useState('');
  const [aboutFacultyState, setAboutFacultyState] = useState('');
  const [aboutDetailsStateText, setAboutDetailsStateText] = useState('');
  const [officeMessage, setOfficeMessage] = useState({ text: '', type: '' });
  
  // Custom stats state
  const [statsState, setStatsState] = useState<AboutStat[]>([]);

  // Sync officeInfo with states when loaded
  useEffect(() => {
    if (officeInfo) {
      setOfficePhone(officeInfo.phone || '');
      setOfficeEmail(officeInfo.email || '');
      setOfficeEmailSecondary(officeInfo.emailSecondary || '');
      setOfficeAddress(officeInfo.address || '');
      setAboutTitleState(officeInfo.aboutTitle || '');
      setAboutDescState(officeInfo.aboutDesc || '');
      setAboutPhoneState(officeInfo.aboutPhone || '');
      setAboutShowImageState(officeInfo.aboutShowImage || false);
      setAboutImageState(officeInfo.aboutImage || '');
      setAboutFacultyState(officeInfo.aboutFaculty || '');
      setAboutDetailsStateText((officeInfo.aboutDetails || []).join('\n\n'));
      
      const defaultStats = [
        { id: 'stat-1', value: '5+', label: 'Yıllık Deneyim', iconName: 'Clock' },
        { id: 'stat-2', value: '500+', label: 'Çözülen Dosya', iconName: 'Award' },
        { id: 'stat-3', value: '%96', label: 'Başarı Oranı', iconName: 'Award' },
        { id: 'stat-4', value: '7/24', label: 'Hukuki Danışma', iconName: 'HeartHandshake' }
      ];
      setStatsState(officeInfo.aboutStats && officeInfo.aboutStats.length > 0
        ? officeInfo.aboutStats
        : defaultStats);
    }
  }, [officeInfo]);

  const handleUpdateStatField = (index: number, field: keyof AboutStat, val: string) => {
    const newStats = [...statsState];
    newStats[index] = { ...newStats[index], [field]: val };
    setStatsState(newStats);
  };

  const handleDeleteStat = (index: number) => {
    const newStats = statsState.filter((_, idx) => idx !== index);
    setStatsState(newStats);
  };

  const handleAddStat = () => {
    const newStat: AboutStat = {
      id: `stat-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      value: 'Yeni',
      label: 'İstatistik Açıklaması',
      iconName: 'Award'
    };
    setStatsState([...statsState, newStat]);
  };

  const handleSaveOfficeInfo = (e: React.FormEvent) => {
    e.preventDefault();
    setOfficeMessage({ text: '', type: '' });

    const details = aboutDetailsStateText
      .split('\n\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    const updatedInfo = {
      phone: officePhone.trim(),
      email: officeEmail.trim(),
      emailSecondary: officeEmailSecondary.trim(),
      address: officeAddress.trim(),
      aboutTitle: aboutTitleState.trim(),
      aboutDesc: aboutDescState.trim(),
      aboutPhone: aboutPhoneState.trim(),
      aboutShowImage: aboutShowImageState,
      aboutImage: aboutImageState,
      aboutFaculty: aboutFacultyState.trim(),
      aboutDetails: details,
      aboutStats: statsState
    };

    updateOfficeInfo(updatedInfo);
    setOfficeMessage({ text: 'Büro ve Hakkımızda bilgileri başarıyla güncellendi.', type: 'success' });
    setTimeout(() => {
      setOfficeMessage({ text: '', type: '' });
    }, 4500);
  };


  // Menu form state
  const [editingMenu, setEditingMenu] = useState<string | null>(null);
  const [menuName, setMenuName] = useState('');
  const [menuHref, setMenuHref] = useState('');
  const [isSubmenuMode, setIsSubmenuMode] = useState(false);
  const [parentMenuId, setParentMenuId] = useState('');
  const [submenuCategory, setSubmenuCategory] = useState('');

  // Service form state
  const [editingService, setEditingService] = useState<string | null>(null);
  const [serviceTitle, setServiceTitle] = useState('');
  const [serviceDesc, setServiceDesc] = useState('');
  const [serviceIcon, setServiceIcon] = useState('Scale');
  const [serviceImage, setServiceImage] = useState('');
  const [serviceDetailsText, setServiceDetailsText] = useState(''); // Textarea with line-breaks

  // Article form state
  const [editingArticle, setEditingArticle] = useState<string | null>(null);
  const [articleTitle, setArticleTitle] = useState('');
  const [articleCategory, setArticleCategory] = useState('');
  const [articleReadTime, setArticleReadTime] = useState('');
  const [articleSummary, setArticleSummary] = useState('');
  const [articleContentText, setArticleContentText] = useState(''); // Textarea with paragraphs split by blank line
  const [articleKeywordsText, setArticleKeywordsText] = useState(''); // Comma separated
  const [articleImage, setArticleImage] = useState('');

  // JSON Import state
  const [importJsonText, setImportJsonText] = useState('');
  const [importMessage, setImportMessage] = useState({ text: '', type: '' });

  // Handle Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      setLoginError('');
      setUsername('');
      setPassword('');
    } else {
      setLoginError('Hatalı kullanıcı adı veya şifre girdiniz.');
    }
  };

  // Convert File to Base64
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (base64: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      // Limit file size to 2.5MB to avoid localStorage limits
      if (file.size > 2.5 * 1024 * 1024) {
        alert('Yüklemek istediğiniz görsel boyutu çok büyük (Maksimum 2.5 MB). Lütfen daha küçük boyutlu veya optimize edilmiş bir görsel seçin.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          callback(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // --- MENU HANDLERS ---
  const handleSaveMenu = (e: React.FormEvent) => {
    e.preventDefault();
    if (!menuName.trim()) return;

    if (isSubmenuMode) {
      // Adding a sub-menu to an existing menu
      const parent = menus.find(m => m.id === parentMenuId);
      if (parent) {
        const subMenus = parent.subMenus || [];
        const newSubItem = {
          id: `sub-${Date.now()}`,
          name: menuName.trim(),
          categoryName: submenuCategory.trim() || menuName.trim()
        };
        const updatedParent = {
          ...parent,
          href: undefined, // Dropdown parent should not have standard link href
          subMenus: [...subMenus, newSubItem]
        };
        updateMenu(updatedParent);
      }
    } else {
      // Adding/Editing a top menu
      if (editingMenu) {
        const menuToEdit = menus.find(m => m.id === editingMenu);
        if (menuToEdit) {
          updateMenu({
            ...menuToEdit,
            name: menuName.trim(),
            href: menuHref.trim()
          });
        }
      } else {
        addMenu({
          id: `menu-${Date.now()}`,
          name: menuName.trim(),
          href: menuHref.trim() || undefined,
          subMenus: []
        });
      }
    }

    // Reset Form
    setEditingMenu(null);
    setMenuName('');
    setMenuHref('');
    setIsSubmenuMode(false);
    setParentMenuId('');
    setSubmenuCategory('');
  };

  const handleEditMenuClick = (menu: any) => {
    setEditingMenu(menu.id);
    setMenuName(menu.name);
    setMenuHref(menu.href || '');
    setIsSubmenuMode(false);
    setParentMenuId('');
  };

  const handleDeleteSubMenu = (parentMenu: any, subMenuId: string) => {
    if (!window.confirm('Bu alt menüyü silmek istediğinize emin misiniz?')) return;
    const updatedSubMenus = (parentMenu.subMenus || []).filter((s: any) => s.id !== subMenuId);
    updateMenu({
      ...parentMenu,
      subMenus: updatedSubMenus
    });
  };

  // --- SERVICE HANDLERS ---
  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceTitle.trim() || !serviceDesc.trim()) return;

    const details = serviceDetailsText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    const serviceData = {
      id: editingService || `srv-${Date.now()}`,
      title: serviceTitle.trim(),
      desc: serviceDesc.trim(),
      iconName: serviceImage ? undefined : serviceIcon,
      image: serviceImage || undefined,
      details
    };

    if (editingService) {
      updateService(serviceData);
    } else {
      addService(serviceData);
    }

    // Reset Form
    setEditingService(null);
    setServiceTitle('');
    setServiceDesc('');
    setServiceIcon('Scale');
    setServiceImage('');
    setServiceDetailsText('');
  };

  const handleEditServiceClick = (srv: any) => {
    setEditingService(srv.id);
    setServiceTitle(srv.title);
    setServiceDesc(srv.desc);
    setServiceIcon(srv.iconName || 'Scale');
    setServiceImage(srv.image || '');
    setServiceDetailsText((srv.details || []).join('\n'));
  };

  // --- ARTICLE HANDLERS ---
  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!articleTitle.trim() || !articleCategory.trim() || !articleSummary.trim()) return;

    // Content split by blank lines to form paragraph array
    const content = articleContentText
      .split('\n\n')
      .map(p => p.trim())
      .filter(p => p.length > 0);

    const keywords = articleKeywordsText
      .split(',')
      .map(kw => kw.trim())
      .filter(kw => kw.length > 0);

    const timeString = articleReadTime.trim() ? `${articleReadTime.trim()} dk okuma` : '5 dk okuma';

    const articleData = {
      id: editingArticle || `art-${Date.now()}`,
      title: articleTitle.trim(),
      category: articleCategory.trim(),
      date: editingArticle 
        ? (articles.find(a => a.id === editingArticle)?.date || new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }))
        : new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: timeString,
      summary: articleSummary.trim(),
      content,
      keywords,
      image: articleImage || undefined
    };

    if (editingArticle) {
      updateArticle(articleData);
    } else {
      addArticle(articleData);
    }

    // Reset Form
    setEditingArticle(null);
    setArticleTitle('');
    setArticleCategory('');
    setArticleReadTime('');
    setArticleSummary('');
    setArticleContentText('');
    setArticleKeywordsText('');
    setArticleImage('');
  };

  const handleEditArticleClick = (art: any) => {
    setEditingArticle(art.id);
    setArticleTitle(art.title);
    setArticleCategory(art.category);
    setArticleReadTime(art.readTime.replace(' dk okuma', ''));
    setArticleSummary(art.summary);
    setArticleContentText((art.content || []).join('\n\n'));
    setArticleKeywordsText((art.keywords || []).join(', '));
    setArticleImage(art.image || '');
  };

  // --- SETTINGS HANDLERS ---
  const handleChangePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPassMessage({ text: '', type: '' });

    if (!currentPass || !newPass || !confirmPass) {
      setPassMessage({ text: 'Lütfen tüm alanları doldurun.', type: 'error' });
      return;
    }

    if (newPass !== confirmPass) {
      setPassMessage({ text: 'Yeni şifreler eşleşmiyor.', type: 'error' });
      return;
    }

    // A check to verify they entered current pass correctly
    // We get stored password or 'Yeniden.12*'
    const storedPass = localStorage.getItem('av_admin_password') || 'Yeniden.12*';
    if (currentPass !== storedPass) {
      setPassMessage({ text: 'Mevcut şifre hatalı.', type: 'error' });
      return;
    }

    changePassword(newPass);
    setPassMessage({ text: 'Şifreniz başarıyla güncellendi.', type: 'success' });
    setCurrentPass('');
    setNewPass('');
    setConfirmPass('');
  };

  const handleDownloadBackup = () => {
    const backupStr = exportData();
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(backupStr);
    const exportFileDefaultName = `avukat_website_data_${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setImportMessage({ text: '', type: '' });
    if (!importJsonText.trim()) return;

    const success = importData(importJsonText.trim());
    if (success) {
      setImportMessage({ text: 'Veriler başarıyla içe aktarıldı ve site güncellendi!', type: 'success' });
      setImportJsonText('');
    } else {
      setImportMessage({ text: 'İçe aktarma başarısız oldu. JSON formatının doğru olduğunu kontrol edin.', type: 'error' });
    }
  };

  // Login view
  if (!adminLoggedIn) {
    return (
      <div className="min-h-screen bg-burgundy-dark flex items-center justify-center px-4 relative overflow-hidden select-none">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy-light/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-silver/5 rounded-full blur-3xl pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-burgundy-muted/80 backdrop-blur-md border border-white/10 rounded-lg p-8 shadow-2xl relative z-10"
        >
          {/* Logo / Brand Name */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 rounded bg-gradient-to-br from-silver to-silver-dark flex items-center justify-center shadow-lg shadow-silver/10 mb-4">
              <Lock className="text-burgundy-dark w-7 h-7" />
            </div>
            <h2 className="font-serif text-2xl font-bold tracking-wide text-white text-center">
              YÖNETİCİ GİRİŞİ
            </h2>
            <span className="text-[10px] uppercase tracking-widest text-silver-dark font-bold mt-1">
              Av. Enes Yıldırım Hukuk Bürosu
            </span>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div>
              <label htmlFor="username-login" className="block text-xs uppercase tracking-widest font-bold text-silver-dark mb-2">Kullanıcı Adı</label>
              <input
                id="username-login"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-black/30 border border-white/10 text-white rounded px-4 py-3 text-sm focus:outline-none focus:border-silver focus:ring-1 focus:ring-silver transition-all"
                placeholder="Yönetici kullanıcı adı"
                required
              />
            </div>
            <div>
              <label htmlFor="password-login" className="block text-xs uppercase tracking-widest font-bold text-silver-dark mb-2">Şifre</label>
              <input
                id="password-login"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/30 border border-white/10 text-white rounded px-4 py-3 text-sm focus:outline-none focus:border-silver focus:ring-1 focus:ring-silver transition-all"
                placeholder="Yönetici şifresi"
                required
              />
            </div>

            {loginError && (
              <div className="flex items-center gap-2 text-red-400 text-xs bg-red-950/30 border border-red-500/20 px-3.5 py-2.5 rounded">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-silver to-silver-dark text-burgundy-dark font-bold uppercase tracking-widest text-xs rounded hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-silver/10 mt-2"
            >
              Sisteme Giriş Yap
            </button>
          </form>

          <div className="mt-8 text-center">
            <a 
              href="#" 
              className="text-xs text-silver-dark hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Ana Sayfaya Geri Dön</span>
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  // Dashboard view
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans select-none">
      
      {/* Top Admin Header */}
      <header className="bg-burgundy-dark border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-gradient-to-br from-silver to-silver-dark flex items-center justify-center shadow-md">
            <Lock className="text-burgundy-dark w-4.5 h-4.5" />
          </div>
          <div>
            <h1 className="font-serif text-lg md:text-xl font-bold tracking-wide text-white">
              AV. ENES YILDIRIM
            </h1>
            <p className="text-[9px] uppercase tracking-widest text-silver-dark font-bold leading-none">
              Yönetici Paneli (İçerik & Menü Yönetimi)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-1.5 text-xs text-silver-dark hover:text-white bg-white/5 border border-white/10 px-4 py-2.5 rounded transition-all"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">Web Sitesini Görüntüle</span>
          </a>
          <button
            onClick={logout}
            className="flex items-center gap-1.5 text-xs text-red-400 hover:text-white bg-red-950/20 border border-red-500/20 hover:bg-red-900/40 px-4 py-2.5 rounded transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Güvenli Çıkış</span>
          </button>
        </div>
      </header>

      {/* Main Admin Layout */}
      <div className="flex-grow flex flex-col lg:flex-row">
        
        {/* Navigation Sidebar */}
        <aside className="w-full lg:w-72 bg-slate-950 border-r border-slate-800 p-6 flex flex-col gap-2">
          <button
            onClick={() => setActiveTab('menus')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-left text-sm font-bold tracking-wide transition-all ${
              activeTab === 'menus' 
                ? 'bg-burgundy text-white shadow-lg' 
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <MenuIcon className="w-4 h-4" />
            <span>Menü & Kategori Yönetimi</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-left text-sm font-bold tracking-wide transition-all ${
              activeTab === 'services' 
                ? 'bg-burgundy text-white shadow-lg' 
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Hukuk Alanları (Hizmetler)</span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-left text-sm font-bold tracking-wide transition-all ${
              activeTab === 'articles' 
                ? 'bg-burgundy text-white shadow-lg' 
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Makale Yayını & Blog</span>
          </button>

          <button
            onClick={() => setActiveTab('office')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-left text-sm font-bold tracking-wide transition-all ${
              activeTab === 'office' 
                ? 'bg-burgundy text-white shadow-lg' 
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Büro & Hakkımızda</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-left text-sm font-bold tracking-wide transition-all ${
              activeTab === 'settings' 
                ? 'bg-burgundy text-white shadow-lg' 
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Sistem Yedekleme & Ayarlar</span>
          </button>

          {/* Quick instructions box in sidebar */}
          <div className="mt-8 bg-slate-900 border border-slate-800 rounded p-4 text-xs text-slate-400 space-y-2">
            <h3 className="font-bold text-slate-200 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-silver" />
              <span>İpucu: Canlı Yayınlama</span>
            </h3>
            <p className="leading-relaxed font-light">
              Admin panelinde yaptığınız tüm değişiklikler anında yerel tarayıcı hafızasına (`localStorage`) kaydedilir. Sitenizi yayına alırken veya güncellerken en son içeriğinizi **Yedekleme** sekmesinden JSON olarak indirip saklayabilirsiniz.
            </p>
          </div>
        </aside>

        {/* Tab Contents Area */}
        <main className="flex-grow p-6 md:p-10 bg-slate-900 overflow-y-auto">
          
          {/* TAB 1: MENUS */}
          {activeTab === 'menus' && (
            <div className="space-y-10">
              <div className="border-b border-slate-800 pb-5">
                <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                  <MenuIcon className="text-silver" /> Menü ve Kategori Yönetimi
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  Web sitenizin üst menü çubuğuna (Navbar) yeni üst menüler ve bunların altına alt kategoriler ekleyin.
                </p>
              </div>

              {/* Grid Layout: Left is Form, Right is Preview & List */}
              <div className="grid lg:grid-cols-12 gap-8">
                
                {/* Form column */}
                <div className="lg:col-span-5 bg-slate-950 border border-slate-800 p-6 rounded-lg self-start">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-silver-dark mb-4 border-b border-slate-800 pb-2">
                    {editingMenu ? 'Menü Düzenle' : (isSubmenuMode ? 'Alt Menü Ekle' : 'Yeni Üst Menü Ekle')}
                  </h3>

                  <form onSubmit={handleSaveMenu} className="space-y-4">
                    {/* Add Mode Toggle */}
                    {!editingMenu && (
                      <div className="flex border border-slate-800 rounded overflow-hidden">
                        <button
                          type="button"
                          onClick={() => { setIsSubmenuMode(false); setMenuHref(''); }}
                          className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                            !isSubmenuMode ? 'bg-burgundy text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                          }`}
                        >
                          Üst Menü
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (menus.length === 0) {
                              alert('Önce bir üst menü tanımlamanız gerekir.');
                              return;
                            }
                            setIsSubmenuMode(true);
                            // Auto select first parent
                            setParentMenuId(menus[0].id);
                          }}
                          className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                            isSubmenuMode ? 'bg-burgundy text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                          }`}
                        >
                          Alt Menü
                        </button>
                      </div>
                    )}

                    {/* Parent Menu Select (Only for submenu) */}
                    {isSubmenuMode && (
                      <div>
                        <label htmlFor="parent-menu-select" className="block text-xs text-slate-400 font-bold mb-1">Üst Başlık Seçin</label>
                        <select
                          id="parent-menu-select"
                          value={parentMenuId}
                          onChange={(e) => setParentMenuId(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                          required
                        >
                          {menus.map(m => (
                            <option key={m.id} value={m.id}>{m.name}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label htmlFor="menu-name-input" className="block text-xs text-slate-400 font-bold mb-1">
                        {isSubmenuMode ? 'Alt Menü Başlığı' : 'Menü Başlığı'}
                      </label>
                      <input
                        id="menu-name-input"
                        type="text"
                        value={menuName}
                        onChange={(e) => setMenuName(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Örn: Bilişim Hukuku, Kira Hukuku, Blog vb."
                        required
                      />
                    </div>

                    {/* Href / Target link (Only for top menu without submenu) */}
                    {!isSubmenuMode && (
                      <div>
                        <label htmlFor="menu-href-input" className="block text-xs text-slate-400 font-bold mb-1">Menü Linki / Çapa Link (Opsiyonel)</label>
                        <input
                          id="menu-href-input"
                          type="text"
                          value={menuHref}
                          onChange={(e) => setMenuHref(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                          placeholder="Örn: #anasayfa veya dış link (Boş bırakılırsa tıklandığında açılır liste olur)"
                        />
                      </div>
                    )}

                    {/* Submenu category name (Only for submenu) */}
                    {isSubmenuMode && (
                      <div>
                        <label htmlFor="submenu-category-input" className="block text-xs text-slate-400 font-bold mb-1">Eşleşen Filtre Kategorisi</label>
                        <input
                          id="submenu-category-input"
                          type="text"
                          value={submenuCategory}
                          onChange={(e) => setSubmenuCategory(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                          placeholder="Örn: Bilişim Hukuku (Makale yazarken seçeceğiniz kategoriyle aynı olmalıdır)"
                        />
                        <p className="text-[10px] text-slate-500 mt-1 font-light leading-relaxed">
                          Alt menü tıklandığında bu kategori adına sahip olan makaleler filtrelenir. Boş bırakırsanız başlıkla aynı kabul edilir.
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2.5 pt-2">
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-silver to-silver-dark text-burgundy-dark py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" />
                        <span>{editingMenu ? 'Güncelle' : (isSubmenuMode ? 'Alt Menüyü Ekle' : 'Üst Menüyü Ekle')}</span>
                      </button>
                      {editingMenu && (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingMenu(null);
                            setMenuName('');
                            setMenuHref('');
                          }}
                          className="bg-slate-900 border border-slate-800 text-slate-400 hover:text-white px-4 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          İptal
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                {/* List and preview column */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-silver-dark mb-2">
                    Mevcut Menü Ağacı
                  </h3>

                  {menus.length === 0 ? (
                    <div className="bg-slate-950 border border-slate-800 p-8 rounded text-center text-slate-500 font-light">
                      Kayıtlı menü bulunamadı.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {menus.map((menu) => (
                        <div key={menu.id} className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                          <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-white text-base">{menu.name}</span>
                                {menu.href && (
                                  <span className="text-[10px] bg-slate-900 border border-slate-850 px-2 py-0.5 rounded text-slate-400">
                                    {menu.href}
                                  </span>
                                )}
                              </div>
                              {menu.subMenus && menu.subMenus.length > 0 && (
                                <p className="text-[10px] text-slate-400 mt-0.5 font-light">({menu.subMenus.length} Alt Menü Mevcut - Otomatik Dropdown)</p>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleEditMenuClick(menu)}
                                className="w-8 h-8 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                                title="Başlığı Düzenle"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => {
                                  if (window.confirm('Bu üst menüyü ve altındaki tüm alt menüleri silmek istediğinize emin misiniz?')) {
                                    deleteMenu(menu.id);
                                  }
                                }}
                                className="w-8 h-8 rounded bg-red-950/20 border border-red-500/20 text-red-400 hover:text-white flex items-center justify-center transition-colors"
                                title="Menüyü Sil"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Submenus nested */}
                          {menu.subMenus && menu.subMenus.length > 0 ? (
                            <div className="pl-4 space-y-2 border-l-2 border-slate-800">
                              {menu.subMenus.map((sub) => (
                                <div key={sub.id} className="flex justify-between items-center bg-slate-900/50 border border-slate-850 rounded px-3 py-2 text-xs">
                                  <div>
                                    <span className="font-semibold text-slate-300">{sub.name}</span>
                                    <span className="text-[9px] text-slate-500 ml-2 font-mono">Filtre: {sub.categoryName}</span>
                                  </div>
                                  <button
                                    onClick={() => handleDeleteSubMenu(menu, sub.id)}
                                    className="text-red-400 hover:text-red-300 p-1"
                                    title="Alt Menüyü Sil"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-[10px] text-slate-500 pl-4 font-light italic">Alt menü bulunmuyor.</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-10">
              <div className="border-b border-slate-800 pb-5">
                <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                  <Scale className="text-silver" /> Hukuk Alanları (Hizmetler) Yönetimi
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  Sitedeki faaliyet alanlarını düzenleyin, yeni davalar ekleyin, silin ve bu alanlara özel görseller yükleyin.
                </p>
              </div>

              {/* Grid */}
              <div className="grid lg:grid-cols-12 gap-8">
                
                {/* Form */}
                <div className="lg:col-span-5 bg-slate-950 border border-slate-800 p-6 rounded-lg self-start">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-silver-dark mb-4 border-b border-slate-800 pb-2">
                    {editingService ? 'Hukuk Alanını Düzenle' : 'Yeni Hukuk Alanı Ekle'}
                  </h3>

                  <form onSubmit={handleSaveService} className="space-y-4">
                    {/* Title */}
                    <div>
                      <label htmlFor="service-title-input" className="block text-xs text-slate-400 font-bold mb-1">Başlık (Alan Adı)</label>
                      <input
                        id="service-title-input"
                        type="text"
                        value={serviceTitle}
                        onChange={(e) => setServiceTitle(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Örn: Kira Hukuku, Şirketler Hukuku vb."
                        required
                      />
                    </div>

                    {/* Short Desc */}
                    <div>
                      <label htmlFor="service-desc-input" className="block text-xs text-slate-400 font-bold mb-1">Kısa Açıklama (Özet)</label>
                      <textarea
                        id="service-desc-input"
                        value={serviceDesc}
                        onChange={(e) => setServiceDesc(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white h-20 resize-none"
                        placeholder="Kartta görüntülenecek 1-2 cümlelik kısa özet."
                        required
                      />
                    </div>

                    {/* Image Upload */}
                    <div>
                      <label className="block text-xs text-slate-400 font-bold mb-1">Kapak Görseli Yükle (Görsel Modu)</label>
                      <div className="flex gap-3 items-center">
                        <label className="flex-1 flex flex-col items-center justify-center bg-slate-900 hover:bg-slate-850 border border-dashed border-slate-850 hover:border-silver rounded px-4 py-4 cursor-pointer transition-all">
                          <FileUp className="w-6 h-6 text-slate-400 mb-1" />
                          <span className="text-[10px] text-slate-400 text-center font-bold">Görsel Seç (.png, .jpg)</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, setServiceImage)}
                            className="hidden"
                          />
                        </label>
                        {serviceImage && (
                          <div className="relative w-16 h-16 rounded overflow-hidden border border-slate-800">
                            <img src={serviceImage} alt="Preview" className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => setServiceImage('')}
                              className="absolute top-0 right-0 bg-red-600 text-white rounded-bl p-1 text-[9px]"
                            >
                              Sil
                            </button>
                          </div>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1 font-light leading-relaxed">
                        Görsel yüklendiğinde, kartlarda görsel görüntülenecektir. Boş bırakırsanız aşağıdaki ikon listesinden seçeceğiniz ikon görüntülenecektir.
                      </p>
                    </div>

                    {/* Icon Selection (Only shown if no image is uploaded) */}
                    {!serviceImage && (
                      <div>
                        <label className="block text-xs text-slate-400 font-bold mb-2">Simge/İkon Seçimi (İkonlu Mod)</label>
                        <div className="grid grid-cols-4 gap-2">
                          {iconList.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <button
                                key={item.name}
                                type="button"
                                onClick={() => setServiceIcon(item.name)}
                                className={`p-3 rounded border text-center flex flex-col items-center justify-center transition-all ${
                                  serviceIcon === item.name 
                                    ? 'bg-burgundy border-burgundy text-white' 
                                    : 'bg-slate-900 border-slate-850 text-slate-400 hover:text-white hover:border-slate-800'
                                }`}
                                title={item.label}
                              >
                                <IconComponent className="w-5 h-5 mb-1" />
                                <span className="text-[8px] truncate max-w-full font-light">{item.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Details List */}
                    <div>
                      <label htmlFor="service-details-input" className="block text-xs text-slate-400 font-bold mb-1">Verilen Hizmet Detayları (Satır satır yazın)</label>
                      <textarea
                        id="service-details-input"
                        value={serviceDetailsText}
                        onChange={(e) => setServiceDetailsText(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white h-28"
                        placeholder="Her satıra bir adet hizmet maddesi yazın. Örneğin:&#10;Kira tahliye davaları&#10;Kira tespit ve uyarlama davaları&#10;Tahliye taahhütnamesi hazırlanması"
                      />
                    </div>

                    <div className="flex gap-2.5 pt-2">
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-silver to-silver-dark text-burgundy-dark py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" />
                        <span>{editingService ? 'Hukuk Alanını Güncelle' : 'Hukuk Alanı Ekle'}</span>
                      </button>
                      {editingService && (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingService(null);
                            setServiceTitle('');
                            setServiceDesc('');
                            setServiceIcon('Scale');
                            setServiceImage('');
                            setServiceDetailsText('');
                          }}
                          className="bg-slate-900 border border-slate-800 text-slate-400 hover:text-white px-4 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          İptal
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                {/* List Column */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-silver-dark mb-2">
                    Mevcut Hukuk Alanları
                  </h3>

                  {services.length === 0 ? (
                    <div className="bg-slate-950 border border-slate-800 p-8 rounded text-center text-slate-500 font-light">
                      Kayıtlı uzmanlık alanı bulunamadı.
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((srv) => {
                        const iconData = iconList.find(i => i.name === srv.iconName);
                        const IconComponent = iconData ? iconData.icon : Scale;
                        return (
                          <div key={srv.id} className="bg-slate-950 border border-slate-800 rounded-lg p-5 flex flex-col justify-between h-56">
                            <div>
                              <div className="flex justify-between items-start mb-3">
                                <div className="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
                                  {srv.image ? (
                                    <img src={srv.image} alt={srv.title} className="w-full h-full object-cover" />
                                  ) : (
                                    <IconComponent className="w-5 h-5 text-silver" />
                                  )}
                                </div>
                                <div className="flex gap-1.5">
                                  <button
                                    onClick={() => handleEditServiceClick(srv)}
                                    className="w-7 h-7 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                                    title="Düzenle"
                                  >
                                    <Edit3 className="w-3 h-3" />
                                  </button>
                                  <button
                                    onClick={() => {
                                      if (window.confirm('Bu hukuk alanını silmek istediğinize emin misiniz?')) {
                                        deleteService(srv.id);
                                      }
                                    }}
                                    className="w-7 h-7 rounded bg-red-950/20 border border-red-500/20 text-red-400 hover:text-white flex items-center justify-center transition-colors"
                                    title="Sil"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                              <h4 className="font-serif font-bold text-white text-base leading-tight mb-2 line-clamp-1">{srv.title}</h4>
                              <p className="text-xs text-slate-400 font-light line-clamp-3 leading-relaxed">{srv.desc}</p>
                            </div>
                            <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold border-t border-slate-900 pt-2 block mt-2">
                              {srv.details ? srv.details.length : 0} detay maddesi ekli
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: ARTICLES */}
          {activeTab === 'articles' && (
            <div className="space-y-10">
              <div className="border-b border-slate-800 pb-5">
                <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                  <FileText className="text-silver" /> Makale Yayını & Blog Yönetimi
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  Web sitenizde paylaşılacak makaleleri (görselli veya görselsiz) yazın ve alt menü kategorileri ile ilişkilendirin.
                </p>
              </div>

              {/* Grid */}
              <div className="grid lg:grid-cols-12 gap-8">
                
                {/* Form */}
                <div className="lg:col-span-6 bg-slate-950 border border-slate-800 p-6 rounded-lg self-start">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-silver-dark mb-4 border-b border-slate-800 pb-2">
                    {editingArticle ? 'Makaleyi Düzenle' : 'Yeni Makale Yayınla'}
                  </h3>

                  <form onSubmit={handleSaveArticle} className="space-y-4">
                    
                    {/* Title */}
                    <div>
                      <label htmlFor="article-title-input" className="block text-xs text-slate-400 font-bold mb-1">Makale Başlığı</label>
                      <input
                        id="article-title-input"
                        type="text"
                        value={articleTitle}
                        onChange={(e) => setArticleTitle(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Örn: Kira Sözleşmelerinde Dikkat Edilmesi Gereken Hususlar"
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Category Selection */}
                      <div>
                        <label htmlFor="article-category-input" className="block text-xs text-slate-400 font-bold mb-1">Kategori (Alt Menü veya Başlık)</label>
                        <input
                          id="article-category-input"
                          type="text"
                          value={articleCategory}
                          onChange={(e) => setArticleCategory(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                          placeholder="Örn: Kira Hukuku, Aile Hukuku, KVK vb."
                          list="existing-categories"
                          required
                        />
                        <datalist id="existing-categories">
                          {/* Pull categories from dynamic submenus */}
                          {menus.flatMap(m => m.subMenus || []).map(sub => (
                            <option key={sub.id} value={sub.categoryName}>{sub.name}</option>
                          ))}
                          <option value="Kira Hukuku" />
                          <option value="İş Hukuku" />
                          <option value="Aile Hukuku" />
                          <option value="KVK" />
                          <option value="Blog" />
                        </datalist>
                        <p className="text-[9px] text-slate-500 mt-0.5 font-light">
                          İpucu: Navbar'da oluşturduğunuz alt menü kategorileri ile aynı adı verirseniz Navbar'dan tıklandığında anında listelenir!
                        </p>
                      </div>

                      {/* Read Time */}
                      <div>
                        <label htmlFor="article-readtime-input" className="block text-xs text-slate-400 font-bold mb-1">Okuma Süresi (Dakika)</label>
                        <input
                          id="article-readtime-input"
                          type="number"
                          value={articleReadTime}
                          onChange={(e) => setArticleReadTime(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                          placeholder="Örn: 5"
                        />
                      </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                      <label className="block text-xs text-slate-400 font-bold mb-1">Makale Görseli (Görselli Yayın - Opsiyonel)</label>
                      <div className="flex gap-3 items-center">
                        <label className="flex-1 flex flex-col items-center justify-center bg-slate-900 hover:bg-slate-850 border border-dashed border-slate-850 hover:border-silver rounded px-4 py-4 cursor-pointer transition-all">
                          <FileUp className="w-6 h-6 text-slate-400 mb-1" />
                          <span className="text-[10px] text-slate-400 text-center font-bold">Kapak Görseli Seç (.png, .jpg)</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, setArticleImage)}
                            className="hidden"
                          />
                        </label>
                        {articleImage && (
                          <div className="relative w-16 h-16 rounded overflow-hidden border border-slate-800">
                            <img src={articleImage} alt="Preview" className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => setArticleImage('')}
                              className="absolute top-0 right-0 bg-red-600 text-white rounded-bl p-1 text-[9px]"
                            >
                              Sil
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Summary */}
                    <div>
                      <label htmlFor="article-summary-input" className="block text-xs text-slate-400 font-bold mb-1">Kısa Özet</label>
                      <textarea
                        id="article-summary-input"
                        value={articleSummary}
                        onChange={(e) => setArticleSummary(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white h-20 resize-none"
                        placeholder="Makaleyi özetleyen 2-3 cümle. Yayın listesinde görüntülenecektir."
                        required
                      />
                    </div>

                    {/* Content Textarea */}
                    <div>
                      <label htmlFor="article-content-input" className="block text-xs text-slate-400 font-bold mb-1">Makale İçeriği (Paragrafları boş satır bırakarak yazın)</label>
                      <textarea
                        id="article-content-input"
                        value={articleContentText}
                        onChange={(e) => setArticleContentText(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white h-48 font-light"
                        placeholder="Makale metnini buraya yazın.&#10;&#10;Yeni bir paragrafa geçmek için aralarında bir boş satır bırakın. Eğer bir alt başlık eklemek isterseniz, satırın başına başlığı yazıp altına metni yazabilirsiniz."
                        required
                      />
                    </div>

                    {/* Keywords */}
                    <div>
                      <label htmlFor="article-keywords-input" className="block text-xs text-slate-400 font-bold mb-1">Anahtar Kelimeler (Virgülle ayırın)</label>
                      <input
                        id="article-keywords-input"
                        type="text"
                        value={articleKeywordsText}
                        onChange={(e) => setArticleKeywordsText(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Örn: kira tahliyesi, ev sahibi hakları, icra takibi"
                      />
                    </div>

                    <div className="flex gap-2.5 pt-2">
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-silver to-silver-dark text-burgundy-dark py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" />
                        <span>{editingArticle ? 'Makaleyi Güncelle' : 'Makale Yayınla'}</span>
                      </button>
                      {editingArticle && (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingArticle(null);
                            setArticleTitle('');
                            setArticleCategory('');
                            setArticleReadTime('');
                            setArticleSummary('');
                            setArticleContentText('');
                            setArticleKeywordsText('');
                            setArticleImage('');
                          }}
                          className="bg-slate-900 border border-slate-800 text-slate-400 hover:text-white px-4 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          İptal
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                {/* List Column */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-silver-dark mb-2">
                    Yayınlanmış Makaleler
                  </h3>

                  {articles.length === 0 ? (
                    <div className="bg-slate-950 border border-slate-800 p-8 rounded text-center text-slate-500 font-light">
                      Henüz yayınlanmış makale bulunmamaktadır.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {articles.map((art) => (
                        <div key={art.id} className="bg-slate-950 border border-slate-800 rounded-lg p-5 flex gap-4">
                          {art.image && (
                            <div className="w-20 h-20 rounded overflow-hidden border border-slate-850 flex-shrink-0 self-start">
                              <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <span className="bg-burgundy-light/10 text-burgundy-light text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded border border-burgundy-light/10">
                                  {art.category}
                                </span>
                                <span className="text-slate-500 text-[10px] ml-2">{art.date}</span>
                              </div>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleEditArticleClick(art)}
                                  className="w-7 h-7 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                                  title="Makaleyi Düzenle"
                                >
                                  <Edit3 className="w-3 h-3" />
                                </button>
                                <button
                                  onClick={() => {
                                    if (window.confirm('Bu makaleyi silmek istediğinize emin misiniz?')) {
                                      deleteArticle(art.id);
                                    }
                                  }}
                                  className="w-7 h-7 rounded bg-red-950/20 border border-red-500/20 text-red-400 hover:text-white flex items-center justify-center transition-colors"
                                  title="Makaleyi Sil"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                            <h4 className="font-serif font-bold text-white text-base leading-tight mb-2 line-clamp-1">{art.title}</h4>
                            <p className="text-xs text-slate-400 font-light line-clamp-2 leading-relaxed">{art.summary}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* TAB 3.5: OFFICE & ABOUT */}
          {activeTab === 'office' && (
            <div className="space-y-10">
              <div className="border-b border-slate-800 pb-5">
                <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                  <Users className="text-silver" /> Büro & Hakkımızda Yönetimi
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  İletişim bilgilerini, e-postaları, adresleri ve "Hakkımda" biyografi/görsel alanlarını düzenleyin.
                </p>
              </div>

              <form onSubmit={handleSaveOfficeInfo} className="space-y-8">
                {/* İletişim Bilgileri */}
                <div className="bg-slate-950 border border-slate-800 p-6 rounded-lg space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-silver-dark flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Globe className="w-4 h-4 text-silver" /> Büro İletişim Bilgileri
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="office-phone-input" className="block text-xs text-slate-400 font-bold mb-1">Telefon Numarası</label>
                      <input
                        id="office-phone-input"
                        type="text"
                        value={officePhone}
                        onChange={(e) => setOfficePhone(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Örn: 0545 561 94 65"
                        required
                      />
                      <p className="text-[10px] text-slate-500 mt-1">Sitedeki tüm telefon numaralarını, WhatsApp butonunu ve arama bağlantılarını günceller.</p>
                    </div>
                    <div>
                      <label htmlFor="office-email-input" className="block text-xs text-slate-400 font-bold mb-1">E-Posta Adresi (Birincil)</label>
                      <input
                        id="office-email-input"
                        type="email"
                        value={officeEmail}
                        onChange={(e) => setOfficeEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Örn: av.enessyildirim@gmail.com"
                        required
                      />
                      <p className="text-[10px] text-slate-500 mt-1">İletişim formunun gönderileceği ana e-posta adresidir.</p>
                    </div>
                    <div>
                      <label htmlFor="office-email-sec-input" className="block text-xs text-slate-400 font-bold mb-1">E-Posta Adresi (İkincil)</label>
                      <input
                        id="office-email-sec-input"
                        type="email"
                        value={officeEmailSecondary}
                        onChange={(e) => setOfficeEmailSecondary(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Örn: yildirimlawpartners@gmail.com"
                      />
                      <p className="text-[10px] text-slate-500 mt-1">Sitede gösterilecek ek iletişim e-posta adresi.</p>
                    </div>
                    <div>
                      <label htmlFor="office-address-input" className="block text-xs text-slate-400 font-bold mb-1">Ofis Adresi</label>
                      <input
                        id="office-address-input"
                        type="text"
                        value={officeAddress}
                        onChange={(e) => setOfficeAddress(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Örn: Yıldırım Mahallesi Zafer Caddesi No:71B Bayrampaşa/İstanbul"
                        required
                      />
                      <p className="text-[10px] text-slate-500 mt-1">Footer ve İletişim sayfasındaki adres alanını günceller.</p>
                    </div>
                  </div>
                </div>

                {/* Hakkımızda / Avukat Profili Bilgileri */}
                <div className="bg-slate-950 border border-slate-800 p-6 rounded-lg space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-silver-dark flex items-center gap-2 border-b border-slate-800 pb-2">
                    <FileText className="w-4 h-4 text-silver" /> Hakkımda & Avukat Profil Bilgileri
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="about-title-input" className="block text-xs text-slate-400 font-bold mb-1">Hakkımda Bölümü Başlığı</label>
                      <input
                        id="about-title-input"
                        type="text"
                        value={aboutTitleState}
                        onChange={(e) => setAboutTitleState(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Örn: Hakkımda veya Av. Enes Yıldırım"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="about-faculty-input" className="block text-xs text-slate-400 font-bold mb-1">Mezun Olunan Fakülte / Okul</label>
                      <input
                        id="about-faculty-input"
                        type="text"
                        value={aboutFacultyState}
                        onChange={(e) => setAboutFacultyState(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Örn: Marmara Üni. Hukuk Fakültesi"
                      />
                    </div>
                    <div>
                      <label htmlFor="about-desc-input" className="block text-xs text-slate-400 font-bold mb-1">Kısa Açıklama / Alt Başlık</label>
                      <input
                        id="about-desc-input"
                        type="text"
                        value={aboutDescState}
                        onChange={(e) => setAboutDescState(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Örn: Hukuki danışmanlık ve dava süreçleriniz için doğrudan..."
                      />
                    </div>
                    <div>
                      <label htmlFor="about-phone-input" className="block text-xs text-slate-400 font-bold mb-1">Hakkımda Kısmı Telefonu</label>
                      <input
                        id="about-phone-input"
                        type="text"
                        value={aboutPhoneState}
                        onChange={(e) => setAboutPhoneState(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Örn: 0545 561 94 65"
                      />
                    </div>
                  </div>

                  {/* Görsel ve Mod Seçimi */}
                  <div className="border-t border-slate-900 pt-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <input
                        id="about-show-image-input"
                        type="checkbox"
                        checked={aboutShowImageState}
                        onChange={(e) => setAboutShowImageState(e.target.checked)}
                        className="w-4 h-4 rounded text-burgundy bg-slate-900 border-slate-850 focus:ring-burgundy focus:ring-offset-slate-950"
                      />
                      <label htmlFor="about-show-image-input" className="text-sm font-bold text-white cursor-pointer select-none">
                        Fotoğraflı Detaylı Biyografi Görünümünü Etkinleştir
                      </label>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      Bu seçenek işaretlendiğinde sitede detaylı özgeçmiş biyografisi ve avukat fotoğrafı gösterilir. İşaret kaldırıldığında ise sadece hızlı iletişim bilgileri ve mezuniyet kartı gösterilir (Daha sade arama modu).
                    </p>

                    {aboutShowImageState && (
                      <div className="grid md:grid-cols-2 gap-6 border border-slate-900 p-4 rounded bg-slate-950/40">
                        <div>
                          <label className="block text-xs text-slate-400 font-bold mb-2">Avukat Fotoğrafı</label>
                          <div className="flex gap-3 items-center">
                            <label className="flex-1 flex flex-col items-center justify-center bg-slate-900 hover:bg-slate-850 border border-dashed border-slate-850 hover:border-silver rounded px-4 py-6 cursor-pointer transition-all">
                              <FileUp className="w-6 h-6 text-slate-400 mb-1" />
                              <span className="text-[10px] text-slate-400 text-center font-bold">Fotoğraf Seç (.png, .jpg)</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, setAboutImageState)}
                                className="hidden"
                              />
                            </label>
                            {aboutImageState && (
                              <div className="relative w-16 h-20 rounded overflow-hidden border border-slate-800">
                                <img src={aboutImageState} alt="Preview" className="w-full h-full object-cover" />
                                <button
                                  type="button"
                                  onClick={() => setAboutImageState('')}
                                  className="absolute top-0 right-0 bg-red-650 text-white rounded-bl p-1 text-[9px]"
                                >
                                  Sil
                                </button>
                              </div>
                            )}
                          </div>
                          <p className="text-[10px] text-slate-500 mt-1">Önerilen oran: 4:5 veya 3:4. Maksimum boy: 2.5 MB.</p>
                        </div>
                        <div className="flex items-center justify-center border border-slate-900 rounded bg-slate-900/30 p-2 min-h-[100px]">
                          {aboutImageState ? (
                            <img src={aboutImageState} alt="Hakkımda Görseli Önizleme" className="max-h-24 max-w-full rounded object-contain border border-slate-800" />
                          ) : (
                            <span className="text-xs text-slate-500 italic">Fotoğraf yüklenmedi, varsayılan görsel kullanılacak.</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Biyografi Metni (aboutDetails) */}
                  <div className="border-t border-slate-900 pt-6">
                    <label htmlFor="about-details-input" className="block text-xs text-slate-400 font-bold mb-1">
                      Detaylı Biyografi Paragrafları
                    </label>
                    <textarea
                      id="about-details-input"
                      value={aboutDetailsStateText}
                      onChange={(e) => setAboutDetailsStateText(e.target.value)}
                      rows={8}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white font-light leading-relaxed"
                      placeholder="Her paragraf arasına 2 kez ENTER (boş satır) bırakarak biyografinizi yazın.&#10;&#10;Örn: Marmara Üniversitesi Hukuk Fakültesi mezunuyum...&#10;&#10;Meslek hayatım boyunca dürüstlük prensiplerini esas aldım..."
                    />
                    <p className="text-[10px] text-slate-500 mt-1">
                      Paragrafları ayırmak için satır aralarında boşluk bırakın (iki adet yeni satır).
                    </p>
                  </div>
                </div>

                {/* İstatistik Kartları */}
                <div className="bg-slate-950 border border-slate-800 p-6 rounded-lg space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-silver-dark flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Award className="w-4 h-4 text-silver" /> İstatistik Kartları (Sayaçlar)
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Hakkımda bölümünde listelenecek tecrübe, dosya sayısı, başarı oranı gibi sayaç kartlarını yönetin. En fazla 4 adet kart eklenmesi görsel bütünlük açısından tavsiye edilir.
                  </p>
                  
                  <div className="space-y-4">
                    {statsState.map((stat, index) => (
                      <div key={stat.id} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center border border-slate-900 p-4 rounded bg-slate-900/10">
                        <div className="md:col-span-3">
                          <label className="block text-[10px] text-slate-400 font-bold mb-1">Değer (Örn: 5+ veya %96)</label>
                          <input
                            type="text"
                            value={stat.value}
                            onChange={(e) => handleUpdateStatField(index, 'value', e.target.value)}
                            className="w-full bg-slate-900 border border-slate-850 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-silver"
                            placeholder="Değer"
                            required
                          />
                        </div>
                        <div className="md:col-span-4">
                          <label className="block text-[10px] text-slate-400 font-bold mb-1">Açıklama (Örn: Başarı Oranı)</label>
                          <input
                            type="text"
                            value={stat.label}
                            onChange={(e) => handleUpdateStatField(index, 'label', e.target.value)}
                            className="w-full bg-slate-900 border border-slate-850 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-silver"
                            placeholder="Açıklama"
                            required
                          />
                        </div>
                        <div className="md:col-span-3">
                          <label className="block text-[10px] text-slate-400 font-bold mb-1">İkon Seçimi</label>
                          <select
                            value={stat.iconName}
                            onChange={(e) => handleUpdateStatField(index, 'iconName', e.target.value)}
                            className="w-full bg-slate-900 border border-slate-850 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-silver"
                          >
                            <option value="Clock">Saat (Zaman/Deneyim)</option>
                            <option value="Award">Ödül/Kupa (Başarı/Dosya)</option>
                            <option value="HeartHandshake">El Sıkışma (Danışmanlık/Güven)</option>
                            <option value="Scale">Terazi (Adalet/Hukuk)</option>
                            <option value="Users">Kullanıcılar (Müvekkil)</option>
                            <option value="Building">Bina (Ofis/Gayrimenkul)</option>
                          </select>
                        </div>
                        <div className="md:col-span-2 flex justify-end gap-2 pt-4 md:pt-0">
                          <button
                            type="button"
                            onClick={() => handleDeleteStat(index)}
                            className="p-2 rounded bg-red-950/20 border border-red-500/20 text-red-400 hover:text-white transition-colors"
                            title="İstatistiği Sil"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    <button
                      type="button"
                      onClick={handleAddStat}
                      className="w-full flex items-center justify-center gap-2 border border-dashed border-slate-800 hover:border-silver rounded py-3 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      <Plus className="w-4 h-4" /> Yeni İstatistik Kartı Ekle
                    </button>
                  </div>
                </div>

                {/* Submit and message */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {officeMessage.text && (
                    <div className={`flex items-center gap-2 text-xs border px-3.5 py-2.5 rounded ${
                      officeMessage.type === 'success' 
                        ? 'text-emerald-400 bg-emerald-950/20 border-emerald-500/20' 
                        : 'text-red-400 bg-red-950/20 border-red-500/20'
                    }`}>
                      {officeMessage.type === 'success' ? <Check className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                      <span>{officeMessage.text}</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="md:ml-auto bg-gradient-to-r from-silver to-silver-dark text-burgundy-dark px-8 py-3 rounded text-xs font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    Tüm Değişiklikleri Kaydet
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 4: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="space-y-10">
              <div className="border-b border-slate-800 pb-5">
                <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                  <Settings className="text-silver" /> Sistem Yedekleme & Ayarlar
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  Sitenin veri yedeklerini alıp yükleyin veya yönetici şifrenizi güncelleyin.
                </p>
              </div>

              {/* Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Panel 1: Password Change */}
                <div className="bg-slate-950 border border-slate-800 p-6 rounded-lg space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-silver-dark flex items-center gap-2 border-b border-slate-800 pb-2 mb-2">
                    <Key className="w-4 h-4 text-silver" /> Şifre Değiştir
                  </h3>

                  <form onSubmit={handleChangePasswordSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="current-pass-input" className="block text-xs text-slate-400 font-bold mb-1">Mevcut Şifre</label>
                      <input
                        id="current-pass-input"
                        type="password"
                        value={currentPass}
                        onChange={(e) => setCurrentPass(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Mevcut yönetici şifreniz"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="new-pass-input" className="block text-xs text-slate-400 font-bold mb-1">Yeni Şifre</label>
                      <input
                        id="new-pass-input"
                        type="password"
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="En az 6 karakterli yeni şifre"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="confirm-pass-input" className="block text-xs text-slate-400 font-bold mb-1">Yeni Şifre Tekrar</label>
                      <input
                        id="confirm-pass-input"
                        type="password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-silver text-white"
                        placeholder="Yeni şifrenizi tekrar yazın"
                        required
                      />
                    </div>

                    {passMessage.text && (
                      <div className={`flex items-center gap-2 text-xs border px-3.5 py-2.5 rounded ${
                        passMessage.type === 'success' 
                          ? 'text-emerald-400 bg-emerald-950/20 border-emerald-500/20' 
                          : 'text-red-400 bg-red-950/20 border-red-500/20'
                      }`}>
                        {passMessage.type === 'success' ? <Check className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                        <span>{passMessage.text}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-silver to-silver-dark text-burgundy-dark py-3 rounded text-xs font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all"
                    >
                      Şifreyi Güncelle
                    </button>
                  </form>
                </div>

                {/* Panel 2: Backup and Import */}
                <div className="bg-slate-950 border border-slate-800 p-6 rounded-lg space-y-6">
                  
                  {/* Backup / Export */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-silver-dark flex items-center gap-2 border-b border-slate-800 pb-2">
                      <FileUp className="w-4 h-4 text-silver" /> Veritabanı Yedek İndir
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      Sitedeki tüm menüleri, uzmanlık alanlarını ve yayınları tek bir JSON dosyası olarak bilgisayarınıza kaydedin. Bu dosya, web sitenizin yedeğidir.
                    </p>
                    <button
                      type="button"
                      onClick={handleDownloadBackup}
                      className="w-full bg-slate-900 border border-slate-800 text-slate-200 py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-slate-850 hover:text-white transition-colors"
                    >
                      Yedek Dosyası İndir (JSON)
                    </button>
                  </div>

                  {/* Restore / Import */}
                  <div className="space-y-3 pt-4 border-t border-slate-900">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-silver-dark flex items-center gap-2 border-b border-slate-800 pb-2">
                      <Globe className="w-4 h-4 text-silver" /> Yedekten Yükle / İçe Aktar
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      Bilgisayarınızda sakladığınız yedeği veya bir JSON verisini yapıştırarak tüm site veritabanını anında güncelleyebilirsiniz.
                    </p>
                    <form onSubmit={handleImportSubmit} className="space-y-3">
                      <textarea
                        value={importJsonText}
                        onChange={(e) => setImportJsonText(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-xs focus:outline-none focus:border-silver text-white h-24 font-mono font-light"
                        placeholder="Yedek JSON metnini buraya yapıştırın..."
                        required
                      />

                      {importMessage.text && (
                        <div className={`flex items-center gap-2 text-xs border px-3.5 py-2.5 rounded ${
                          importMessage.type === 'success' 
                            ? 'text-emerald-400 bg-emerald-950/20 border-emerald-500/20' 
                            : 'text-red-400 bg-red-950/20 border-red-500/20'
                        }`}>
                          {importMessage.type === 'success' ? <Check className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                          <span>{importMessage.text}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-silver to-silver-dark text-burgundy-dark py-3 rounded text-xs font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all"
                      >
                        Yedeği Sisteme Yükle
                      </button>
                    </form>
                  </div>

                </div>

              </div>
            </div>
          )}

        </main>
      </div>

      {/* Footer Info */}
      <footer className="bg-slate-950 border-t border-slate-850 py-3 px-6 text-center text-[10px] text-slate-500 font-light flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>© 2026 Avukat Enes Yıldırım. Tüm hakları saklıdır.</span>
        <span>Bu panel tamamen yerel veri tabanı mimarisi (LocalStorage) üzerinde çalışmaktadır.</span>
      </footer>

    </div>
  );
};

export default AdminPanel;
