// Function to translate English text to Pali
function translateToPali(text) {
    const translationDictionary = {
      // English to Pali translations
      "hello": "sādhu",
      "world": "loka",
      "sun": "ādicco",
      "moon": "cando",
      "water": "udaka",
      "fire": "tejo",
      "mountain": "pabbata",
      "tree": "rukkho",
      "flower": "puppha",
      "love": "mettā",
      "peace": "santi"
    };
  
    const words = text.toLowerCase().split(" ");
    const translatedWords = words.map(word => {
      if (translationDictionary.hasOwnProperty(word)) {
        return translationDictionary[word];
      } else {
        return word;
      }
    });
  
    return translatedWords.join(" ");
  }
  
  // Function to translate English text to Prakrit
  function translateToPrakrit(text) {
    const translationDictionary = {
      // English to Prakrit translations
      "hello": "bhavatu",
      "world": "lok",
      "sun": "surya",
      "moon": "chanda",
      "water": "jala",
      "fire": "agni",
      "mountain": "parvata",
      "tree": "vṛksha",
      "flower": "pushpa",
      "love": "prema",
      "peace": "śānti"
    };
  
    const words = text.toLowerCase().split(" ");
    const translatedWords = words.map(word => {
      if (translationDictionary.hasOwnProperty(word)) {
        return translationDictionary[word];
      } else {
        return word;
      }
    });
  
    return translatedWords.join(" ");
  }
  
  // Function to translate English text to Sanskrit using Google Translate API
  async function translateToSanskrit(text) {
    const API_KEY = "YOUR_GOOGLE_TRANSLATE_API_KEY";
    const API_URL = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
  
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        q: text,
        source: "en",
        target: "sa"
      })
    });
  
    const data = await response.json();
    const translation = data.data.translations[0].translatedText;
  
    return translation;
  }
  
  // Function to translate English text to Ancient Indian languages
  async function translate() {
    const inputText = document.getElementById("input").value;
  
    const sanskritTranslation = await translateToSanskrit(inputText);
    const paliTranslation = translateToPali(inputText);
    const prakritTranslation = translateToPrakrit(inputText);
  
    document.getElementById("sanskritTranslation").innerText = sanskritTranslation;
    document.getElementById("paliTranslation").innerText = paliTranslation;
    document.getElementById("prakritTranslation").innerText = prakritTranslation;
  }
  