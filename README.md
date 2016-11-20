#Mozi jegyeladásait kezelő rendszer

## Célkitűzés
 
A program egy mozi jegyeladásait fogja tudni kezelni. 
 
A szoftver legfontosabb feladata, hogy képes legyen a megfelelő felhasználói igényeket kielégíteni, amely két felhasználói körre is bontható. A mozi részéről lehetőség lesz új előadásokat meghirdetni, törölni. Illetve a szolgáltatás használójaként lehetőség lesz majd a meghirdetett filmeket megtekinteni, s ezekre helyet foglalni. 
 
Ezen program tehát összekapcsolja a két felhasználói kört, s segíti a mozi könnyebb működését, a nehézségek elkerülésével.

## Nem funkcionális követelmények
 
### Megbízhatóság
- Sérült adatok esetén az összes korábbi tartalom elveszhet
- A felhasználói bevitel ellenőrzött, csak helyes bevitelt fogad el az alkalmazás 
- A megbízhatóan kezelhető adatok mennyisége korlátozott
- Az adatok sérülhetnek bezáráskor történő összeomláskor 
- Az adatok adatbázisban tárolódnak, az adatbázis sérülésével a még nem rögzített adatok elveszhetnek 
 
### Biztonság
- Nincs konkrét garancia az adatok biztonságára 
- Egyes funkciók jelszóval levédettek lesznek 
 
### Hatékonyság
- A program válaszideje gyors minden funkcióra
- Az indítás és bezárás hosszabb időt vehet igénybe, függően a teljes adatmennyiségtől 
 
### Felhasználhatóság 
- Minden programfunkciónak áttekinthetőnek kell lennie
- A kezelést könnyíteni kell az egyes funkciógombok és szövegek megfelelő méretével
- A filmek esetén szükséges egy keresés input mező, mely azonnal listázza a megfelelő adatokat
- Felhasználóbarát, ergonomikus elrendezés és kinézet

## Funkcionális követelmények

### Vendég:
- Vendégként szeretnék regisztrálni az oldalra
- Vendégként a főoldalon szeretnék kiemelt filmeket látni
- Vendégként szeretnék a filmek között szabadon böngészni
- Vendégként szeretnék filmeknél leírást megtekinteni
- Vendégként szeretnék filmeket keresni

### Felhasználó:
- Felhasználóként szeretnék belépni
- Felhasználóként szeretném az adataimat szerkeszteni
- Felhasználóként szeretnék meghirdetett filmekre jegyet foglalni (név, e-mail cím, telefonszám adatokkal), s egy generált kódot szeretnék kapni, a jegyvételkor visszaigazoláshoz
- Felhasználóként szeretném esetlegesen a foglalt film visszamondását

### Adminisztrátor (mozi alkalmazottja)
- Alkalmazottként szeretnék belépni az adminisztrációs felületre
- Alkalmazottként szeretnék új filmeket meghirdetni (terem, film, időpont megadásával)
- Alkalmazottként szeretnék meghirdetett filmeket törölni.
- Alkalmazottként szeretnék filmekhez előadás időpontot hirdetni.

## Szakterületi fogalomjegyzék

- Multiplex mozi: plázákban üzemelő, soktermes mozik, komolyabb felszereléssel, mint pl. hangtechnikai különbségek.
- 3D: Térhatású film
- 4D: Minden egyes film a részletesen megkoreografált levegő-, víz-, illat-, mozgás-, vibrációs, stb. hatásokkal a hagyományos moziterem audiovizuális ingereit messze felülmúlva hat a nézőkre, akik teljesen elmélyülhetnek és az akció részeseivé válhatnak.
- IMAX: filmformátum, amely a hagyományosnál sokkal nagyobb méretű és felbontású képek vetítésére szolgál


## Szerepkörök

- Vendég: Filmek keresését, böngészését, megtekintését végezheti, illetve regisztrálhat
- Alkalmazott: Új filmeket képes meghirdetni, illetve törölni
- Felhasználó: Filmek keresését, böngészését, megtekintését, film foglalását, s annak visszamondását végezheti, illetve bejelentkezhet


## Használati eset diagram
![alt tag](https://github.com/ildy95/alkfejl_2016_8_mozirendszer/blob/master/pics/cinema.png)

## Folyamatok

* Vendég és felhasználó:

![alt tag](https://github.com/ildy95/schoolproject/blob/master/pics/bejelentkez%C3%A9s_felhasznal%C3%B3.png)

![alt tag](https://github.com/ildy95/schoolproject/blob/master/pics/adatok_modositasa.png)

![alt tag](https://github.com/ildy95/schoolproject/blob/master/pics/jegyfoglal%C3%A1s.png)

![alt tag](https://github.com/ildy95/schoolproject/blob/master/pics/foglal%C3%A1s%20visszamond%C3%A1sa.png)

* Alkalmazott:

![alt tag](https://github.com/ildy95/schoolproject/blob/master/pics/bejelentkez%C3%A9s_admin.png)

![alt tag](https://github.com/ildy95/schoolproject/blob/master/pics/%C3%BAj%20film%20hozz%C3%A1ad%C3%A1sa.png)




## Oldaltérkép

### Publikus:
 - Főoldal
 - Filmek böngészése
    + Film megtekintése
 - Belépés
 - Regisztráció
 
### Felhasználó:
 - Kilépés
 - Profiladatok
    + Profiladatok szerkesztése
 - Filmlista
    + Film megtekintése
       * Foglalás
       * Foglalás visszamondása

### Alkalmazott:
 - Belépés
 - Profiladatok
 - Új film felvétele
 - Új előadás hirdetése egy filmre


## Végpontok

- GET /: főoldal
- GET /login: bejelentkező oldal
- POST /login: bejelentkezési adatok felküldése
- GET /register: regisztrációs oldal
- POST /register: bejelentkezési adatok felküldése
- GET /profile: profiladatok
- GET /films: filmlista
- GET /films/:id : film megtekintése
- GET /films/:id/reservation: adott filmre hely foglalása
- GET /films/create: új film létrehozása
- POST /films/create: új film felvitele, adatok küldése

## Oldalvázlatok

Az alábbi linken megtekinthető: https://app.moqups.com/ildy95/sLaWCR8v1S/view/page/a298270dc

## Adatmodell

![alt tag](https://github.com/ildy95/schoolproject/blob/master/pics/adatmodell.png)

## Adatbázisterv

![alt tag](https://github.com/ildy95/schoolproject/blob/master/pics/Adatbazism.png)

## Állapotdiagram

![alt tag](https://github.com/ildy95/schoolproject/blob/master/pics/regisztr%C3%A1ci%C3%B3%20visszaigazol%C3%A1ssal.png)



