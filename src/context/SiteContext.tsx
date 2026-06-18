import React, { createContext, useContext, useState, useEffect } from 'react';
import type { MenuItem, Service, Article, OfficeInfo } from '../data/defaultData';
import { defaultMenus, defaultServices, defaultArticles, defaultOfficeInfo } from '../data/defaultData';

interface SiteContextType {
  menus: MenuItem[];
  services: Service[];
  articles: Article[];
  officeInfo: OfficeInfo;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  adminLoggedIn: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  
  // Office settings
  updateOfficeInfo: (info: OfficeInfo) => void;
  
  // Menu operations
  addMenu: (menu: MenuItem) => void;
  updateMenu: (menu: MenuItem) => void;
  deleteMenu: (id: string) => void;
  
  // Service operations
  addService: (service: Service) => void;
  updateService: (service: Service) => void;
  deleteService: (id: string) => void;
  
  // Article operations
  addArticle: (article: Article) => void;
  updateArticle: (article: Article) => void;
  deleteArticle: (id: string) => void;

  // Custom Category Filtering
  changeCategoryAndScroll: (category: string) => void;

  // Export / Import
  exportData: () => string;
  importData: (jsonString: string) => boolean;
  changePassword: (newPassword: string) => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [officeInfo, setOfficeInfo] = useState<OfficeInfo>(defaultOfficeInfo);
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');
  const [adminLoggedIn, setAdminLoggedIn] = useState<boolean>(false);
  const [adminPassword, setAdminPassword] = useState<string>('Yeniden.12*');

  // Load from LocalStorage or use default
  useEffect(() => {
    const storedMenus = localStorage.getItem('av_menus');
    const storedServices = localStorage.getItem('av_services');
    const storedArticles = localStorage.getItem('av_articles');
    const storedOfficeInfo = localStorage.getItem('av_office_info');
    const storedPassword = localStorage.getItem('av_admin_password');
    const isLoggedIn = sessionStorage.getItem('av_admin_logged');

    if (storedMenus) setMenus(JSON.parse(storedMenus));
    else {
      setMenus(defaultMenus);
      localStorage.setItem('av_menus', JSON.stringify(defaultMenus));
    }

    if (storedServices) setServices(JSON.parse(storedServices));
    else {
      setServices(defaultServices);
      localStorage.setItem('av_services', JSON.stringify(defaultServices));
    }

    if (storedArticles) setArticles(JSON.parse(storedArticles));
    else {
      setArticles(defaultArticles);
      localStorage.setItem('av_articles', JSON.stringify(defaultArticles));
    }

    if (storedOfficeInfo) setOfficeInfo(JSON.parse(storedOfficeInfo));
    else {
      setOfficeInfo(defaultOfficeInfo);
      localStorage.setItem('av_office_info', JSON.stringify(defaultOfficeInfo));
    }

    if (storedPassword) {
      setAdminPassword(storedPassword);
    } else {
      localStorage.setItem('av_admin_password', 'Yeniden.12*');
    }

    if (isLoggedIn === 'true') {
      setAdminLoggedIn(true);
    }
  }, []);


  const login = (username: string, password: string): boolean => {
    if (username === 'avukatenes' && password === adminPassword) {
      setAdminLoggedIn(true);
      sessionStorage.setItem('av_admin_logged', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setAdminLoggedIn(false);
    sessionStorage.removeItem('av_admin_logged');
  };

  const changePassword = (newPassword: string) => {
    setAdminPassword(newPassword);
    localStorage.setItem('av_admin_password', newPassword);
  };

  // Helper to persist state
  const saveMenus = (newMenus: MenuItem[]) => {
    setMenus(newMenus);
    localStorage.setItem('av_menus', JSON.stringify(newMenus));
  };

  const saveServices = (newServices: Service[]) => {
    setServices(newServices);
    localStorage.setItem('av_services', JSON.stringify(newServices));
  };

  const saveArticles = (newArticles: Article[]) => {
    setArticles(newArticles);
    localStorage.setItem('av_articles', JSON.stringify(newArticles));
  };

  // Menu CRUD
  const addMenu = (menu: MenuItem) => {
    saveMenus([...menus, menu]);
  };

  const updateMenu = (updatedMenu: MenuItem) => {
    saveMenus(menus.map(item => item.id === updatedMenu.id ? updatedMenu : item));
  };

  const deleteMenu = (id: string) => {
    saveMenus(menus.filter(item => item.id !== id));
  };

  // Service CRUD
  const addService = (service: Service) => {
    saveServices([...services, service]);
  };

  const updateService = (updatedService: Service) => {
    saveServices(services.map(item => item.id === updatedService.id ? updatedService : item));
  };

  const deleteService = (id: string) => {
    saveServices(services.filter(item => item.id !== id));
  };

  // Article CRUD
  const addArticle = (article: Article) => {
    saveArticles([article, ...articles]);
  };

  const updateArticle = (updatedArticle: Article) => {
    saveArticles(articles.map(item => item.id === updatedArticle.id ? updatedArticle : item));
  };

  const deleteArticle = (id: string) => {
    saveArticles(articles.filter(item => item.id !== id));
  };

  const updateOfficeInfo = (info: OfficeInfo) => {
    setOfficeInfo(info);
    localStorage.setItem('av_office_info', JSON.stringify(info));
  };

  // Filter and Scroll
  const changeCategoryAndScroll = (category: string) => {
    setSelectedCategory(category);
    // Find the Bilgi Bankası section (#yayinlar)
    const element = document.getElementById('yayinlar');
    if (element) {
      // Small delay to ensure render is updated before scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  // Import / Export
  const exportData = (): string => {
    const data = {
      menus,
      services,
      articles,
      officeInfo,
    };
    return JSON.stringify(data, null, 2);
  };

  const importData = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.menus && parsed.services && parsed.articles) {
        saveMenus(parsed.menus);
        saveServices(parsed.services);
        saveArticles(parsed.articles);
        if (parsed.officeInfo) {
          updateOfficeInfo(parsed.officeInfo);
        }
        return true;
      }
      return false;
    } catch (e) {
      console.error('Import failed:', e);
      return false;
    }
  };

  return (
    <SiteContext.Provider
      value={{
        menus,
        services,
        articles,
        officeInfo,
        selectedCategory,
        setSelectedCategory,
        adminLoggedIn,
        login,
        logout,
        addMenu,
        updateMenu,
        deleteMenu,
        addService,
        updateService,
        deleteService,
        addArticle,
        updateArticle,
        deleteArticle,
        changeCategoryAndScroll,
        exportData,
        importData,
        changePassword,
        updateOfficeInfo,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
