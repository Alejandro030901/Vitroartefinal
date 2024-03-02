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

  document.querySelector('#serviceForm').addEventListener('submit', function(event) {
      event.preventDefault();

      var name = document.querySelector('input[name="name"]').value;
      var email = document.querySelector('input[name="email"]').value;
      var phone = document.querySelector('input[name="phone"]').value;
      var service = document.querySelector('input[name="service"]').value;
      var description = document.querySelector('textarea[name="description"]').value;

      if (!name || !email || !phone || !service || !description) {
          alert("Todos los campos deben ser llenados");
          return false;
      }

      if (description.length > 144) {
          alert("La descripción no puede exceder los 144 caracteres");
          return false;
      }

      // Aquí puedes agregar el código para enviar el formulario a la API de servicios.
      console.log('Formulario de servicios enviado con éxito!');
  });
});
