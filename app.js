let userScore = 0;
let compScore = 0;

//cache the DOM
const $userScore = document.querySelector('.user-score');
const $compScore = document.querySelector('.comp-score');
const $result = document.querySelector('.result');
const $resultMessage = document.querySelector('.result__message');
const $resultEnd = document.querySelector('.result__end');
const $rock = document.getElementById('rock');
const $paper = document.getElementById('paper');
const $scissors = document.getElementById('scissors');

const getCompChoice = _ => {
    const choiceAry = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choiceAry[randomNum];
}

const win = (userChoice, compChoice) => {
    userScore++;
    $userScore.innerHTML = userScore;
    $compScore.innerHTML = compScore;
    $resultMessage.innerHTML = `${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;
    $resultEnd.innerHTML = `You Win!`;

}
const lose = (userChoice, compChoice) => {
    compScore++;
    $userScore.innerHTML = userScore;
    $compScore.innerHTML = compScore;
    $resultMessage.innerHTML = `${userChoice.toUpperCase()} loses ${compChoice.toUpperCase()}`
    $resultEnd.innerHTML = `You Lose...`;
}
const draw = (userChoice, compChoice) => {
    $userScore.innerHTML = userScore;
    $compScore.innerHTML = compScore;
    $resultMessage.innerHTML = `${userChoice.toUpperCase()} equals ${compChoice.toUpperCase()}`
    $resultEnd.innerHTML = `It's a draw.`;
}

const game = (userChoice) => {
    const compChoice = getCompChoice();

    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice)
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, compChoice)
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, compChoice)
            break;
    }
}

const main = _ => {
    $rock.addEventListener('click', _ => {
        game("rock");

    })

    $paper.addEventListener('click', _ => {
        game("paper");

    })

    $scissors.addEventListener('click', _ => {
        game("scissors");

    })
}

main();