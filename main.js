const form = document.querySelector('form');
const button = form.querySelector('button[type="submit"]');

form.onsubmit = (e) => {
  e.preventDefault()
  clearInputs();
  form.classList.add('success');
  button.innerText = "REGISTERED";
  /**
   * Submits to the cloud
   */
  setTimeout(() => {
    form.classList.remove('success');
    button.innerText = "Register";
  }, 4000);
}

function clearInputs() {
  const nameEl = form.querySelector('#name');
  const idEl = form.querySelector('#identity');
  const passwordEl = form.querySelector('#password');
  nameEl.value = '';
  idEl.value = '';
  passwordEl.value = '';
}
