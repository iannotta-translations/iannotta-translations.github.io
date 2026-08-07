# 📘 Guida per la Modifica del Sito — Alessia Iannotta Portfolio

Benvenuta nella guida per la gestione autonoma del tuo sito web portfolio! 
Tutto il sito è stato progettato per permetterti di modificare **testi, immagini, tariffe, domande FAQ, statistiche e servizi** in totale autonomia, senza dover mai scrivere codice.

---

## 🛠️ Metodo 1: Modifica Grafica da Browser (Consigliato — Nessun Codice)

Puoi gestire i contenuti del sito attraverso un'interfaccia grafica moderna (tipo WordPress o Squarespace) tramite **Pages CMS**:

1. Apri il browser e vai su **[https://pagescms.org](https://pagescms.org)**.
2. Clicca su **"Sign in with GitHub"** e fai l'accesso con il tuo account GitHub.
3. Seleziona il repository: `iannotta-translations/iannotta-translations.github.io`.
4. Nel menu a sinistra vedrai tutte le sezioni ordinate:
   - 🏠 **PAGINA HOME — Testi principali & Servizi**: Modifica il titolo di copertina, la descrizione principale, le sezioni dei servizi e i punti elenco.
   - 📊 **PAGINA HOME — FAQ, Tariffe, Statistiche, CAT Tools**: Cambia i prezzi del calcolatore, aggiungi/modifica le risposte FAQ, aggiorna i numeri del banner statistico e la lista dei CAT tools.
   - 👩‍💼 **PAGINA CHI SONO**: Aggiorna la tua biografia, la formazione e i valori.
   - ✉️ **PAGINA CONTATTI**: Modifica i testi di contatto e le garanzie.
5. Dopo aver fatto le modifiche, clicca sul pulsante **"Salva e Pubblica"** in alto a destra.

> ⏱️ **Nota**: Dopo aver premuto Salva, il sito si aggiornerà automaticamente online in circa 1-2 minuti!

---

## ✏️ Metodo 2: Modifica Rapida direttamente da GitHub Web

Se vuoi fare un piccolo cambio al volo da qualsiasi computer o smartphone:

1. Vai sul tuo repository GitHub: `https://github.com/iannotta-translations/iannotta-translations.github.io`.
2. Naviga nel file che vuoi modificare:
   - **Per FAQ, Tariffe e Statistiche**: Clicca sulla cartella `data/` ➔ poi su `homepage.json`.
   - **Per la copertina ed i servizi in Home**: Clicca su `content/` ➔ poi su `_index.md`.
   - **Per la biografia**: Clicca su `content/` ➔ `about/` ➔ `_index.md`.
   - **Per la pagina Servizi**: Clicca su `content/` ➔ `services/` ➔ `_index.md`.
   - **Per i Contatti**: Clicca su `content/` ➔ `contact/` ➔ `_index.md`.
3. Clicca sull'icona della **matita ✏️** (in alto a destra del file) per modificarlo.
4. Modifica il testo desiderato.
5. Clicca sul pulsante verde **"Commit changes..."** per salvare.

---

## 🧮 Come modificare le Tariffe del Calcolatore Preventivo

Per cambiare le tariffe base o il prezzo minimo per progetto, apri il file `data/homepage.json` (tramite Pages CMS o GitHub):

```json
"calculator": {
  "default_words": 1500,
  "min_fee": 25,
  "rates": {
    "translation": 0.08,    <-- Tariffa Traduzione (€ / parola)
    "localization": 0.09,   <-- Tariffa Localizzazione (€ / parola)
    "revision": 0.04,       <-- Tariffa Revisione (€ / parola)
    "postediting": 0.05     <-- Tariffa Post-Editing (€ / parola)
  }
}
```

Basterà cambiare i valori numerici (es. da `0.08` a `0.09`) e salvare! Il calcolatore in homepage aggiornerà istantaneamente le stime per tutti i visitatori.

---

## ❓ Come Aggiungere o Modificare una Domanda FAQ

Nel file `data/homepage.json`, nella sezione `"faqs"`, puoi aggiungere o modificare qualsiasi domanda e risposta:

```json
{
  "question": "Quali formati di file puoi gestire?",
  "answer": "Posso lavorare su quasi qualsiasi formato standard: Word, PDF, XLIFF, JSON..."
}
```

Per aggiungere una nuova domanda, ti basterà copiare un blocco esistente, incollarlo in fondo alla lista e modificare domanda e risposta!

---

## 🖼️ Sostituzione delle Immagini

Tutte le immagini utilizzate nel sito si trovano nella cartella `static/images/`:
- `alessia-profile.png` ➔ Foto del profilo nella pagina Chi Sono.
- `banner.png` ➔ Immagine della copertina in Homepage.
- `cta.png` ➔ Immagine della sezione "Hai un progetto da tradurre?".
- `service-1.png`, `service-2.png`, `service-3.png` ➔ Immagini dei servizi.

Per sostituire un'immagine:
1. Prepara la nuova immagine in formato `.png` o `.jpg`.
2. Caricala tramite Pages CMS oppure dentro la cartella `static/images/` su GitHub mantenendo lo stesso nome file (oppure aggiorna il percorso nel file `.md`).

---

## 🚀 Assistenza & Supporto

Il sito è configurato con **GitHub Actions**: ad ogni salvataggio dei file, il sistema ricompila ed esegue il deploy automatico del sito in totale sicurezza.

In caso di dubbi o se hai bisogno di nuove funzionalità, il repository conserva lo storico completo di tutte le modifiche per garantire un ripristino istantaneo in qualsiasi momento!
