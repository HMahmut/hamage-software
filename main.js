(() => {
  'use strict';
  const strings = {
    tr: {
      skip: 'İçeriğe geç', navAbout: 'Hakkımızda', navNova: 'NOVA Capsule', navSupport: 'Destek', navPrivacy: 'Gizlilik', contact: 'İletişim',
      heroEyebrow: 'BAĞIMSIZ YAZILIM STÜDYOSU', heroTitle: 'Teknoloji, <em>doğal</em> hissettirmeli.', heroLead: 'Gündelik deneyimi daha akıcı, daha güzel ve daha akıllı hale getiren yazılımlar tasarlıyoruz.', discoverNova: "NOVA'yı keşfet", ourApproach: 'Yaklaşımımız', free: 'Ücretsiz kullanım', builtFor: 'Windows 11 için tasarlandı', mediaChip: 'MEDYA KONTROLÜ', themesChip: '8 FARKLI TEMA', scrollHint: 'DAHA FAZLASINI KEŞFET',
      sectionAbout: 'BİZ KİMİZ', aboutHeading: 'Az karmaşa.<br><span>Çok daha fazlası.</span>', aboutText: 'Hamage Software, güçlü işlevleri özenli tasarımla buluşturan bağımsız bir yazılım girişimidir. Amacımız teknolojiyi daha zahmetsiz hale getirmek.', brandCaption: 'TASARIM × TEKNOLOJİ × DENEYİM', sectionFeatured: 'ÖNE ÇIKAN ÜRÜN', storeDownload: "Microsoft Store'dan ücretsiz indir", comingSoon: "MICROSOFT STORE'DA YAYINDA ↗", novaIntro: 'Masaüstünün üzerinde yaşayan küçük, akıllı bir alan. Müziğinize, ses ayarlarınıza ve günlük anlarınıza tek bir akıcı kapsülden ulaşın.', platform: 'WINDOWS 11 / MASAÜSTÜ', productStageLabel: 'KÜÇÜK FORM. BÜYÜK DENEYİM.', previewLabel: '0.8.4 için temsili arayüz tasarımı · Microsoft Store’da yayımlandı',
      f1t: 'Medya, bir dokunuş uzağında.', f1d: 'Şarkı bilgileri, albüm kapağı ve oynatma kontrolleri; ihtiyacınız olduğunda genişleyen bir kapsülde.', f2t: 'Sesle eşzamanlı.', f2d: 'Windows ses düzeyi, sessize alma ve çıkış değişiklikleri için zarif geri bildirim.', f3t: 'Akıllı küçük anlar.', f3d: 'Zamanlayıcı, pil ve uyumlu Bluetooth ses aygıtı bildirimleri tek bir yerde.', f4t: 'Tamamen size ait.', f4d: 'Dynamic Dark dahil 8 görsel tema, 10 dil ve birden fazla ekran için kişiselleştirilebilir yerleşim.',
      designEthos: 'TASARIM ANLAYIŞIMIZ', manifestoHeading: 'Dikkat çekmek için değil.<br><em>Fark yaratmak için.</em>', m1: 'Kullanıcıyı yormayan, amacına hizmet eden arayüzler.', m2: 'Yüksek görsel kalite, kontrollü hareket ve düşük kaynak tüketimi.', m3: 'Her dilde ve her ekranda anlaşılır bir deneyim.', supportOverline: 'BAĞIMSIZ GELİŞTİRMEYİ DESTEKLE', supportTitle: 'İyi yazılım<br><em>birlikte büyür.</em>', supportLead: 'NOVA Capsule ücretsizdir. Geliştirmeye katkıda bulunmak isterseniz desteğiniz tamamen gönüllüdür; hiçbir özelliğe erişimi etkilemez.', supportButton: 'Bağış sayfasını aç', thirdParty: 'Ödeme işlemleri Buy Me a Coffee üzerinde gerçekleşir.', haveIdea: 'Bir fikriniz veya geri bildiriminiz mi var?', letsTalk: 'Konuşalım.', footerTag: 'Modern software, smart experiences.', privacyDraft: 'Gizlilik politikası',
      privacyEyebrow: 'ŞEFFAFLIK', privacyTitle: 'Gizlilik Politikası', privacyLead: 'NOVA Capsule 0.8.3 ve 0.8.4 sürümleri için gizlilik açıklaması. Son güncelleme: 17 Kasım 2026.', privacyWarning: 'ÖNEMLİ: Bu metin henüz taslaktır. NOVA Capsule kaynak kodu üzerinden veri işleme ve depolama denetimi tamamlanmadan Microsoft Store’da nihai gizlilik politikası olarak kullanılmamalıdır.', privacySection1: 'Uygulamanın işlediği bilgiler', privacyP1: 'Kullanıcı tarafından paylaşılan geliştirme raporlarına göre NOVA Capsule, işlevlerini sunmak amacıyla Windows medya oynatma bilgileri, sistem ses düzeyi, pil/şarj durumu ve uyumlu Bluetooth ses cihazı bilgilerine erişebilir. Hangi verilerin gerçekten işlendiği ve nerede saklandığı, yayın öncesinde kaynak koddan doğrulanacaktır.', privacySection2: 'Tercihler ve yerel saklama', privacyP2: 'Uygulama tema, dil, monitör ve görünürlük tercihlerini yeniden başlatmalar arasında koruyabilir. Bu verilerin saklama biçimi ve silinme davranışı teknik incelemenin ardından burada ayrıntılandırılacaktır.', privacySection3: 'Ağ, üçüncü taraflar ve ödemeler', privacyP3: 'Bu sitedeki gönüllü destek bağlantısı, kullanıcıyı Buy Me a Coffee sitesine yönlendirir. Ödeme işlemlerini Hamage web sitesi gerçekleştirmez. NOVA uygulamasının diğer ağ iletişimleri ve olası veri aktarımları kod incelemesi tamamlanana kadar doğrulanmış sayılmamalıdır.', privacySection4: 'İletişim ve güncellemeler', privacyP4: 'Gizlilikle ilgili sorularınızı aşağıdaki e-posta adresine gönderebilirsiniz. Bu metin, kaynak kod incelemesi ve mağaza hazırlık kontrolleri tamamlandığında güncellenecektir.', privacyContact: 'İletişim', privacyUpdated: 'Son güncelleme: 17 Kasım 2026', privacyBack: '← Ana sayfaya dön'
    },
    en: {
      skip: 'Skip to content', navAbout: 'About', navNova: 'NOVA Capsule', navSupport: 'Support', navPrivacy: 'Privacy', contact: 'Contact',
      heroEyebrow: 'INDEPENDENT SOFTWARE STUDIO', heroTitle: 'Technology should feel <em>effortless.</em>', heroLead: 'We craft software that makes everyday experiences smoother, smarter, and a little more beautiful.', discoverNova: 'Discover NOVA', ourApproach: 'Our approach', free: 'Free to use', builtFor: 'Crafted for Windows 11', mediaChip: 'MEDIA CONTROL', themesChip: '8 VISUAL THEMES', scrollHint: 'SCROLL TO EXPLORE',
      sectionAbout: 'WHO WE ARE', aboutHeading: 'Less noise.<br><span>More possibility.</span>', aboutText: 'Hamage Software is an independent software initiative combining useful functionality with thoughtful design. Our aim is to make technology feel effortless.', brandCaption: 'DESIGN × TECHNOLOGY × EXPERIENCE', sectionFeatured: 'FEATURED PRODUCT', storeDownload: 'Download free on Microsoft Store', comingSoon: 'AVAILABLE ON MICROSOFT STORE ↗', novaIntro: 'A small, intelligent space that lives above your desktop. Music, volume, and everyday moments come together in one fluid capsule.', platform: 'WINDOWS 11 / DESKTOP', productStageLabel: 'SMALL FORM. BIG EXPERIENCE.', previewLabel: 'Illustrative 0.8.4 interface preview · Available on Microsoft Store',
      f1t: 'Media at your fingertips.', f1d: 'Track information, artwork, and playback controls in a capsule that expands when you need it.', f2t: 'In tune with your sound.', f2d: 'Elegant feedback for Windows volume, mute, and output-device changes.', f3t: 'Smarter little moments.', f3d: 'Timer, battery, and compatible Bluetooth audio-device notifications in one place.', f4t: 'Make it yours.', f4d: '8 themes including Dynamic Dark, 10 languages, and positioning across multiple monitors.',
      designEthos: 'OUR DESIGN PHILOSOPHY', manifestoHeading: 'Not just to stand out.<br><em>To make a difference.</em>', m1: 'Interfaces that respect your focus and serve a clear purpose.', m2: 'High visual quality, considered motion, and light resource usage.', m3: 'An experience that stays understandable across languages and screens.', supportOverline: 'SUPPORT INDEPENDENT DEVELOPMENT', supportTitle: 'Good software<br><em>grows together.</em>', supportLead: 'NOVA Capsule is free. If you would like to support its development, contributions are entirely optional and do not unlock or restrict any features.', supportButton: 'Open support page', thirdParty: 'Payments are processed on Buy Me a Coffee.', haveIdea: 'Have an idea or feedback?', letsTalk: "Let's talk.", footerTag: 'Modern software, smart experiences.', privacyDraft: 'Privacy policy',
      privacyEyebrow: 'TRANSPARENCY', privacyTitle: 'Privacy Policy', privacyLead: 'NOVA Capsule privacy information for versions 0.8.3 and 0.8.4. Last updated: November 17, 2026.', privacyWarning: 'IMPORTANT: This page is a draft, not a final privacy policy. It must not be submitted to Microsoft Store as a finalized policy until the NOVA Capsule source code has been reviewed for data processing and storage.', privacySection1: 'Information the application may process', privacyP1: 'Based on development reports provided by the project owner, NOVA Capsule may access Windows media playback information, system volume, battery/charging status, and compatible Bluetooth audio-device information to provide its functionality. The exact data processed and where it is stored remain subject to source-code verification before release.', privacySection2: 'Preferences and local storage', privacyP2: 'The app may preserve theme, language, monitor, and visibility preferences across restarts. How these preferences are stored and deleted will be specified after technical review.', privacySection3: 'Network, third parties, and payments', privacyP3: 'The voluntary support link on this site directs users to Buy Me a Coffee. Hamage’s website does not process payments. Other NOVA application network activity and any potential data transfers have not yet been verified through source review.', privacySection4: 'Contact and updates', privacyP4: 'For privacy questions, contact us at the address below. This statement will be updated after source-code review and Store readiness checks.', privacyContact: 'Contact', privacyUpdated: 'Last updated: November 17, 2026', privacyBack: '← Back to homepage'
    }
  };
  const getLanguage = () => {
    try { const v=localStorage.getItem('hamage-language'); if(v==='tr'||v==='en') return v; } catch(e) {}
    return navigator.language.toLowerCase().startsWith('tr')?'tr':'en';
  };
  let lang = getLanguage();
  function applyLanguage(next){
    lang=next;
    document.documentElement.lang=lang;
    const dict=strings[lang];
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.dataset.i18n;
      if(!(key in dict)) return;
      const value=dict[key];
      if(['heroTitle','aboutHeading','manifestoHeading','supportTitle'].includes(key)) el.innerHTML=value;
      else el.textContent=value;
    });
    document.querySelectorAll('[data-policy-lang]').forEach(el => { el.hidden = el.getAttribute('data-policy-lang') !== lang; });
    const label=document.getElementById('lang-label');
    if(label) label.textContent=lang==='tr'?'EN':'TR';
    const btn=document.getElementById('lang-toggle');
    if(btn) btn.setAttribute('aria-label',lang==='tr'?'Switch to English':'Türkçe olarak görüntüle');
    document.title = /\/privacy\.html$/i.test(location.pathname) ? (lang==='tr' ? 'NOVA Capsule — Gizlilik Politikası | Hamage Software' : 'NOVA Capsule — Privacy Policy | Hamage Software') : (lang==='tr' ? 'Hamage Software — Modern yazılımlar, akıllı deneyimler.' : 'Hamage Software — Modern software, smart experiences.');
    try{localStorage.setItem('hamage-language',lang);}catch(e){}
  }
  document.getElementById('lang-toggle')?.addEventListener('click',()=>applyLanguage(lang==='tr'?'en':'tr'));
  applyLanguage(lang);
  document.getElementById('year')?.replaceChildren(document.createTextNode(String(new Date().getFullYear())));
  const menuBtn=document.getElementById('menu-toggle');
  const menu=document.getElementById('primary-nav');
  if(menuBtn&&menu){
    const setOpen=open=>{menu.classList.toggle('is-open',open);menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Close menu':'Open menu')};
    menuBtn.addEventListener('click',()=>setOpen(!menu.classList.contains('is-open')));
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false)});
  }
  if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    const nodes=document.querySelectorAll('.feature-tile,.section-heading,.manifesto-grid,.support-card,.nova-heading');
    nodes.forEach(x=>x.classList.add('reveal'));
    const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{rootMargin:'0px 0px -30px 0px',threshold:.06});
    nodes.forEach(x=>observer.observe(x));
  }
})();
