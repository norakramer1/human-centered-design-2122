let submit = document.querySelector('input[type=submit')

function search(e) {
 
  let searched = document.querySelector('input[type=text]').value;
  if (searched !== "") {
      let text = document.querySelector('p').innerHTML;
      let re = new RegExp(searched,"g"); // search for all instances
      let newText = text.replace(re, `<mark>${searched}</mark>`);
  document.querySelector('p').innerHTML = newText;
  e.preventDefault();
  }
}

submit.addEventListener('submit', () => {
  search();
});