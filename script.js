const word = document.querySelector(".change");

const words = [
    "shifting",
    "rewriting",
    "breaking",
    "twisting",
    "softening",
    "expanding",
    "repeating",
    "feeding",
    "creating",
    "punching"
];

let currentWord = "changing";


const wordTwo = document.querySelector(".the-words");

const wordsTwo = [
    "letters",
    "dogs",
    "cats",
    "shapes",
    "kites",
    "students",
    "chairs",
    "kids",
    "phones",
    "hot dogs"
];

let currentWordTwo = "words";


// 🔁 Reusable function (cleaner, avoids repeating logic)
function getNewWord(array, current) {
    const filteredWords = array.filter(w => w !== current);
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
}


// 🖱 Click Events (your original behavior)
word.addEventListener("click", function() {
    const newWord = getNewWord(words, currentWord);
    word.textContent = newWord;
    currentWord = newWord;
});

wordTwo.addEventListener("click", function() {
    const newWord = getNewWord(wordsTwo, currentWordTwo);
    wordTwo.textContent = newWord;
    currentWordTwo = newWord;
});


// ⌨️ Keyboard Events (NEW PART)
document.addEventListener("keydown", function(event) {

    if (event.key === "p") {
        const newWord = getNewWord(words, currentWord);
        word.textContent = newWord;
        currentWord = newWord;
    }

    if (event.key === "o") {
        const newWord = getNewWord(wordsTwo, currentWordTwo);
        wordTwo.textContent = newWord;
        currentWordTwo = newWord;
    }

});