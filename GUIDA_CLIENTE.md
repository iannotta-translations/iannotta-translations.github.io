# 📘 Guida per la Modifica del Sito — Alessia Iannotta Portfolio

Benvenuta nel tuo **Pannello di Amministrazione e Gestione del Sito**!
Tutto il portfolio è stato strutturato con un'interfaccia grafica su misura per permetterti di cambiare **tariffe, testi, risposte FAQ, statistiche e servizi** in totale autonomia senza toccare codice.

---

## 🖥️ Come usare il Pannello Grafico (`/admin/`)

1. Apri nel browser l'indirizzo del tuo pannello:  
   👉 **[iannotta-translations.github.io/admin/](https://iannotta-translations.github.io/admin/)**

2. **Primo Accesso (Inserimento Chiave Token)**:
   - Al primo avvio ti verrà chiesta la **Chiave di Accesso (GitHub Token)**.
   - Basterà inserire la tua chiave e cliccare su **"Salva Chiave"**. La chiave rimarrà salvata in modo sicuro esclusivamente nel tuo browser.

3. **Le Sezioni del Pannello**:
   - 🧮 **Tariffe & Calcolatore**: Cambia con un semplice numero le tariffe al parola per Traduzione (€0.08), Localizzazione (€0.09), Revisione (€0.04) o Post-Editing (€0.05) ed il prezzo minimo del progetto.
   - ❓ **Domande Frequenti (FAQ)**: Modifica le domande/risposte esistenti o aggiungine di nuove con il pulsante **"➕ Nuova Domanda"**.
   - 🏠 **Testi Homepage & Banner**: Modifica il titolo di copertina e il messaggio di presentazione.
   - 📊 **Statistiche & CAT Tools**: Cambia i numeri del banner statistico (*500k+ Parole*, *100% Consegne*) ed i testi dei software.

4. **Salvataggio & Pubblicazione**:
   - Clicca sul pulsante blu **"💾 Salva e Pubblica"** in alto a destra di ciascuna sezione.
   - Riceverai la notifica verde: *"🚀 Modifiche salvate con successo!"*.
   - Il sito si aggiornerà da solo online in **circa 60 secondi**!

---

## ✏️ Alternativa Rapida da GitHub Web

Se vuoi fare una modifica rapida direttamente da smartphone o qualsiasi dispositivo senza accedere al pannello:

1. Vai sul tuo repository GitHub: **[github.com/iannotta-translations/iannotta-translations.github.io](https://github.com/iannotta-translations/iannotta-translations.github.io)**
2. Apri la cartella **`data/`** ➔ clicca su **`homepage.json`**.
3. Clicca sull'icona della **matita ✏️** (in alto a destra).
4. Modifica le cifre o i testi desiderati.
5. Clicca sul pulsante verde **"Commit changes..."**.

---

## 🧮 Esempio Pratico: Cambiare le Tariffe

Per esempio, per portare la tariffa di Traduzione Specialistica da **0.08 €** a **0.09 €**:
1. Apri il pannello **`/admin/`**.
2. Nella scheda **🧮 Tariffe & Calcolatore**, cambia il valore nel campo **Traduzione Specialistica** da `0.08` a `0.09`.
3. Clicca su **"💾 Salva e Pubblica Tariffe"**.
4. Fatto! Il calcolatore preventivi in homepage calcolerà istantaneamente tutti i nuovi preventivi con la nuova tariffa!
