let form = document.querySelector('form');

// let find = document.querySelector('input[type=text]:first-of-type');
// let replace = document.querySelector('input[type=text]:last-of-type');
let inputs = document.querySelectorAll('form input');

let p = document.querySelector('p');

form.addEventListener('submit', doFindAndReplace);

function doFindAndReplace(ev) {
  ev.preventDefault();

  console.log('find:', inputs[0].value)
  console.log('replace:', inputs[1].value)
  console.log('text:', p.textContent)

  p.textContent = p.textContent.replaceAll(inputs[0].value, inputs[1].value);

  // while (p.textContent.indexOf(inputs[0].value) != -1) {
  //   p.textContent.replace(inputs[0].value, inputs[1].value);
  // }


}

// document.addEventListener('DOMContentLoaded', function(){

// });