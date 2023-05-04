// JavaScript
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenuMobile = document.querySelector('.navbar-menu-mobile');

navbarToggle.addEventListener('click', () => {
  navbarMenuMobile.classList.toggle('active');
});

// formulario
function validarFormulario() {
  // Obtener los valores de los campos
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  var mensaje = document.getElementById("mensaje").value;

  // Validar el correo electrónico utilizando una expresión regular
  var emailRegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (!emailRegExp.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return false;
  }

  // Validar el número de teléfono utilizando una expresión regular
  var telefonoRegExp = /^[0-9]{10}$/;
  if (telefono !== "" && !telefonoRegExp.test(telefono)) {
    alert("Por favor, ingrese un número de teléfono válido.");
    return false;
  }

  // Verificar que el mensaje tenga al menos 10 caracteres
  if (mensaje.length < 10) {
    alert("Por favor, ingrese un mensaje de al menos 10 caracteres.");
    return false;
  }

  // Si todos los campos son válidos, se puede enviar el formulario
  return true;
}
// para saludo 
const card = document.getElementById('card');

card.addEventListener('click', () => {
  card.classList.add('card-pulsed');
  setTimeout(() => {
    card.classList.remove('card-pulsed');
  }, 200);
});

let text = document.querySelector('.hidden-text');
setTimeout(() => {
  text.style.visibility = "visible";
  let message = text.innerHTML;
  text.innerHTML = "";
  for (let i = 0; i < message.length; i++) {
    text.innerHTML += "<span>" + message.charAt(i) + "</span>";
  }
  let char = 0;
  let timer = setInterval(onTick, 50);
  function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.style.display = 'inline';
    char++;
    if (char === message.length) {
      clearInterval(timer);
    }
  }
}, 2000);

// store

const button = document.querySelector('.button');

button.addEventListener('mouseenter', () => {
  button.classList.add('shake');
});

button.addEventListener('mouseleave', () => {
  button.classList.remove('shake');
});

//flecha

const arrow = document.querySelector('.arrow');
setInterval(() => {
  arrow.classList.toggle('show');
}, 2000);
