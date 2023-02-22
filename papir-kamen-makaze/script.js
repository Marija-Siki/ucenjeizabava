
function getComputerChoice() {
  let rpsChoices = ['Kamen', 'Papir', 'Makaze']
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
  return computerChoice
}

function getResult(playerChoice, computerChoice) {
  
  let score;

  if (playerChoice === computerChoice) {
    score = 0

  
  } else if (playerChoice === 'Kamen' && computerChoice === 'Makaze') {
    score = 1

  } else if (playerChoice === "Papir" && computerChoice === "Kamen") {
    score = 1

  } else if (playerChoice === "Makaze" && computerChoice === "Papir") {
    score = 1

  } else {
    score = -1
  }

  return score
}

function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById('result')
  switch (score) {
    case -1:
      result.innerText = `Izgubio si!`
      break;
    case 0:
      result.innerText = `Nerešeno je!`
      break;
    case 1:
      result.innerText = `Pobedio si!`
      break;
  }

  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  showResult(score, playerChoice.value, computerChoice)
}

function playGame() {
  let rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })

  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()