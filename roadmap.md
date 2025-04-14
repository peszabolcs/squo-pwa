🖌️ Design implementálás

Splash screen

index.html + manifest.json beállítás

App iconok több méretben (192x192, 512x512)

Főmenü komponensek

Automata kereső

Pontgyűjtés

Fenntarthatósági statisztika

Kampányok

Admin

Közösség

Routing

Angular router setup minden oldalhoz

🚀 Fejlesztési ütemezés

Sprint 1: Alap setup és navigáció

Projekt inicializálás

Routing és oldalváz

Splash screen és telepíthetőség

Sprint 2: Oldalstruktúra és statikus tartalom

Minden menüpont statikus oldal létrehozása

Navigáció működésre hozása

Sprint 3: Backend integráció

Firebase Firestore setup

Kollekciók: automatak, kampanyok, velemenyek, pontgyujtes

Firestore Service Angular projektben

Sprint 4: Dinamikus funkciók

Automatakereső Google Maps API-val

Pontgyűjtés dinamikus pontkezeléssel

Kampányok dinamikus megjelenítés

Vélemény beküldése + listázás

Admin felület: automaták állapota dinamikusan

Sprint 5: PWA optimalizáció és tesztelés

Service Worker cache stratégia optimalizálása

Offline fallback oldal

Lighthouse tesztelés + optimalizálás

Sprint 6: Deploy & Store ready

Firebase deploy / Netlify / Vercel

Trusted Web Activity build Google Play Store-hoz

Shell app build Apple App Store-hoz (opcionális)

🧩 Extra funkciók

Firebase Cloud Messaging: Push értesítés

Google Analytics: Felhasználói viselkedés követés

Admin bővítés: státusz frissítés, részletes automaták adatok

Animációk, loading state finomítás

🌍 Deployment

Firebase deploy:

firebase init
firebase deploy

Google Play Store:

Bubblewrap CLI telepítés

npm install -g @bubblewrap/cli
bubblewrap init --manifest=https://your-domain/manifest.json
bubblewrap build

APK feltöltése Google Play Console-ra

Apple App Store:

Shell app létrehozása SwiftUI-val vagy Capacitorral

Apple Developer regisztráció és App Store Connect feltöltés

📝 Megjegyzések a Coding Agent részére

Képek, ikonok exportálása látványtervek alapján

Színek, gradientek Tailwind CSS-ben a látványtervhez igazítva

Fájlszerkezetet Angular CLI generálja, de ajánlott features alapú felosztás (pages, components, services, models, assets, environments)

Minden oldal mobil-first, reszponzív design

Kód kommentálása opcionális, de ajánlott későbbi fejlesztésekhez

✅ Várható eredmény

Telepíthető PWA mobil eszközökön

Készen áll Google Play Store feltöltésre Trusted Web Activity segítségével

App Store feltöltés opcionális shell app segítségével

Teljes funkcionalitás: automatakereső, pontgyűjtés, kampányok, közösségi vélemények, admin panel
