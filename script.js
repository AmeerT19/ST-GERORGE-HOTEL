document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  en: { eyebrow:'A timeless stay in the Holy City', tagline:'The Passion of<br>Jerusalemite Hospitality', call:'Call us', location:'Location', aboutTitle:'About us', aboutText:'The essence of Jerusalem’s warm hospitality, ST GEORGE HOTEL stands as the city’s cherished landmark, committed to providing an unparalleled and heartfelt guest experience.', contactTitle:'Contact us', reception:'For Reception, dial <strong>0</strong> from your room phone.', breakfast:'Breakfast', dinner:'Dinner', pool:'Pool hours', floors:'Room floors', floor1:'1st Floor', floor2:'2nd Floor', floor3:'3rd Floor', floor4:'4th Floor' },
  ar: { eyebrow:'إقامة خالدة في المدينة المقدسة', tagline:'شغف الضيافة<br>المقدسية', call:'اتصل بنا', location:'الموقع', aboutTitle:'من نحن', aboutText:'يمثل فندق سانت جورج جوهر الضيافة المقدسية الدافئة، ويقف كمعلم عزيز للمدينة ملتزماً بتقديم تجربة ضيافة استثنائية وصادقة.', contactTitle:'تواصل معنا', reception:'للاتصال بالاستقبال، اطلب <strong>0</strong> من هاتف غرفتك.', breakfast:'الإفطار', dinner:'العشاء', pool:'ساعات المسبح', floors:'طوابق الغرف', floor1:'الطابق الأول', floor2:'الطابق الثاني', floor3:'الطابق الثالث', floor4:'الطابق الرابع' },
  he: { eyebrow:'אירוח נצחי בעיר הקדושה', tagline:'התשוקה של<br>האירוח הירושלמי', call:'התקשרו אלינו', location:'מיקום', aboutTitle:'אודותינו', aboutText:'מלון סנט ג׳ורג׳ מגלם את מהות האירוח הירושלמי החם, ומהווה ציון דרך אהוב בעיר, המחויב להעניק חוויית אירוח יוצאת דופן ומלאת לב.', contactTitle:'צרו קשר', reception:'לקבלה, חייגו <strong>0</strong> מטלפון החדר.', breakfast:'ארוחת בוקר', dinner:'ארוחת ערב', pool:'שעות הבריכה', floors:'קומות החדרים', floor1:'קומה ראשונה', floor2:'קומה שנייה', floor3:'קומה שלישית', floor4:'קומה רביעית' },
  tr: { eyebrow:'Kutsal şehirde zamansız bir konaklama', tagline:'Kudüslü misafirperverliğin<br>tutkusu', call:'Bizi arayın', location:'Konum', aboutTitle:'Hakkımızda', aboutText:'Kudüs’ün sıcak misafirperverliğinin özünü taşıyan ST GEORGE HOTEL, şehrin değerli simgesi olarak eşsiz ve içten bir konuk deneyimi sunmaya adanmıştır.', contactTitle:'İletişim', reception:'Resepsiyon için oda telefonunuzdan <strong>0</strong> tuşlayın.', breakfast:'Kahvaltı', dinner:'Akşam yemeği', pool:'Havuz saatleri', floors:'Oda katları', floor1:'1. Kat', floor2:'2. Kat', floor3:'3. Kat', floor4:'4. Kat' },
  es: { eyebrow:'Una estancia atemporal en la Ciudad Santa', tagline:'La pasión de la<br>hospitalidad jerosolimitana', call:'Llámanos', location:'Ubicación', aboutTitle:'Sobre nosotros', aboutText:'La esencia de la cálida hospitalidad de Jerusalén, ST GEORGE HOTEL es un querido símbolo de la ciudad, comprometido a brindar una experiencia de huésped inigualable y cordial.', contactTitle:'Contáctanos', reception:'Para recepción, marque <strong>0</strong> desde el teléfono de su habitación.', breakfast:'Desayuno', dinner:'Cena', pool:'Horario de piscina', floors:'Pisos de habitaciones', floor1:'Primer piso', floor2:'Segundo piso', floor3:'Tercer piso', floor4:'Cuarto piso' }
};
const selector = document.getElementById('languageSelect');
function setLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = ['ar', 'he'].includes(language) ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.innerHTML = copy[element.dataset.i18n];
  });
  localStorage.setItem('hotel-language', language);
}
const savedLanguage = localStorage.getItem('hotel-language') || 'en';
selector.value = savedLanguage;
setLanguage(savedLanguage);
selector.addEventListener('change', (event) => setLanguage(event.target.value));
