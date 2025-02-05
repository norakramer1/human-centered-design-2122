 // const texts = document.querySelector(".texts");

 window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

 const recognition = new SpeechRecognition();
 recognition.lang = "nl-NL";
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
 });

    // (A4) ON SPEECH RECOGNITION - RUN CORRESPONDING COMMAND
    voice.recog.onresult = (evt) => {
      let said = evt.results[0][0].transcript.toLowerCase();
      if (cmd[said]) { cmd[said](); }
      else { said += " (command not found)"; }
      voice.wrap.innerHTML = said;
      voice.stop();
    };

    // (D) COMMANDS LIST
var cmd = {
  "aan" : () => {
    voice.wrap.style.backgroundColor = "yellow";
    voice.wrap.style.color = "black";
  },
 
  "power off" : () => {
    voice.wrap.style.backgroundColor = "black";
    voice.wrap.style.color = "white";
  },
 
  "say hello" : () => {
    alert("Hello World!");
  }
};
 // turn on to start speech recognition
 recognition.start();

 // bron: https://www.youtube.com/watch?v=-k-PgvbktX4

 // nl-NL