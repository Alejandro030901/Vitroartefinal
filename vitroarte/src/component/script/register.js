document.querySelector('form').addEventListener('submit', function(event) {
    // Obtén los campos del formulario
    var email = document.querySelector('#email');
    var name = document.querySelector('#name');
    var password = document.querySelector('#password');
    var confirm = document.querySelector('#confirm');
  
    // Verifica que los campos no estén vacíos
    if (!email.value || !name.value || !password.value || !confirm.value) {
      alert('Por favor, llena todos los campos.');
      event.preventDefault(); // Evita que se envíe el formulario
    }
  });