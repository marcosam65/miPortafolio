

let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
let toggle_close = document.getElementById('toggle_close');

toggle_open.addEventListener('click', toggleMenu);
toggle_close.addEventListener('click', toggleMenu);

//funcion cambio de iconos en menu
function toggleMenu() {
    menu.classList.toggle('show-menu');
  
    if(menu.classList.contains('show-menu')) {
      toggle_open.style.display = 'none';
      toggle_close.style.display = 'block';
    }
    else {
      toggle_open.style.display = 'block';
      toggle_close.style.display = 'none';
    }

  }

//scrip envio formulario de contacto

const btnEnvio = document.getElementById('enviarCorreo');

btnEnvio.addEventListener('click', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;
  window.location.href = `mailto:marcosami@outlook.es? 
  subject= envioDesdeFormulario&body=Nombre%3A${nombre}%0ACorreo%3A
  ${email}%0AMensaje%3A${mensaje}`;
});