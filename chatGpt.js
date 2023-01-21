const questions = [
    { question: "What is a dog", answer: "Dog is a animal with 4 legs", imageLink: "dog.jpg" },
    // Add more questions here
  ];
  
  function getAnswer() {
    const question = document.getElementById("question").value;
  
    for (let i = 0; i < questions.length; i++) {
      if (question === questions[i].question) {
        const answer = `Answer: ${questions[i].answer} <br> <img src=${questions[i].imageLink}>`;
        document.getElementById("answer").innerHTML = answer;
        document.getElementById("token-section").style.display = "block";
        return;
      }
    }
  
    document.getElementById("answer").innerHTML = "Question not found";
  }
  
  function verifyToken() {
    const token = document.getElementById("token").value;
    const tokenMessage = document.getElementById("token-message");
  
    for (let i = 0; i < users.length; i++) {
      if (users[i].token === token) {
        if (!users[i].hasOwnProperty("callsLeft")) {
          users[i].callsLeft = 10;
        }
  
        if (users[i].callsLeft > 0) {
          tokenMessage.innerHTML = `Welcome, ${users[i].name}. Calls left: ${users[i].callsLeft}`;
          users[i].callsLeft--;
        } else {
          tokenMessage.innerHTML = "You have exceeded the number of allowed calls";
        }
  
        return;
      }
    }
  
    tokenMessage.innerHTML = "Invalid token";
  }
  