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
        
    // ... etc.
  ];
  
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
  