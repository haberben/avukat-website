export interface SubMenuItem {
  id: string;
  name: string;
  categoryName: string; // The category name used to filter articles
}

export interface MenuItem {
  id: string;
  name: string;
  href?: string;
  subMenus?: SubMenuItem[];
}

export interface Service {
  id: string;
  title: string;
  desc: string;
  iconName?: string; // e.g., 'Scale', 'Users', etc.
  image?: string; // base64 string or URL
  details: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  keywords: string[];
  image?: string; // base64 string or URL
}

export const defaultMenus: MenuItem[] = [
  { id: 'menu-1', name: 'Ana Sayfa', href: '#anasayfa' },
  { id: 'menu-2', name: 'Uzmanlıklar', href: '#hizmetler' },
  { id: 'menu-3', name: 'Hakkımızda', href: '#hakkimda' },
  { id: 'menu-4', name: 'Bilgi Bankası', href: '#yayinlar' },
  { id: 'menu-5', name: 'Yorumlar', href: '#yorumlar' },
  { id: 'menu-6', name: 'İletişim', href: '#iletisim' },
];

export const defaultServices: Service[] = [
  { 
    id: 'srv-1', 
    title: 'Ceza Hukuku', 
    desc: 'Soruşturma ve kovuşturma aşamalarında profesyonel ceza müdafaa ve savunma hizmetleri.', 
    iconName: 'Scale',
    details: [
      'Ağır Ceza ve Asliye Ceza Mahkemelerinde sanık müdafiliği ve müşteki vekilliği.',
      'Soruşturma aşamasında savcılık ve kolluk (karakol) sorgularında refakat ve hazır bulunma.',
      'Tutuklama ve adli kontrol kararlarına karşı hukuki itirazların yapılması.',
      'Yargıtay ve İstinaf (Bölge Adliye Mahkemesi) kanun yolları başvuru süreçlerinin takibi.'
    ]
  },
  { 
    id: 'srv-2', 
    title: 'Boşanma Hukuku', 
    desc: 'Anlaşmalı ve çekişmeli boşanma, nafaka, velayet ve mal paylaşımı davalarında titiz temsil.', 
    iconName: 'Users',
    details: [
      'Anlaşmalı boşanma protokolünün hazırlanması ve tek celsede boşanmanın gerçekleştirilmesi.',
      'Çekişmeli boşanma davalarının takibi, tazminat ve nafaka taleplerinin yönetilmesi.',
      'Çocukların velayeti, kişisel ilişki kurulması ve velayetin değiştirilmesi davaları.',
      'Evlilik birliği içerisinde edinilen malların tasfiyesi ve mal paylaşımı davaları.'
    ]
  },
  { 
    id: 'srv-3', 
    title: 'Gayrimenkul Hukuku', 
    desc: 'Tapu iptal, tescil, ortaklığın giderilmesi ve kentsel dönüşüm süreçlerinde hukuki güvenlik.', 
    iconName: 'Home',
    details: [
      'Tapu iptali ve tescil davaları, muris muvazaası (mirastan mal kaçırma) uyuşmazlıkları.',
      'Ortaklığın giderilmesi (İzale-i Şüyu) davaları yoluyla gayrimenkul paylaşımı.',
      'Kentsel dönüşüm süreci hukuki danışmanlığı ve inşaat sözleşmelerinin denetimi.',
      'Kamulaştırma ve kamulaştırmasız el atma davalarında hak takibi.'
    ]
  },
  { 
    id: 'srv-4', 
    title: 'Tazminat Davaları', 
    desc: 'İş kazaları, trafik kazaları veya tıbbi malpraktis kaynaklı bedeni ve maddi zararların tazmini.', 
    iconName: 'ShieldAlert',
    details: [
      'Ölümlü ve yaralamalı trafik kazalarından doğan maddi ve manevi tazminat talepleri.',
      'İş kazaları neticesinde işverene karşı açılacak tazminat ve destekten yoksun kalma davaları.',
      'Tıbbi malpraktis (doktor ve hastane hataları) kaynaklı tazminat uyuşmazlıkları.',
      'Haksız fiil ve kişilik haklarına saldırı nedeniyle açılacak manevi tazminat süreçleri.'
    ]
  },
  { 
    id: 'srv-5', 
    title: 'Miras Hukuku', 
    desc: 'Vasiyetname düzenlenmesi, mirasın reddi, tenkis and veraset ilamı işlemlerinde uzman destek.', 
    iconName: 'BookOpen',
    details: [
      'Mirasçılık belgesi (Veraset İlamı) alınması ve intikal işlemlerinin yürütülmesi.',
      'Vasiyetname, miras sözleşmesi ve ölünceye kadar bakma sözleşmelerinin hazırlanması.',
      'Saklı pay ihlali nedeniyle açılacak Tenkis ve Muris Muvazaası davaları.',
      'Mirasın reddi (Redd-i Miras) davaları ve tereke tespit süreçlerinin takibi.'
    ]
  },
  { 
    id: 'srv-6', 
    title: 'İş Hukuku', 
    desc: 'İşçi-işveren uyuşmazlıkları, işe iade ve kıdem-ihbar tazminatı davalarında kesin çözümler.', 
    iconName: 'Briefcase',
    details: [
      'Kıdem tazminatı, ihbar tazminatı ve fazla mesai alacağı davaları.',
      'İş sözleşmesinin haksız feshine karşı İşe İade davalarının açılması ve takibi.',
      'Mobbing (işyerinde psikolojik taciz) nedeniyle hak talepleri ve tazminatlar.',
      'İş sözleşmelerinin yasal mevzuata uygun şekilde hazırlanması ve revizyonu.'
    ]
  },
  { 
    id: 'srv-7', 
    title: 'Arabuluculuk', 
    desc: 'Dava yoluna gitmeden, uyuşmazlıkların hızlı, ekonomik ve barışçıl yollarla çözümü.', 
    iconName: 'Handshake',
    details: [
      'İş hukuku, ticari hukuk ve tüketici uyuşmazlıklarında zorunlu arabuluculuk süreci temsilciliği.',
      'İhtiyari arabuluculuk yoluyla davaların aylar sürmeden günler içinde çözülmesi.',
      'Arabuluculuk anlaşma belgelerinin hukuki geçerliliğinin ve icra edilebilirliğinin denetimi.',
      'Tarafların menfaat dengesini gözeten müzakerelerin yürütülmesi.'
    ]
  },
  { 
    id: 'srv-8', 
    title: 'Kira Hukuku', 
    desc: 'Kira tespit, tahliye davaları ve kira sözleşmelerinin profesyonel bir şekilde hazırlanması.', 
    iconName: 'Building',
    details: [
      'Tahliye taahhütnamesinin geçerlilik analizi ve tahliye takibi/davası süreçleri.',
      'Kira bedelinin tespiti (kira artırım) ve kira uyarlama (indirim/artış) davaları.',
      'İhtiyaç nedeniyle, iki haklı ihtar nedeniyle veya tadilat nedeniyle tahliye davaları.',
      'Kira sözleşmelerinin ileride yaşanabilecek uyuşmazlıkları önleyecek şekilde hazırlanması.'
    ]
  }
];

export const defaultArticles: Article[] = [
  {
    id: 'art-1',
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
    id: 'art-2',
    title: 'İş Hukukunda Kıdem ve İhbar Tazminatı Hakları ve Hesaplama Usulü',
    category: 'İş Hukuku',
    date: '02 Nisan 2026',
    readTime: '8 dk okuma',
    summary: 'İş sözleşmesinin feshinde çalışanların en temel güvencesi olan kıdem ve ihbar tazminatına hak kazanma koşulları, haklı fesih nedenleri ve güncel hesaplama esasları.',
    keywords: ['kıdem tazminatı nasıl alınır', 'ihbar tazminatı hesaplama', 'işe iade davası süresi', 'Bayrampaşa iş hukuku avukatı', 'İstanbul iş davası avukatı'],
    content: [
      'İşçi ve işveren arasındaki ilişkileri düzenleyen 4857 sayılı İş Kanunu, zayıf konumda olan işçiyi koruma ilkesini benimsemiştir. İş ilişkisinin sona ermesi durumunda ortaya çıkan kıdem tazminatı ve ihbar tazminatı hakları, işçinin emeğinin ve yıllar boyu verdiği hizmetin yasal güvenceleridir. Bu yazımızda, tazminat haklarının kapsamını ve uyuşmazlık durumunda yapılması gerekenleri mercek altına alıyoruz.',
      'Kıdem Tazminatına Hak Kazanma Şartları \nBir işçinin kıdem tazminatına hak kazanabilmesi için öncelikle aynı işverene bağlı işyerinde en az 1 (bir) tam yıl çalışmış olması gerekir. İkinci temel şart ise iş sözleşmesinin kanunda belirtilen tazminata hak kazandıracak şekilde sona ermiş olmasıdır. İşçinin kendi isteğiyle istifa etmesi kural olarak kıdem tazminatına hak kazandırmaz. Ancak; \n- İşçinin haklı nedenle derhal fesih yapması (Maaşın düzensiz ödenmesi, mobbing, SGK primlerinin eksik yatırılması vb.)\n- Askerlik görevi nedeniyle işten ayrılma\n- Emeklilik hakkının kazanılması\n- Kadın işçinin evlendiği tarihten itibaren 1 yıl içinde sözleşmeyi feshetmesi gibi durumlarda istifa halinde dahi kıdem tazminatı ödenmek zorundadır.',
      'İhbar Tazminatı ve Bildirim Süreleri \nİş sözleşmesini feshetmek isteyen taraf (işçi veya işveren), bunu kanunda belirlenen bildirim sürelerine uyarak karşı tarafa bildirmekle yükümlüdür. Bildirim süreleri işçinin kıdemine göre belirlenir: \n- 6 aya kadar çalışanlar için: 2 hafta \n- 6 aydan 1.5 yıla kadar çalışanlar için: 4 hafta \n- 1.5 yıla kadar çalışanlar için: 6 hafta \n- 3 yıldan fazla çalışanlar için: 8 hafta. \nİşveren, bu bildirim sürelerine uymadan işçiyi derhal işten çıkarırsa, bildirim süresine ilişkin ücret tutarında ihbar tazminatı ödemekle yükümlü olur. Aynı şekilde işçi de bildirim süresine uymadan haklı bir nedeni olmaksızın işi bırakırsa işverene ihbar tazminatı ödemek zorunda kalabilir.',
      'Arabuluculuk ve Dava Süreçleri \nİş hukuku uyuşmazlıklarında (tazminatlar, fazla mesai, yıllık izin ücretleri vb.) dava açmadan önce arabulucuya başvurmak zorunlu dava şartıdır. Arabuluculuk aşamasında anlaşma sağlanamazsa, 2 hafta içinde İş Mahkemesi\'nde dava açılması gerekir. İşçilik alacakları davaları teknik ve hesaplama uzmanlığı gerektiren davalardır. Hak kaybı yaşamamak ve alacaklarınızı eksiksiz tahsil edebilmek için profesyonel bir iş hukuku avukatından destek almanız kritiktir.'
    ]
  },
  {
    id: 'art-3',
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
      'Çekişmeli Boşanma Davası ve Süreç \nEşler arasında boşanmanın mali sonuçları veya velayet gibi konularda anlaşma sağlanamadığı takdirde çekişmeli boşanma davası yoluna gidilir. Davalar; zina, hayata kast, pek kötü muamele, suç işleme, terk veya evlilik birliğinin temelinden sarsılması (şiddetli geçimsizlik) gibi özel ve genel boşanma sebeplerine dayandırılabilir. Çekişmeli boşanma davalarında iddiaların tanık, mesajlaşma kayıtları, otel kayıtları, banka hareketleri gibi hukuken geçerli delillerle kanıtlanması gerekir. Dava süreci 1.5 ila 3 yıl arasında sürebilmektedir.'
    ]
  }
];
