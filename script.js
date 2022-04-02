const botaoEnviar = document.querySelector('.entrarbtn');

function logIn() {
  const email = document.querySelector('.email').value;
  const senha = document.querySelector('.senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoEnviar.addEventListener('click', logIn);

const submit = document.querySelector('#submit-btn');
submit.setAttribute('disabled', true);
const check = document.querySelector('#agreement');
check.addEventListener('change', () => {
  if (check.checked) {
    submit.removeAttribute('disabled');
  }
});
