 const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener('result', (e) => {
 //console.log(e.results);

 const text = Array.from(e.results)
 .map(result => result[0])
 .map(result => result.transcript)
 .join('');

 p.innerHTML = text;

 texts.appendChild(p);


 console.log(text)
});

// recognition.addEventListener("end", () => {
//   recognition.start();
// });

recognition.start();

// bron: https://www.youtube.com/watch?v=-k-PgvbktX4