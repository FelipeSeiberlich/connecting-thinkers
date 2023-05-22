const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const quizQuestionContainerElement = document.getElementById
('quiz-question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')

let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizQuestionContainerElement.classList.remove('hide')
    setNextCardQuestion()
}

function setNextCardQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn-quiz')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer() {

} 

const questions = [
    {
        question: 'Hello my friend',
        answer: [
            { text: 'miaow', correct: true },
            { text: 'moremiaow', correct: false }
        ]
    }
]