/***************************************************/
/*   1) Base de données                            */
/***************************************************/
const wordsDB = [
    { es: "yo", fr: "je" },
    { es: "hablo", fr: "parle" },
    { es: "casa", fr: "maison" },
    { es: "hola", fr: "bonjour" },
    { es: "adios", fr: "au revoir" },
    { es: "gracias", fr: "merci" },
    { es: "por favor", fr: "s'il te plait" },
    { es: "amigo", fr: "ami" },
    { es: "comer", fr: "manger" },
    { es: "leer", fr: "lire" },
    { es: "escuela", fr: "ecole" },
    { es: "libro", fr: "livre" },
    { es: "lapiz", fr: "crayon" },
    { es: "hombre", fr: "homme" },
    { es: "mujer", fr: "femme" },
    { es: "nino", fr: "enfant" },
    { es: "agua", fr: "eau" },
    { es: "leche", fr: "lait" },
    { es: "coche", fr: "voiture" },
    { es: "arbol", fr: "arbre" },
    { es: "perro", fr: "chien" },
    { es: "gato", fr: "chat" },
    { es: "uno", fr: "un" },
    { es: "dos", fr: "deux" },
    { es: "tres", fr: "trois" },
    { es: "azul", fr: "bleu" },
    { es: "rojo", fr: "rouge" },
    { es: "verde", fr: "vert" },
    { es: "negro", fr: "noir" },
    { es: "blanco", fr: "blanc" },
    { es: "amarillo", fr: "jaune" },
    { es: "beber", fr: "boire" },
    { es: "caminar", fr: "marcher" },
    { es: "correr", fr: "courir" },
    { es: "silla", fr: "chaise" },
    { es: "mesa", fr: "table" },
    { es: "ventana", fr: "fenetre" },
    { es: "puerta", fr: "porte" },
    { es: "telefono", fr: "telephone" },
    { es: "musica", fr: "musique" },
    { es: "trabajar", fr: "travailler" },
    { es: "dormir", fr: "dormir" },
    { es: "jugar", fr: "jouer" },
    { es: "estudiar", fr: "etudier" },
    { es: "querer", fr: "vouloir" },
    { es: "poder", fr: "pouvoir" },
    { es: "tiempo", fr: "temps" },
    { es: "dia", fr: "jour" },
    { es: "semana", fr: "semaine" },
    { es: "mes", fr: "mois" },
    { es: "ano", fr: "an" },
    { es: "manana", fr: "demain" },
    { es: "tarde", fr: "apres-midi" },
    { es: "noche", fr: "nuit" },
    { es: "abrir", fr: "ouvrir" },
    { es: "cerrar", fr: "fermer" },
    { es: "encender", fr: "allumer" },
    { es: "apagar", fr: "eteindre" },
    { es: "derecha", fr: "droite" },
    { es: "izquierda", fr: "gauche" },
    { es: "arriba", fr: "haut" },
    { es: "abajo", fr: "bas" },
    { es: "feliz", fr: "heureux" },
    { es: "triste", fr: "triste" },
    { es: "amor", fr: "amour" },
    { es: "odio", fr: "haine" },
    { es: "grande", fr: "grand" },
    { es: "pequeno", fr: "petit" },
    { es: "dinero", fr: "argent" },
    { es: "nuevo", fr: "nouveau" },
    { es: "viejo", fr: "vieux" },
    { es: "caliente", fr: "chaud" },
    { es: "frio", fr: "froid" },
    { es: "rapido", fr: "rapide" },
    { es: "lento", fr: "lent" },
    { es: "facil", fr: "facile" },
    { es: "dificil", fr: "difficile" },
    { es: "joven", fr: "jeune" },
    { es: "alto", fr: "grand (taille)" },
    { es: "bajo", fr: "petit (taille)" },
    { es: "hermoso", fr: "beau" },
    { es: "feo", fr: "laid" },
    { es: "importante", fr: "important" },
    { es: "mano", fr: "main" },
    { es: "ojo", fr: "oeil" },
    { es: "cabeza", fr: "tete" },
    { es: "pelo", fr: "cheveux" },
    { es: "boca", fr: "bouche" },
    { es: "nariz", fr: "nez" },
    { es: "estomago", fr: "estomac" },
    { es: "camisa", fr: "chemise" },
    { es: "pantalon", fr: "pantalon" },
    { es: "zapatos", fr: "chaussures" },
    { es: "ciudad", fr: "ville" },
    { es: "pais", fr: "pays" },
    { es: "guerra", fr: "guerre" },
    { es: "paz", fr: "paix" },
    { es: "salud", fr: "sante" },
    { es: "trabajo", fr: "travail" },
    { es: "familia", fr: "famille" },
    { es: "comida", fr: "nourriture" },
    { es: "bebida", fr: "boisson" },
    { es: "pero", fr: "mais" },
    { es: "enero", fr: "janvier" },
    { es: "febrero", fr: "fevrier" },
    { es: "marzo", fr: "mars" },
    { es: "abril", fr: "avril" },
    { es: "mayo", fr: "mai" },
    { es: "junio", fr: "juin" },
    { es: "julio", fr: "juillet" },
    { es: "agosto", fr: "aout" },
    { es: "septiembre", fr: "septembre" },
    { es: "octubre", fr: "octobre" },
    { es: "noviembre", fr: "novembre" },
    { es: "diciembre", fr: "decembre" },
    { es: "primavera", fr: "printemps" },
    { es: "verano", fr: "ete" },
    { es: "otono", fr: "automne" },
    { es: "invierno", fr: "hiver" },
{ es: "me gusta", fr: "j'aime" },
{ es: "muchos", fr: "beaucoup de, beaucoup d'" },
{ es: "parques", fr: "parcs" },
{ es: "calle", fr: "rue" },
{ es: "restaurante", fr: "restaurant, resto" },
{ es: "supermercado", fr: "supermarche" },
{ es: "muy", fr: "tres" },
{ es: "tiene", fr: "tient, a" },
{ es: "terraza", fr: "terrasse" },
{ es: "garaje", fr: "garage" },
{ es: "jardin", fr: "jardin" },
{ es: "bonito", fr: "beau" },
{ es: "con", fr: "avec" },
{ es: "solo", fr: "seul" },
{ es: "pareja", fr: "couple (masculino), paire, partenaire" },
{ es: "lejos", fr: "loin" },
{ es: "piso", fr: "sol, etage, appartement" },
{ es: "apartamento", fr: "appartement" },
{ es: "edificio", fr: "batiment" },
{ es: "vivir", fr: "vivre, habiter" },
{ es: "naranjas", fr: "oranges" },
{ es: "mercados", fr: "marches" },
{ es: "kilos de", fr: "kilos, kilos de" },
{ es: "bolsas", fr: "sacs" },
{ es: "este", fr: "ce" },
{ es: "mangos", fr: "mangues" },
{ es: "pinas", fr: "ananas" },
{ es: "naranja", fr: "orange" },
{ es: "cuanto cuestan", fr: "coutent" },
{ es: "mango", fr: "mangue, manguier, manche" },
{ es: "kilo de", fr: "kilo de, kilo d', demi-kilo d'" },
{ es: "sandias", fr: "pasteques" },
{ es: "necesitas", fr: "il te faut, tu as besoin de" },
{ es: "duraznos", fr: "peches" },
{ es: "mas", fr: "plus, davantage" },
{ es: "botella de", fr: "bouteille de, bouteille d'" },
{ es: "bolsa", fr: "bourse, sac" },
{ es: "mercado", fr: "marche" },
{ es: "sandia", fr: "pasteque" },
{ es: "cuanto cuesta", fr: "coute" },
{ es: "pina", fr: "ananas" },
{ es: "necesito", fr: "il me faut, j'ai besoin de" },
{ es: "durazno", fr: "peche" },
{ es: "buen tiempo", fr: "beau temps" },
{ es: "mucho", fr: "beaucoup, beaucoup d', tres" },
{ es: "sol", fr: "Soleil, soleil" },
{ es: "alli", fr: "la-bas" },
{ es: "hoy", fr: "aujourd'hui" },
{ es: "no hace", fr: "il ne fait pas" },
{ es: "traje de bano", fr: "maillot de bain" },
{ es: "calor", fr: "chaleur, chaud" },
{ es: "ahora", fr: "maintenant" },
{ es: "abrigo", fr: "manteau" },
{ es: "viento", fr: "vent" },
{ es: "uso", fr: "utilise, utilisation, j'utilise" },
{ es: "hace", fr: "fait, il fait, faut" },
{ es: "arte", fr: "art" },
{ es: "por la noche", fr: "la nuit" },
{ es: "estudias", fr: "tu etudies, etudies" },
{ es: "hablas", fr: "tu parles" },
{ es: "guau", fr: "waouh" },
{ es: "por la manana", fr: "le matin" },
{ es: "aleman", fr: "allemand" },
{ es: "italiano", fr: "italien, Italien" },
{ es: "un poco de", fr: "un peu de" },
{ es: "frances", fr: "francais" },
{ es: "ingles", fr: "anglais" },
{ es: "genial", fr: "genial" },
{ es: "hablar", fr: "parler" },
{ es: "espanol", fr: "espagnol" },
{ es: "portugues", fr: "portugais, Portugais" },
{ es: "y tu", fr: "et toi, Et toi" },
{ es: "estudio", fr: "etude, etudie" },
{ es: "no hay", fr: "il n'y a pas" },
{ es: "mira", fr: "regarde" },
{ es: "estacionamiento", fr: "stationnement, parking" },
{ es: "hotel", fr: "hotel" },
{ es: "libreria", fr: "librairie" },
{ es: "pueblo", fr: "village" },
{ es: "parque", fr: "parc" },
{ es: "oye", fr: "entend, dis" },
{ es: "en", fr: "au, a, en" },
{ es: "barrio", fr: "quartier" },
{ es: "centro comercial", fr: "centre commercial" },
{ es: "estacion de metro", fr: "station de metro" },
{ es: "cerca", fr: "pres d'ici" },
{ es: "teatro", fr: "theatre" },
{ es: "museo", fr: "musee" },
{ es: "banco", fr: "banque" },
{ es: "por aqui", fr: "par ici, Par ici" },
{ es: "hay", fr: "il y a" },
{ es: "cafeteria", fr: "cafe" },
{ es: "panaderia", fr: "boulangerie" },
{ es: "tienda", fr: "magasin" },
{ es: "mochila", fr: "sac a dos, cartable" },
{ es: "pues", fr: "puisque, puisqu'" },
{ es: "tableta", fr: "tablette" },
{ es: "ay", fr: "oh" },
{ es: "no encuentro", fr: "je ne trouve pas" },
{ es: "gorra", fr: "casquette" },
{ es: "reloj", fr: "montre" },
{ es: "cargador", fr: "chargeur" },
{ es: "tranquila", fr: "calme, tranquille, sage" },
{ es: "chaqueta", fr: "veste" },
{ es: "donde", fr: "ou" },
{ es: "vestido", fr: "robe" },
{ es: "cartera", fr: "portefeuille" },
{ es: "sueter", fr: "pull" },
{ es: "esta", fr: "il est, est, elle est" },
{ es: "tranquilo", fr: "calme, tranquille, sage" },
{ es: "aqui", fr: "ici" },
{ es: "maleta", fr: "valise" },
{ es: "pasaporte", fr: "passeport" },
{ es: "papa", fr: "pere" },
{ es: "novio", fr: "petit ami" },
{ es: "seria", fr: "serieuse" },
{ es: "serio", fr: "serieux" },
{ es: "tu", fr: "ton" },
{ es: "gracioso", fr: "drole" },
{ es: "graciosa", fr: "drole" },
{ es: "novia", fr: "petite amie" },
{ es: "simpatica", fr: "sympathique, sympa, gentille" },
{ es: "creo que", fr: "je crois que" },
{ es: "en general", fr: "en general" },
{ es: "timida", fr: "timide" },
{ es: "esposa", fr: "femme" },
{ es: "abuela", fr: "grand-mere" },
{ es: "simpatico", fr: "gentil" },
{ es: "no crees", fr: "n'est-ce pas" },
{ es: "como yo", fr: "comme moi" },
{ es: "esposo", fr: "mari" },
{ es: "abuelo", fr: "grand-pere" },
{ es: "timido", fr: "timide" },
{ es: "tambien", fr: "aussi" },
{ es: "companera de trabajo", fr: "collegue de travail" },
{ es: "amiga", fr: "amie, copine" },
{ es: "tia", fr: "tante" },
{ es: "companero de trabajo", fr: "collegue de travail" },
{ es: "tio", fr: "oncle" },
{ es: "en realidad", fr: "en realite" },
{ es: "una", fr: "une" },
{ es: "solamente", fr: "seulement, seule, seules" },
{ es: "hermana", fr: "soeur" },
{ es: "hija", fr: "fille" },
{ es: "tengo", fr: "ai, j'ai" },
{ es: "hermano", fr: "frere" },
{ es: "quiere", fr: "veut, aime" },
{ es: "hijo", fr: "fils" },
{ es: "companero de cuarto", fr: "colocataire" },
{ es: "no", fr: "non, ne ... pas, n' ... pas" },
{ es: "es de", fr: "vient de" },
{ es: "mi", fr: "mon, ma" },
{ es: "mama", fr: "maman, mere" },
{ es: "verdad", fr: "n'est-ce pas" },
{ es: "eres de", fr: "es, es-tu d'" },
{ es: "si", fr: "oui" },
{ es: "encantada", fr: "enchantee" },
{ es: "alemania", fr: "allemagne" },
{ es: "soy de", fr: "viens de" },
{ es: "buenas tardes", fr: "bonsoir" },
{ es: "encantado", fr: "enchante" },
{ es: "de donde eres", fr: "d'ou es-tu" },
{ es: "bien", fr: "bien" },
{ es: "bienvenida", fr: "bienvenue" },
{ es: "ella", fr: "elle" },
{ es: "que tal", fr: "comment ca va" },
{ es: "hasta luego", fr: "a bientot" },
{ es: "mi mejor amiga", fr: "ma meilleure amie" },
{ es: "el", fr: "il" },
{ es: "mucho gusto", fr: "enchante" },
{ es: "mi mejor amigo", fr: "mon meilleur ami" },
{ es: "es", fr: "est, c'est" },
{ es: "jugo", fr: "jus" },
{ es: "soy", fr: "je suis, suis, viens" },
{ es: "buenos dias", fr: "bonjour" },
{ es: "bienvenido", fr: "bienvenu, bienvenue" },
{ es: "y", fr: "et" },
{ es: "vaso de", fr: "verre d'eau, verre de" },
{ es: "chao", fr: "salut" },
{ es: "perfecto", fr: "parfait" },
{ es: "pan", fr: "pain" },
{ es: "con azucar", fr: "avec du sucre" },
{ es: "helado", fr: "glace" },
{ es: "quieres", fr: "tu veux, veux, aimes" },
{ es: "o", fr: "ou" },
{ es: "con hielo", fr: "avec des glacons" },
{ es: "sandwich", fr: "sandwich" },
{ es: "taco", fr: "taco" },
{ es: "con leche", fr: "avec du lait" },
{ es: "quiero", fr: "veux, je veux, aime" },
{ es: "te", fr: "the" },
{ es: "cafe", fr: "cafe" },
    
        
    // ... etc.
  ];

  /***************************************************/
  /* 1.5) Afficher le nombre total                     */
  /***************************************************/
  document.getElementById("dbWordCount").textContent = wordsDB.length;
  
  /***************************************************/
  /*   2) Variables globales                         */
  /***************************************************/
  let currentIndex = 0;
  let currentSeries = [];
  let correctCount = 0;
  let wrongCount = 0;
  let totalWordsInSeries = 50;
  let isSpanishToFrench = true;
  
  /***************************************************/
  /*   3) Sélection des éléments du DOM              */
  /***************************************************/
  const currentWordEl = document.getElementById("currentWord");
  const userAnswerEl = document.getElementById("userAnswer");
  const validateBtn = document.getElementById("validateBtn");
  const newSeriesBtn = document.getElementById("newSeriesBtn");
  const correctCountEl = document.getElementById("correctCount");
  const wrongCountEl = document.getElementById("wrongCount");
  const totalWordsEl = document.getElementById("totalWords");
  const feedbackEl = document.getElementById("feedback");
  const historyEl = document.getElementById("history");
  
  /***************************************************/
  /*   4) Fonctions utilitaires                      */
  /***************************************************/
  function removeAccents(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Distance de Levenshtein pour tolérer 1 faute
  function levenshtein(a, b) {
    const an = a.length, bn = b.length;
    if (an === 0) return bn;
    if (bn === 0) return an;
  
    const matrix = [];
    for (let i = 0; i <= an; i++) {
      matrix[i] = [i];
    }
    for (let j = 1; j <= bn; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= an; i++) {
      for (let j = 1; j <= bn; j++) {
        if (a[i - 1] === b[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j - 1] + 1
          );
        }
      }
    }
    return matrix[an][bn];
  }
  
  /***************************************************/
  /*   5) Nouvelle série                             */
  /***************************************************/
  function startNewSeries() {
    correctCount = 0;
    wrongCount = 0;
    correctCountEl.textContent = correctCount;
    wrongCountEl.textContent = wrongCount;
  
    totalWordsInSeries = 50;
    totalWordsEl.textContent = totalWordsInSeries;
  
    let shuffledWords = shuffleArray([...wordsDB]);
    let countToPick = Math.min(totalWordsInSeries, shuffledWords.length);
    currentSeries = shuffledWords.slice(0, countToPick);
  
    currentIndex = 0;
  
    // On vide l'historique pour la nouvelle série
    historyEl.innerHTML = "";
  
    showNextWord();
  }
  
  /***************************************************/
  /*   6) Afficher le mot actuel                     */
  /***************************************************/
  function showNextWord() {
    if (currentIndex >= currentSeries.length) {
      currentWordEl.textContent = "Fin de la série !";
      userAnswerEl.value = "";
      userAnswerEl.disabled = true;
      validateBtn.disabled = true;
      feedbackEl.textContent = "";
      return;
    }
  
    feedbackEl.textContent = "";
  
    isSpanishToFrench = Math.random() < 0.5;
    const wordData = currentSeries[currentIndex];
    currentWordEl.textContent = isSpanishToFrench ? wordData.es : wordData.fr;
  
    userAnswerEl.value = "";
    userAnswerEl.disabled = false;
    userAnswerEl.focus();
    validateBtn.disabled = false;
  }
  
  /***************************************************/
  /*   7) Validation de la réponse                   */
  /***************************************************/
  function validateAnswer() {
    const wordData = currentSeries[currentIndex];
    const correctAnswer = isSpanishToFrench ? wordData.fr : wordData.es;
    const userAnswer = userAnswerEl.value.trim();
  
    const answerNormalized = removeAccents(userAnswer);
    const correctNormalized = removeAccents(correctAnswer);
    const distance = levenshtein(answerNormalized, correctNormalized);
  
    let isCorrect = false;
    if (distance <= 1) {
      correctCount++;
      correctCountEl.textContent = correctCount;
      feedbackEl.textContent = "Correct!";
      isCorrect = true;
    } else {
      wrongCount++;
      wrongCountEl.textContent = wrongCount;
      feedbackEl.textContent = `Mauvaise réponse !`;
    }
  
    // Ajout à l'historique, sans "bonne réponse :"
    addToHistory(
      isSpanishToFrench ? wordData.es : wordData.fr,
      userAnswer,
      correctAnswer,
      isCorrect
    );
  
    currentIndex++;
    showNextWord();
  }
  
  /***************************************************/
  /*   8) Ajout dans l'historique                    */
  /***************************************************/
  function addToHistory(originalWord, userAnswer, correctAnswer, isCorrect) {
    const newEntry = document.createElement("p");
  
    if (isCorrect) {
      // Ex. "casa = maison (✓)"
      newEntry.textContent = `(✓) ${originalWord} = ${userAnswer}`;
      newEntry.style.color = "#00ff00";
    } else {
      // Ex. "casa = m  maison"
      newEntry.textContent = `(X) ${originalWord} = ${correctAnswer}`;
      newEntry.style.color = "#ff4444";
    }
  
    historyEl.appendChild(newEntry);
  }
  
  /***************************************************/
  /*   9) Gestion des événements                     */
  /***************************************************/
  validateBtn.addEventListener("click", validateAnswer);
  
  userAnswerEl.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      validateAnswer();
    }
  });
  
  newSeriesBtn.addEventListener("click", () => {
    userAnswerEl.disabled = false;
    validateBtn.disabled = false;
    startNewSeries();
  });
  
  /***************************************************/
  /* 10) Démarrage                                   */
  /***************************************************/
  window.addEventListener("DOMContentLoaded", () => {
    startNewSeries();
  });
  
