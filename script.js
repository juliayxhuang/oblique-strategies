const word = document.querySelector(".change");

const words = [
    "shifting",
    "rewriting",
    "breaking",
    "twisting",
    "softening",
    "expanding",
    "repeating"
];

let currentWord = "changing";

word.addEventListener("click", function() {

    const filteredWords = words.filter(w => w !== currentWord);

    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    const newWord = filteredWords[randomIndex];

    word.textContent = newWord;
    currentWord = newWord;

});

const wordTwo = document.querySelector(".the-words");

const wordsTwo = [
    "letters",
    "dogs",
    "cats",
    "shapes",
    "kites",
    "students",
    "chairs"
];

let currentWordTwo = "words";

wordTwo.addEventListener("click", function() {

    const filteredWords = wordsTwo.filter(w => w !== currentWordTwo);

    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    const newWord = filteredWords[randomIndex];

    wordTwo.textContent = newWord;
    currentWordTwo = newWord;

});