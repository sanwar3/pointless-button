let button = document.querySelector('.button'),
  count = 0;

  button.addEventListener('click', changeNumber);

function changeNumber() {
  count += 1;

   button.innerHTML = count;
}
