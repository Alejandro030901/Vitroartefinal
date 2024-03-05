
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var service = document.getElementById('service').value;
  var description = document.getElementById('description').value;

  if (name === '' || email === '' || phone === '' || service === '' || description === '') {
    alert('LLena todos los campos');
    return false;
  }

  if(name[A-Z0-9]){
    alert('elnombre tiene q tener una mayuscula y un numero')
  }

  // Additional validation logic for email, phone, etc. can be added here

  return true; // Submit the form if all validations pass
}
