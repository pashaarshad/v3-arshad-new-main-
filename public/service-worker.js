const CACHE_NAME = 'arshad-pasha-portfolio-cache-v1';
const urlsToCache = [
    '/',
    '/manifest.json',
    '/ap_logo.png',
    '/arshad_about.jpg',
    '/arshad_home_good.jpg',
    '/arshad_infosysLogo.jpg',
    '/arshad_infosys_about.jpg',
    '/arshad_sap_about.jpg',
    '/arshad_sap_home.jpg',
    '/contact_us.png',
    '/file.svg',
    '/globe.svg',
    '/home_img.png',
    '/logo_web.png',
    '/nav_Logo_new.png',
    '/nav_logo.png',
    '/next.svg',
    '/okold.jpg',
    '/robots.txt',
    '/sitemap.xml',
    '/vercel.svg',
    '/window.svg',
    '/assets/img/CSS.svg',
    '/assets/img/Git.svg',
    '/assets/img/Github-Dark.svg',
    '/assets/img/HTML.svg',
    '/assets/img/JavaScript.svg',
    '/assets/img/Netlify-Dark.svg',
    '/assets/img/NodeJS-Dark.svg',
    '/assets/img/PHP-Dark.svg',
    '/assets/img/Uiuxtocode.png',
    '/assets/img/VSCode-Dark.svg',
    '/assets/img/ap_bg.png',
    '/assets/img/aplogo (16x16).png',
    '/assets/img/aplogo(32x32).png',
    '/assets/img/aplogo.jpg',
    '/assets/img/aplogo.png',
    '/assets/img/arshad.jpg',
    '/assets/img/arshad65.42web.io.png',
    '/assets/img/arshad786.42web.io.png',
    '/assets/img/arshad_infosys.jpg',
    '/assets/img/arshad_infosysLogo.jpg',
    '/assets/img/arshaddream.png',
    '/assets/img/bgok.png',
    '/assets/img/bharathi_mam_vap.png',
    '/assets/img/c++.png',
    '/assets/img/cv_img.png',
    '/assets/img/digital-art.png',
    '/assets/img/elementmix.png',
    '/assets/img/first-game.png',
    '/assets/img/github.png',
    '/assets/img/happy_website1.png',
    '/assets/img/httpssandhyaachari.netlify.app.png',
    '/assets/img/infosysLogojpg',
    '/assets/img/infosys_hackthon.png',
    '/assets/img/java.svg',
    '/assets/img/khazi.png',
    '/assets/img/linkdinNewLogo.webp',
    '/assets/img/linkdin_logo.webp',
    '/assets/img/logoarshad.jpg',
    '/assets/img/logoarshadnew.png',
    '/assets/img/logoi.webp',
    '/assets/img/logow.png',
    '/assets/img/masjid.png',
    '/assets/img/myntra-clone.png',
    '/assets/img/p1.png',
    '/assets/img/project0.png',
    '/assets/img/project10.png',
    '/assets/img/project5.png',
    '/assets/img/project9new.png',
    '/assets/img/qrcode.png',
    '/assets/img/rahul-class-Redigsied-Real_website.png',
    '/assets/img/rashami.png',
    '/assets/img/rashmi-newv2.png',
    '/assets/img/sdcvo.png',
    '/assets/img/sql.svg',
    '/assets/img/tfweb.png',
    '/assets/img/think41-e.png',
    '/assets/img/todo.png',
    '/assets/img/todolistnextjs.png',
    '/assets/img/totalwellness.netlify.app.png',
    '/favicon.ico',
    '/globals.css',
    '/layout.tsx',
    '/page.tsx',
    '/components/About.tsx',
    '/components/Certificates.tsx',
    '/components/Contact.tsx',
    '/components/Footer.tsx',
    '/components/Home.tsx',
    '/components/InteractiveSlider.tsx',
    '/components/Internships.tsx',
    '/components/PixelBlast.tsx',
    '/components/PixelEffect.tsx',
    '/components/Projects.tsx',
    '/components/Skills.tsx',
    '/components/ThemeToggle.tsx',
    '/components/nav.tsx',
    '/context/ThemeContext.tsx',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
