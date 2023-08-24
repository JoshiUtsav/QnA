const options = document.getElementsByClassName('options');
const submit = document.getElementById('checkanswer');
let currentQuestionIndex = 0;
let marks = 0;

const fetchQuestions = async () => {
    try {
        const response = await fetch('http://localhost/Ques');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
};

const displayQuestion = (question) => {
    document.getElementById('Question').innerText = question.Question;
    const labels = document.getElementsByTagName('label');
    labels[0].innerText = question.A;
    labels[1].innerText = question.B;
    labels[2].innerText = question.C;
    labels[3].innerText = question.D;
};

const sendMarksToServer = async (marks) => {
    const url = 'http://localhost/marks';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ marks })
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Marks sent successfully');
        } else {
            console.error('Error sending marks to server:', response.statusText);
        }
    } catch (error) {
        console.error('Error sending marks to server:', error);
    }
};

const checkAnswer = async () => {
    const Questions = await fetchQuestions();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an option');
        return;
    }
    const selectedAnswer = selectedOption.value;
    const currentQuestion = Questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.Answer) { marks += 1 }
    else if (selectedAnswer != currentQuestion.Answer) {
        marks -= 0.25;
    }
    else { marks -= 0.25 }
    console.log(marks);
    currentQuestionIndex++;
    if (currentQuestionIndex < Questions.length) { newQue() };
};

submit.addEventListener('click', async () => {
    checkAnswer();

    const Questions = await fetchQuestions();
    if (currentQuestionIndex === Questions.length) {
        sendMarksToServer(marks);
        location.href = '/marks';
    }
});



const newQue = async () => {
    const Questions = await fetchQuestions();
    if (currentQuestionIndex < Questions.length) { displayQuestion(Questions[currentQuestionIndex]) };
};
newQue();