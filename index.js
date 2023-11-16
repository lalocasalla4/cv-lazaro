// index.js
document.addEventListener('DOMContentLoaded', function () {
  // Recuperar el estado de valoración desde el almacenamiento local
  var estadoValoracion = JSON.parse(localStorage.getItem('estadoValoracion')) || {};

  // Si el usuario ya ha enviado una valoración, deshabilitar el botón
  if (estadoValoracion.valoracionEnviada) {
    deshabilitarBoton('btnIncrementar');
  }

  // Si hay un valor guardado, establecerlo como el valor inicial del contador
  if (estadoValoracion.contador !== undefined) {
    document.getElementById('contadorValoraciones').textContent = estadoValoracion.contador;
  }
});

function incrementarValoracion() {
  var contadorSpan = document.getElementById('contadorValoraciones');

  // Verificar si el usuario ya ha enviado una valoración
  var estadoValoracion = JSON.parse(localStorage.getItem('estadoValoracion')) || {};
  if (estadoValoracion.valoracionEnviada) {
    alert('Ya has enviado una valoración.');
    return;
  }

  // Incrementar el contador localmente
  var contador = parseInt(contadorSpan.textContent) + 1;
  contadorSpan.textContent = contador;

  // Almacenar el valor del contador en el almacenamiento local
  localStorage.setItem('estadoValoracion', JSON.stringify({
    contador: contador,
    valoracionEnviada: true
  }));

  // Deshabilitar el botón después de enviar la valoración
  deshabilitarBoton('btnIncrementar');
}

function deshabilitarBoton(idBoton) {
  document.querySelector('.btnIncrementar').disabled = true;
}