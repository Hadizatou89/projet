let programming_languages = [
  "python",
  "JavaSrcipt",
  "mangodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "goland",
  "kotlin",
  "php",
  "sql",
  "ruby"  
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];

function randomWord() {
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];

}

function generateButtons() {
   let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
       <button
         class="btn btn-lg btn-primary m-2"
         id=` + letter + `
         onClick="handleGuess('` + letter + `')"
        >
         ` + letter + `
        </button>
      `).join('')
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}
randomWord();
generateButtons();