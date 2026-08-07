/**
 * Alessia Iannotta Portfolio — Interactive Features
 * Includes: Quote Estimator Calculator, FAQ Accordion, Contact Form Pre-fill
 */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllFeatures);
} else {
  initAllFeatures();
}

function initAllFeatures() {
  initQuoteCalculator();
  initFaqAccordion();
  initFormPrefill();
}

/* ==========================================================================
   1. INSTANT QUOTE ESTIMATOR CALCULATOR
   ========================================================================== */
function initQuoteCalculator() {
  const wordCountInput = document.getElementById('calc-words');
  const wordCountSlider = document.getElementById('calc-words-slider');
  const wordCountDisplay = document.getElementById('calc-words-display');
  const languagePairSelect = document.getElementById('calc-lang');
  const serviceTypeSelect = document.getElementById('calc-service');
  const urgencySelect = document.getElementById('calc-urgency');
  
  const priceDisplay = document.getElementById('calc-price-result');
  const timeDisplay = document.getElementById('calc-time-result');
  const rateDisplay = document.getElementById('calc-rate-result');
  const ctaBtn = document.getElementById('calc-cta-btn');

  if (!wordCountInput || !priceDisplay) return;

  // Base rates per word (€)
  const serviceRates = {
    translation: 0.08,    // Traduzione Specialistica
    localization: 0.09,   // Localizzazione Web & Software
    revision: 0.04,       // Revisione & Proofreading
    postediting: 0.05     // Post-Editing MT
  };

  // Language multipliers
  const langMultipliers = {
    'en-it': 1.0,
    'fr-it': 1.0,
    'it-en': 1.1,
    'it-fr': 1.1
  };

  // Urgency multipliers
  const urgencyMultipliers = {
    standard: 1.0,
    express: 1.3
  };

  function updateCalculation() {
    let words = parseInt(wordCountInput.value) || 0;
    if (words < 50) words = 50;

    const service = serviceTypeSelect.value;
    const lang = languagePairSelect.value;
    const urgency = urgencySelect.value;

    const baseRate = serviceRates[service] || 0.08;
    const langMult = langMultipliers[lang] || 1.0;
    const urgMult = urgencyMultipliers[urgency] || 1.0;

    const effectiveRate = baseRate * langMult * urgMult;
    let totalPrice = Math.round(words * effectiveRate);
    
    // Minimum project fee
    const minFee = 25;
    if (totalPrice < minFee) totalPrice = minFee;

    // Estimate turnaround days (approx 1500-2000 words/day)
    let days = Math.ceil(words / (urgency === 'express' ? 3000 : 1800));
    if (days < 1) days = 1;

    // Format output
    priceDisplay.textContent = `€ ${totalPrice} - € ${Math.round(totalPrice * 1.15)}`;
    timeDisplay.textContent = `${days} - ${days + 1} giorn${days === 1 ? 'o' : 'i'} lavorativ${days === 1 ? 'o' : 'i'}`;
    rateDisplay.textContent = `~ € ${effectiveRate.toFixed(3)} / parola`;

    // Sync slider and input display
    if (wordCountDisplay) {
      wordCountDisplay.textContent = words.toLocaleString('it-IT');
    }

    // Update CTA button data attributes for pre-fill
    if (ctaBtn) {
      const serviceName = serviceTypeSelect.options[serviceTypeSelect.selectedIndex].text;
      const langName = languagePairSelect.options[languagePairSelect.selectedIndex].text;
      const urgencyName = urgencySelect.options[urgencySelect.selectedIndex].text;
      
      ctaBtn.href = `/contact/?service=${encodeURIComponent(service)}&lang=${encodeURIComponent(lang)}&words=${words}&urgency=${encodeURIComponent(urgency)}&price=${totalPrice}#contact-form`;
    }
  }

  // Event Listeners for Calculator Controls
  if (wordCountSlider) {
    wordCountSlider.addEventListener('input', function () {
      wordCountInput.value = this.value;
      updateCalculation();
    });
  }

  if (wordCountInput) {
    wordCountInput.addEventListener('input', function () {
      if (wordCountSlider) wordCountSlider.value = this.value;
      updateCalculation();
    });
  }

  [languagePairSelect, serviceTypeSelect, urgencySelect].forEach(select => {
    if (select) select.addEventListener('change', updateCalculation);
  });

  // Initial calculation
  updateCalculation();
}

/* ==========================================================================
   2. INTERACTIVE FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/* ==========================================================================
   3. CONTACT FORM PRE-FILL FROM URL PARAMETERS
   ========================================================================== */
function initFormPrefill() {
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get('service');
  const lang = urlParams.get('lang');
  const words = urlParams.get('words');
  const urgency = urlParams.get('urgency');
  const price = urlParams.get('price');

  if (!service && !words) return;

  // Pre-fill message field
  const messageInput = document.getElementById('message');
  const serviceRadio = document.querySelector(`input[name="service_type"][value="${service}"]`);
  const langRadio = document.querySelector(`input[name="language_pair"][value="${lang}"]`);

  if (serviceRadio) serviceRadio.checked = true;
  if (langRadio) langRadio.checked = true;

  if (messageInput && !messageInput.value) {
    let summaryText = `Richiesta di Preventivo dal Calcolatore:\n`;
    if (words) summaryText += `• Conteggio parole approssimativo: ~${words} parole\n`;
    if (lang) summaryText += `• Combinazione linguistica: ${lang.toUpperCase()}\n`;
    if (urgency) summaryText += `• Urgenza: ${urgency === 'express' ? 'Urgente / Express' : 'Standard'}\n`;
    if (price) summaryText += `• Stima calcolata: ~€ ${price}\n`;
    summaryText += `\nDescrizione del progetto / Note aggiuntive:\n`;

    messageInput.value = summaryText;

    // Scroll smoothly to form if hash present
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
