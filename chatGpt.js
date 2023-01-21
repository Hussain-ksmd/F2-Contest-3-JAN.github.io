let questions = [
    { question: "What is a dog", answer: "Dog is a animal with 4 legs", imageLink: "dog.jpg" },
    { question: "What is a cat", answer: "Cat is a animal with 4 legs and fur", imageLink: "cat.jpg" },
// Add more sample questions
];

document.querySelector('#submit-btn').addEventListener('click', e => {
e.preventDefault();
let question = document.querySelector('#question').value;

// Check if question matches a question in the array
let answerObj = questions.find(q => q.question === question);
if (!answerObj) {
document.querySelector('#error-msg').innerHTML = "Sorry, we couldn't find an answer for your question";
return;
}

// Display answer and image
document.querySelector('#answer').innerHTML = answerObj.answer;
document.querySelector('#answer-img').src = answerObj.imageLink;
document.querySelector('#answer-container').style.display = "block";
document.querySelector('#speak-form').style.display = "block";
});

document.querySelector('#speak-form').addEventListener('submit', e => {
e.preventDefault();
let token = document.querySelector('#token').value;

// Check if token is valid
let user = userData.find(user => user.token === token);
if (!user) {
document.querySelector('#error-msg').innerHTML = "Invalid token";
return;
}

// Check if user still has calls remaining
if (user.callsLeft <= 0) {
document.querySelector('#error-msg').innerHTML = "You have reached your maximum number of calls for the Text to Speak feature";
return;
}

// Display user name and decrement callsLeft
document.querySelector('#error-msg').innerHTML = `Welcome ${user.name}. You have ${user.callsLeft} calls left for the Text to Speak feature`;
user.callsLeft--;
});

