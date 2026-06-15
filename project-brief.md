# Recalibrare — Project brief

Rezumat al deciziilor luate până acum, util ca punct de referință când continui
lucrul în VS Code (sau cu Claude Code).

## Ce este site-ul

Site de prezentare pentru Recalibrare — brandul de coaching al Roxanei, orientat
spre persoane care conduc (manageri, fondatori de startup-uri, team leads),
indiferent de țară sau titlu. Conținutul e în engleză (audiența validată e
internațională: Germania, US, India, UK etc.), nu în română.

## Status actual

Fișiere existente: `index.html`, `style.css` — o pagină unică (one-page), cu
secțiuni: Hero, About, Who it's for, Services (2 carduri), Contact, Footer.

## Decizii de design

- **Paletă**: gri-bej cald ("paper"), text negru cald, accent principal
  verde-mușchi, accent secundar argilă (folosit doar pentru butoane CTA).
  Variabile definite în `:root` din `style.css` — schimbi culorile dintr-un
  singur loc.
- **Tipografie**: Fraunces (serif, titluri) + Work Sans (body), via Google
  Fonts.
- **Element de semnătură**: "rigla de calibrare" — un divider vizual cu mai
  multe repere mici și unul evidențiat (clasa `.divider` / `.divider-mark`),
  repetat între secțiuni. Reflectă ideea de "recalibrare" / a-ți găsi reperul.
- Layout single-column, max-width ~760px, responsive (cardurile de servicii
  se pun una sub alta sub 700px).

## Decizii de conținut

- **Titlu hero**: "How would you like to see happen?" — formulare intenționat
  agramaticală (forțează gândirea la rezultat dinspre viitor-spre-trecut, ca
  tehnică de coaching). Sub el, o notă mică, italică, care semnalează că e
  intenționat — pentru credibilitate la cititori mai puțin tolerați la greșeli
  gramaticale.
- **Cine sunt** (About): combină observație → experiență → intuiție + povestea
  despre intraprenoriat în roluri corporate (a creat spațiu pentru oameni
  acolo unde sistemul rigid nu permitea, cu rezultate de business + transparență
  pentru echipă).
- **Pentru cine**: lideri indiferent de titlu/mărimea companiei — manageri,
  fondatori de startup, team leads. Mesaj păstrat deschis, nu segmentat pe
  categorii separate.
- **Servicii**:
  - *Clarity session* — primă întâlnire, fără presiune, scop = spațiu de
    încredere/confidențialitate. Poate fi suficientă singură sau poate duce
    spre program.
  - *Recalibration program* — minim 3 ședințe (poate continua dacă e nevoie),
    primele 2 săptămânale, a treia la 2 săptămâni. Rezultat: problema devine
    "loc cu mai multe soluții posibile".
- **Contact**: două CTA-uri — programare directă (Calendly/Cal.com) și mesaj
  pe LinkedIn pentru cei care vor mai întâi o conexiune informală.

## De făcut / TODO

- [ ] Înlocuiește cele 4 link-uri `href="#"` din zona de contact cu:
      - link-ul real de Calendly/Cal.com
      - link-ul de profil LinkedIn
- [ ] (Opțional, mai târziu) Variantă în română — copiezi `index.html` într-un
      `index-ro.html` sau folder `/ro/`, traduci, adaugi switch RO/EN în header.
- [ ] Verifică spațierea din meniul de navigare (About / Services / Contact) —
      ar trebui să fie spațiate (gap în `.nav`); a apărut o anomalie într-un
      instrument de preview, posibil fără relevanță în browser real.
- [ ] (Opțional) "Rigla de calibrare" e momentan discretă — de mărit/accentuat
      dacă vrei să fie mai prezentă vizual.

## Cum continui în VS Code

1. Pune `index.html` și `style.css` în același folder.
2. Deschide folderul în VS Code, ideal cu extensia Live Server pentru preview
   live.
3. Dacă folosești Claude Code, dă-i acest fișier ca context la început de
   sesiune.
