const quizData = [
  {
      question: "Koja životinja spada u najveće divlje konje?",
      a: "Zebra",
      b: "Slon",
      c: "Žirafa",
      d: "Kornjača",
      correct: "a",
  },
  {
      question: "Koja životinja se hrani samo lišćem eukaliptusa?",
      a: "Labud",
      b: "Orao",
      c: "Koala",
      d: "Veverica",
      correct: "c",
  },
  {
      question: "Koje životinje su počele da rade sa decom kao terapeutske životinje?",
      a: "Delfini",
      b: "Majmuni",
      c: "Labudovi",
      d: "Lavovi",
      correct: "a",
  },
  {
      question: "Koja životinja nosi naziv -Kralj džungle?",
      a: "Slon",
      b: "Lav",
      c: "Pingvin",
      d: "Kornjača",
      correct: "b",
  },
  {
      question: "Kojoj životinji je crno-bela boja odbrambena kamuflaža?",
      a: "Lemur",
      b: "Majmun",
      c: "Zebra",
      d: "Pingvin",
      correct: "d",
  },
  {
      question: "Koja životinja ima 10 puta jači stisak od čoveka?",
      a: "Delfin",
      b: "Koala",
      c: "Orao",
      d: "Žirafa",
      correct: "c",
  },
  {
      question: "Koja je najviša živa životinja na kopnu?",
      a: "Žirafa",
      b: "Slon",
      c: "Veverica",
      d: "Medved",
      correct: "a",
  },
  {
      question: "Koje životinje ne vole neke mirise, poput bibera i belog luka?",
      a: "Majuni",
      b: "Koale",
      c: "Kamile",
      d: "Veverice",
      correct: "d",
  },
  {
      question: "Prema legendi u koju životinju se bog Zevs jednom prerušio?",
      a: "Delfina",
      b: "Labuda",
      c: "Kornjaču",
      d: "Pingvina",
      correct: "b",
  },
  {
      question: "Kojim životinjama naučno ime znači duh?",
      a: "Lavovima",
      b: "Orlovima",
      c: "Lemurima",
      d: "Slonovima",
      correct: "c",
  },
  {
      question: "Koje životinje skaču sa ruke na ruku na svojim putovanjima među drvećem?",
      a: "Majmuni",
      b: "Labudovi",
      c: "Kornjače",
      d: "Zebre",
      correct: "a",
  },
  {
      question: "Koja je najveća kopnena životinja na svetu?",
      a: "Koala",
      b: "Pingvin",
      c: "Medved",
      d: "Slon",
      correct: "d",
  },
  {
      question: "Koje životinje skladište masti u svojima grbama?",
      a: "Lemuri",
      b: "Koale",
      c: "Kamile",
      d: "Pingvini",
      correct: "c",
  },
  {
      question: "Koje životinje mogu da mirišu sa udaljenosti do 20 milja?",
      a: "Orlovi",
      b: "Medvedi",
      c: "Veverice",
      d: "Zebre",
      correct: "b",
  },
  {
      question: "Koje životinje su koračale Zemljom pre dinosaurusa?",
      a: "Lavovi",
      b: "Žirafe",
      c: "Kornjače",
      d: "Majmuni",
      correct: "c",
  },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer

  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })

  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  
  if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++
      }

      currentQuiz++

      if(currentQuiz < quizData.length) {
          loadQuiz()
      } else {
          quiz.innerHTML = `
              <h2>Imaš ${score}/${quizData.length} tačnih odgovora!</h2>
              <button onclick="location.reload()">Ponovi</button>
          `
      }
  }
})