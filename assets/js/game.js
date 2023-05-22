const startButton = document.getElementById('start-btn')
const questionCardElement = document.getElementById('quiz-question-container')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    questionCardElement.classList.remove('hide')
    setNextCardQuestion()
}

function setNextCard() {

}

function selectAnswer() {

} 