document.querySelector('#login-form').addEventListener('submit', e => {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
  
    // Check if email and password match a registered user
    let user = userData.find(user => user.email === email && user.password === password);
    if (!user) {
      document.querySelector('#error-msg').innerHTML = "Invalid email or password";
      return;
      }
      
      // Generate and store token for user
      let token = generateToken();
      user.token = token;
      
      // Redirect to chatGpt page
      window.location.href = "chatGpt.html";
      });
      


      function generateToken() {
      let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let token = "";
      for (let i = 0; i < 10; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return token;
      }
  