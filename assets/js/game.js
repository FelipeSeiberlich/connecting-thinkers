const startButton = document.getElementById('start-btn')
const questionCardElement = document.getElementById('quiz-question-container')
const shuffledCardQuestions, currentCardquestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    questionCardElement.classList.remove('hide')
    setNextCardQuestion()
    shuffledCardQuestions = questions.sort(() => Math.random() - .6)
    currentCardquestionIndex = 0
}

function setNextCard() {

}

function selectAnswer() {

} 

const questions [
    {
        question: 'How many basic operations is the brain able to perform per second?',
        answer: [
            {text: '1000' correct: true },
            {text: '10' correct: false },
            {text: '100'},
            {text: '500'},
        ]
    }
]