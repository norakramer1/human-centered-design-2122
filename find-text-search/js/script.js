let form = document.querySelector('form');
let inputs = document.querySelectorAll('form input');
let p = document.querySelector('p');
let inputFocus = inputs[0].focus();
let otherInput, text;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "nl-NL";
recognition.interimResults = false;

// start recognition when you open the page
recognition.start();

// Record a transcript of said word and find the right input value and add the transcript text
recognition.addEventListener('result', (e) => {;

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

// find value in text and replace it with value from form input
function doFindAndReplace(ev) {
  ev.preventDefault();

  console.log('find:', inputs[0].value)
  console.log('replace:', inputs[1].value)
  console.log('text:', p.textContent)

  p.textContent = p.textContent.replaceAll(inputs[0].value, inputs[1].value);

}


form.addEventListener('submit', doFindAndReplace);
