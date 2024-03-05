window.addEventListener('load', (event) => {
  document.querySelector('#contactForm').addEventListener('submit', function(event) {
      event.preventDefault();

      var name = document.querySelector('input[name="name"]').value;
      var email = document.querySelector('input[name="email"]').value;
      var message = document.querySelector('textarea[name="message"]').value;

      if (!name || !email || !message) {
          alert('Por favor, completa todos los campos.');
          return;
      }

      var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!re.test(email)) {
          alert('Por favor, introduce un correo electrónico válido.');
          return;
      }

      // Aquí puedes agregar el código para enviar el formulario a la API de contacto.
      console.log('Formulario de contacto enviado con éxito!');
  });
})