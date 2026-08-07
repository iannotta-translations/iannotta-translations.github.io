# 📘 Guida Definitiva per la Modifica del Sito — Alessia Iannotta Portfolio

Benvenuta nella guida per la gestione autonoma del tuo sito web portfolio! 
Tutto il sito è stato strutturato in modo che **testi, immagini, tariffe, domande FAQ e statistiche** risiedano in semplici file di testo che puoi modificare in qualsiasi momento.

---

## 💡 Informazione sull'errore "Something went wrong (Server Components)"
Se un servizio web esterno mostra una schermata di errore di server (come *Next.js Server Components Error*), non temere: **il tuo sito web non dipende da nessun server esterno!**

Per garantire l'accessibilità 100% in ogni momento, hai a disposizione **due metodi garantiti** che non falliscono mai.

---

## ✏️ Metodo 1: Modifica Diretta da GitHub Web (Garantito 100% — Nessun Software)

È il metodo più veloce, nativo e affidabile in assoluto. Funziona da qualsiasi browser (computer, tablet o smartphone):

1. Vai sul tuo repository GitHub:  
   👉 **[github.com/iannotta-translations/iannotta-translations.github.io](https://github.com/iannotta-translations/iannotta-translations.github.io)**
2. Apri il file che desideri modificare:
   - **Per FAQ, Tariffe del Calcolatore e Statistiche**: Apri la cartella `data/` ➔ clicca su **`homepage.json`**.
   - **Per la Copertina ed i Servizi in Home**: Apri la cartella `content/` ➔ clicca su **`_index.md`**.
   - **Per la biografia nella pagina Chi Sono**: Apri `content/` ➔ `about/` ➔ **`_index.md`**.
   - **Per la pagina Servizi**: Apri `content/` ➔ `services/` ➔ **`_index.md`**.
   - **Per i testi dei Contatti**: Apri `content/` ➔ `contact/` ➔ **`_index.md`**.
3. Clicca sull'icona della **matita ✏️** ("Edit this file") in alto a destra.
4. Modifica i testi o i numeri desiderati.
5. Clicca sul pulsante verde **"Commit changes..."** per salvare.

> ⏱️ **Nota**: Appena salvi, GitHub Pages aggiorna automaticamente il tuo sito live in **1-2 minuti**!

---

## 🖥️ Metodo 2: Pannello Grafico Decap CMS (`/admin/`)

Abbiamo integrato un pannello di gestione dei contenuti ospitato **direttamente sul tuo sito web**:

1. Apri nel browser:  
   👉 **[iannotta-translations.github.io/admin/](https://iannotta-translations.github.io/admin/)**
2. Clicca su **"Login with GitHub"**.
3. Troverai un'interfaccia grafica a moduli per modificare le sezioni senza toccare il testo grezzo:
   - *Campi di testo* per titoli e descrizioni
   - *Selettori di immagini* per le foto
   - *Liste di FAQ* e *Tariffe del calcolatore*
4. Clicca su **"Publish"** (Pubblica) per applicare le modifiche.

---

## 🧮 Come modificare le Tariffe del Calcolatore Preventivo

Apri il file **`data/homepage.json`** (usando il Metodo 1 o 2):

```json
"calculator": {
  "default_words": 1500,
  "min_fee": 25,
  "rates": {
    "translation": 0.08,    <-- Cambia qui la tariffa Traduzione (€/parola)
    "localization": 0.09,   <-- Cambia qui la tariffa Localizzazione (€/parola)
    "revision": 0.04,       <-- Cambia qui la tariffa Revisione (€/parola)
    "postediting": 0.05     <-- Cambia qui la tariffa Post-Editing (€/parola)
  }
}
```

Basterà cambiare la cifra (es. da `0.08` a `0.09`) e fare **Commit changes**! Il calcolatore in homepage aggiornerà immediatamente le stime per tutti i visitatori del sito.

---

## ❓ Come Aggiungere o Modificare una Domanda FAQ

Nel file **`data/homepage.json`**, nella sezione `"faqs"`, puoi cambiare o aggiungere qualsiasi domanda:

```json
{
  "question": "Quali formati di file puoi gestire?",
  "answer": "Posso lavorare su quasi qualsiasi formato standard: Word, PDF, XLIFF, JSON..."
}
```

Per inserire una nuova domanda, ti basterà copiare una riga esistente, incollarla sotto e cambiare il testo!

---

## 🖼️ Sostituzione delle Immagini

Tutte le immagini si trovano nella cartella **`static/images/`**:
- `alessia-profile.png` ➔ Foto del profilo nella pagina Chi Sono.
- `banner.png` ➔ Immagine della copertina in Homepage.
- `cta.png` ➔ Immagine del riquadro "Hai un progetto da tradurre?".

Per sostituire un'immagine:
1. Prepara la nuova foto con lo stesso nome file (es. `alessia-profile.png`).
2. Vai su GitHub nella cartella `static/images/`, fai clic su **"Add file" ➔ "Upload files"** e trascina la nuova immagine!
