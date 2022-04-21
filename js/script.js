 // const texts = document.querySelector(".texts");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

//let p = document.createElement("p");
let textarea = document.querySelector('textarea');
textarea.focus();

recognition.addEventListener('result', (e) => {
 //console.log(e.results);

 const text = Array.from(e.results)
 .map(result => result[0])
 .map(result => result.transcript)
 .join('');


 textarea.innerHTML = text;

 //texts.appendChild(p);


 console.log(text)

console.log(textarea);

});

// function changeTextarea(elementId) {
//   textarea.innerHTML = document.body.querySelector(elementId).innerHTML;
// }

// recognition.addEventListener("end", () => {
  recognition.start();
// });

// turn on to start speech recognition
// recognition.start();

// bron: https://www.youtube.com/watch?v=-k-PgvbktX4