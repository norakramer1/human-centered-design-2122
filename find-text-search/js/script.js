let form = document.querySelector('form');
let inputs = document.querySelectorAll('form input');
let p = document.querySelector('p');
let inputFocus = inputs[0].focus();
let otherInput, text;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "nl-NL";
recognition.interimResults = false;

recognition.start();

recognition.addEventListener('result', (e) => {
  //console.log(e.results);

  text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    if(document.activeElement === inputs[0]) {
      inputs[0].value = text;
      inputs[1].focus();
      setTimeout(() => recognition.start(), 1000)
    } else if(document.activeElement === inputs[1]) {
      inputs[1].value = text;
      inputs[2].focus();
      setTimeout(() => recognition.start(), 1000)
    } else if(document.activeElement === inputs[2]) {
      if(text === 'vervang') {
        inputs[2].click();
      }
      // recognition.stop();
    } 
  
  console.log(text)

});

// recognition.addEventListener('speechend', () => {
//   recognition.stop();
//   recognition.start();
// })
// turn on to start speech recognition

// inputs[1].addEventListener('focus', (e) => {


//   console.log('select other input');
//   const text = Array.from(e)
//   .map(result => result[0])
//   .map(result => result.transcript)
//   .join('');

// inputs[1].value = text;

//  });


function doFindAndReplace(ev) {
  ev.preventDefault();

  console.log('find:', inputs[0].value)
  console.log('replace:', inputs[1].value)
  console.log('text:', p.textContent)

  p.textContent = p.textContent.replaceAll(inputs[0].value, inputs[1].value);

}
//let p = document.createElement("p");


// bron: https://www.youtube.com/watch?v=-k-PgvbktX4

// nl-NL


form.addEventListener('submit', doFindAndReplace);


//let el = document.getElementById(parseInt(elem.id) +1).focus();