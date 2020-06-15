//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const envioFormulario = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

//Event
(function () {
  document.addEventListener('DOMContentLoaded', inicioApp);
  email.addEventListener('blur', validarCampo);
  asunto.addEventListener('blur', validarCampo);
  mensaje.addEventListener('blur', validarCampo);
  envioFormulario.addEventListener('submit', envioEmail);
  resetBtn.addEventListener('click', resetForm);
})();

//Funciones
function inicioApp() {
  btnEnviar.disabled = true;
}

function validarCampo() {
  validar(this);

  let errores = document.querySelectorAll('.error');

  if (email.value !== 0 && asunto.value !== 0 && mensaje.value !== 0) {
    errores.length > 0
      ? console.log('hay errores')
      : (btnEnviar.disabled = false);
  }
}

function validar(campo) {
  if (campo.type == 'email') {
    if (email.value.indexOf('@') !== -1) {
      validarLongitud(campo);
    } else {
      campo.style.borderBottomColor = 'red';
      campo.classList.add('error');
    }
  } else {
    validarLongitud(campo);
  }
}

function validarLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = 'blue';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}

function resetForm(e) {
  e.preventDefault();
  envioFormulario.reset();
}

function envioEmail(e) {
  e.preventDefault();

  const spinnerGif = document.querySelector('#spinner');
  spinnerGif.style.display = 'block';

  const enviado = document.createElement('img');
  enviado.src = 'img/mail.gif';
  enviado.style.display = 'block';

  setTimeout(() => {
    spinnerGif.style.display = 'none';
    document.querySelector('#loaders').appendChild(enviado);

    setTimeout(() => {
      enviado.remove();
      envioFormulario.reset();
    }, 5000);
  }, 4000);
}
