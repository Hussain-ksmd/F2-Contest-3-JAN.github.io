let userData = [];
let id = 1;

document.querySelector('#signup-form').addEventListener('submit', e => {
  e.preventDefault();
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let confirmPassword = document.querySelector('#confirm-password').value;

  // Validation
  if (name.length < 2) {
    document.querySelector('#error-msg').innerHTML = "Name should at least be 2 letter word";
    return;
  }
  if (password !== confirmPassword) {
    document.querySelector('#error-msg').innerHTML = "Passwords do not match";
    return;
  }
  if (password === name || password === email) {
    document.querySelector('#error-msg').innerHTML = "Password cannot be the sameas name or email";
    return;
    }
    
    // Check if email is already registered
    let emailExists = userData.find(user => user.email === email);
    if (emailExists) {
    document.querySelector('#error-msg').innerHTML = "Email already registered";
    return;
    }
    
    // Store user data
    let newUser = { id: id, name: name, email: email, password: password };
    userData.push(newUser);
    id++;
    
    // Redirect to login page
    window.location.href = "login.html";
    });
