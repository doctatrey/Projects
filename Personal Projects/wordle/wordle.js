
const checkBtn = document.getElementById('checkButton');
const resetBtn = document.getElementById('resetButton');

// Limit How Many Characters In Each Element
document.addEventListener('DOMContentLoaded', () => {

    const elements = document.querySelectorAll('.letter');
    elements.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.innerText.length > 0) {
                var nextInput = elements[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }
        });

        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const text = e.clipboardData.getData('text/plain').charAt(0);
            input.value = text;
            var nextInput = elements[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        });

        input.addEventListener('keydown', (event) => {
            if (event.key == "Backspace") {
                if (input.innerText.length == 0) {
                    var prevInput = elements[index - 1];
                    if (prevInput) {
                        prevInput.focus();
                    }
                }
            }
        });
    });

    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => {
        letter.addEventListener('input', (e) => {
            if (e.target.innerText.length > 1) {
                e.target.innerText = e.target.innerText.charAt(0);
            }
        });

        letter.addEventListener('paste', (e) => {
            e.preventDefault();
            const text = e.clipboardData.getData('text/plain').charAt(0);
            document.execCommand('insertText', false, text);
        });

        letter.addEventListener('keypress', (e) => {
            if (e.target.innerText.length >= 1) {
                e.preventDefault();
            }
        });
    });

    resetGame();
});

// Variables
var currentRow = 1;
var currentWord = '';
var gameWon = false;

// Button Listeners
resetBtn.addEventListener('click', resetGame);
checkBtn.addEventListener('click', checkWord);

// Centralized function to toggle contenteditable
function toggleContentEditable(state) {
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 5; j++) {
            let currentElement = document.getElementById(`r${i}c${j}`);
            if (currentElement) {
                currentElement.setAttribute('contenteditable', state);
            }
        }
    }
}

// Reseting Game, Getting New Word From API
function resetGame() {

    var result = document.getElementById("resultText");
    result.innerHTML = "";
    result.style.color = "white";

    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 5; j++) {
            let currentElement = document.getElementById(`r${i}c${j}`);
            if (currentElement) {
                currentElement.innerText = '';
                currentElement.setAttribute('contenteditable', 'true');
                currentElement.style.backgroundColor = 'white';
            } else {
                console.error(`Element r${i}c${j} not found.`);
            }
        }
    }

    const request = 'https://api.datamuse.com/words?sp=?????';

    fetch(request).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    }).then((data) => {
        const filteredWords = data.map(word => word.word).filter(word => !word.includes(' '));
        if (filteredWords.length === 0) {
            throw new Error("No 5-letter words found.");
        }
        const randomIndex = Math.floor(Math.random() * filteredWords.length);
        const randomWord = filteredWords[randomIndex];
        currentWord = randomWord.toUpperCase();
        console.log(currentWord);
    }).catch((error) => {
        console.error('Error:', error);
    });

    currentRow = 1;
    gameWon = false;
    toggleContentEditable('true');
    setContentEditable(2, 6, 'false');
}

// Checking Word
async function checkWord() {
    if (gameWon) return;

    let guessedWord = '';
    for (let i = 1; i <= 5; i++) {
        guessedWord += document.getElementById(`r${currentRow}c${i}`).innerText;
    }
    guessedWord = guessedWord.toUpperCase();

    if (guessedWord.length < 5) {
        console.log(`Row ${currentRow} not complete.`);
        return;
    }

    const isValid = await isValidWord(guessedWord);
        if (!isValid) {
            var result = document.getElementById("resultText");
            result.innerHTML = "NOT IN WORD LIST";
            result.style.color = "white";
            e.preventDefault();
        } else {
            var result = document.getElementById("resultText");
            result.innerHTML = "";
            result.style.color = "white";
        }

    for (let i = 1; i <= 5; i++) {
        let currentElement = document.getElementById(`r${currentRow}c${i}`);
        let letter = currentElement.innerText.toUpperCase();

        if (letter === currentWord[i - 1]) {
            currentElement.style.backgroundColor = "green";
        } else if (currentWord.includes(letter)) {
            currentElement.style.backgroundColor = "yellow";
        } else {
            currentElement.style.backgroundColor = "gray";
        }

    }

    currentRow++;

    if (guessedWord === currentWord) {
        gameWon = true;
        toggleContentEditable('false');
        var result = document.getElementById("resultText");
        result.innerHTML = "YOU WIN";
        result.style.color = "green";
    }

    if (currentRow == 2) {
        setContentEditable(2, 2, 'true');
        setContentEditable(3, 6, 'false');
    }
    if (currentRow == 3) {
        setContentEditable(3, 3, 'true');
        setContentEditable(4, 6, 'false');
    }
    if (currentRow == 4) {
        setContentEditable(4, 4, 'true');
        setContentEditable(5, 6, 'false');
    }
    if (currentRow == 5) {
        setContentEditable(5, 5, 'true');
        setContentEditable(6, 6, 'false');
    }
    if (currentRow == 6) {
        setContentEditable(6, 6, 'true');
    }
    if (currentRow == 7) {
        setContentEditable(6, 6, 'false');
        var result = document.getElementById("resultText");
        result.innerHTML = "YOU LOSE";
        result.style.color = "red";
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkWord();
    }
});

//Set Content Editable By Row
function setContentEditable(startRow, endRow, state) {
    for (let i = startRow; i <= endRow; i++) {
        for (let j = 1; j <= 5; j++) {
            let element = document.getElementById(`r${i}c${j}`);
            if (element) {
                element.setAttribute('contenteditable', state);
            }
        }
    }
}

//Check if Word is Word
async function isValidWord(word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
    if (response.ok) {
        const data = await response.json();
        return data && data.length > 0;
    } else {
        return false;
    }
}
