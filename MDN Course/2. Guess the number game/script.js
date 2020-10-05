let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetbutton;

function checkGuess()
{
    let userGuess = Number(guessField.value);
    if (guessCount === 1)
    {
        guesses.textContent = 'Previous guesses: '
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber)
    {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }
    else if (guessCount === 10)
    {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    }
    else
    {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber)
        {
            lowOrHi.textContent = 'Last guess was too low!';
        }
        else if (userGuess > randomNumber)
        {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.Focus();
}

guessSubmit.addEventListener('keypress', checkGuess);

function setGameOver()
{
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetbutton = document.createElement('button');
    resetbutton.textContent = 'Start new game';
    document.body.append(resetbutton);
    resetbutton.addEventListener('click', resetGame);
}

function resetGame()
{
    guessCount = 1;

    const resetParas = document.querySelector('.resultParas p');
    for (let i = 0; i < resetParas.length; i++)
    {
        resultParas[i].textContent = '';
    }

    resetbutton.parentNode.removeChild(resetbutton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}