const users = [];

function validateSignup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessage = document.getElementById("error-message");

  // Name validation
  if (name.length < 2) {
    errorMessage.innerHTML = "Name must be at least 2 letters long";
    return;
  }

  // Email validation
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    errorMessage.innerHTML = "Invalid email address";
    return;
  }

  // Check if email is already registered
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      errorMessage.innerHTML = "Email already registered";
      return;
    }
  }

  // Password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    errorMessage.innerHTML = "Password must have at least 1 capital letter, 1 small, 1 number and 1 special characters";
    return;
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    errorMessage.innerHTML = "Passwords do not match";
    return;
  }

  // Check if password is same as name or email
 
  if (password === name || password === email) {
    errorMessage.innerHTML = "Password cannot be the same as name or email";
    return;
    }
    
    // Store user details
    const id = users.length + 1;
    const user = { id, name, email, password };
    users.push(user);
    
    
    // Redirect to login page
    window.location.href = "login.html";
    }
    