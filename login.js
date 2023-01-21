function validateLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Check if email and password match with existing record
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      // Generate token
      const token = generateToken();
      users[i].token = token;

      // Redirect to next page
      window.location.href = "chatgpt.html?token=" + token;
      return;
    }
  }

  // If email and password do not match with existing record
  errorMessage.innerHTML = "Invalid email or password";
}

function generateToken() {
  let token = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return token;
}
