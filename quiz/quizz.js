const fs = require('fs');
const readlineSync = require('readline-sync');

let quizz = [];

try {
    const info = fs.readFileSync('questions.json', 'utf-8');
    quizz = JSON.parse(info).questions;
} catch (error) {
    console.log('Error reading questions:', error.message);
    process.exit(1);
}

const generateQuestion = (index, score) => {
    if (index === quizz.length) {
        console.log(`Your final score is ${score} out of ${quizz.length}`);
        return;
    }

    const CQ = quizz[index];

    console.log(` ${index + 1}. ${CQ.question}`);
    CQ.answers.forEach((answer, i) => {
        console.log(`${i + 1}. ${answer}`);
    });

    const inputAnswer = readlineSync.question('Enter Answer: ');
    const userAnswer = parseInt(inputAnswer) - 1;

    if (userAnswer >= 0 && userAnswer < CQ.answers.length) {
        const trueAnswer = CQ.correctAnswerIndex === userAnswer;
        if (trueAnswer) {
            console.log('Answer is Correct\n');
            score++;
        } else {
            console.log(`Your answer is wrong! ${CQ.answers[CQ.correctAnswerIndex]} \n`);
        }

        generateQuestion(index + 1, score);
    } else {
        console.log('Invalid answer! Enter a number which corresponds to the answer of your choice \n');
        generateQuestion(index, score);
    }
};

console.log(`QUIZ\nSelect the correct answer for the following questions\n`);
generateQuestion(0, 0);
