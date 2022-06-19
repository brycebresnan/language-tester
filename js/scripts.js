//Business Logic

//Adds question values together. Returns sum.
function scoreQuestions (q1, q2, q3, q4, q5) {
  let score = q1 + q2 + q3 + q4 + q5;
  return score;
}

//scores results and returns a string with the name of the best match
function scoreSorting (score) {
  let match;
  if (score === 20) {
    match = "Brainf*CK";
  }
  else if (score < 20 && score >= 15) {
    match = "Rockstar";
  }
  else if (score < 15 && score >= 10) {
    match = "Velato";
  }
  else if (score < 10 && score >= 5) {
    match = "TrumpScript";
  }
  else if (score < 5) {
    match = "Chicken";
  }
  else {
    match = "error";
  }
  return match;
}

//User Interface Logic

function sortingMachine(event) {
  event.preventDefault();
  let quizAnswers = scoreFormData();
  let match = scoreSorting(quizAnswers);
  quizResults(match);
}

//Gathers user input from checked radio box with associated int values, then adds scores and returns single int score.
function scoreFormData () {
  const question1 = parseInt(document.querySelector("input[name='question1']:checked").value);
  const question2 = parseInt(document.querySelector("input[name='question2']:checked").value);
  const question3 = parseInt(document.querySelector("input[name='question3']:checked").value);
  const question4 = parseInt(document.querySelector("input[name='question4']:checked").value);
  const question5 = parseInt(document.querySelector("input[name='question5']:checked").value);

  let score = scoreQuestions(question1, question2, question3, question4, question5);
  return score;
}

//sorts through score matches and inputs results strings into the appropraite html selector.
function quizResults (match) {
  let info;
  if (match === "Brainf*CK") {
    document.getElementById("resultsPre").innerText ="After running the numbers, we think your interests make you a perfect candidate for learning..."
    document.getElementById("resultsName").innerText = (match + "!");
    info = "This language is made to play with your mind - it is notoriously difficult to program in. Brainf*CK is not intended for practical use but to challenge and amuse programmers. This is a minimalistic language that uses only eight commands and an instruction pointer, each made up of a single character. Creator Urban Müller was still a physics student when he made this language (in 1993). Since then, this obscure language has reached almost a cult following. Let's see how a sample of the headache-inducing code that will print out 'Hello world!' looks like:\n\n++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.\n<<+++++++++++++++.>.+++.——.——–.>+.>.";
    document.getElementById("resultsInfo").innerText = info;
  }
  else if (match === "Rockstar") {
    document.getElementById("resultsPre").innerText ="After running the numbers, we think your interests make you a perfect candidate for learning..."
    document.getElementById("resultsName").innerText = (match + "!");
    info = "How would you like to call yourself a rockstar programmer? ? It sounds excellent, and because of this joke programming language, it's possible to become one. Rockstar programming language is designed to create computer programs that are also song lyrics. One of the reasons Dylan Beattie made it is to stop recruiters and managers from referring to people as “rockstar programmers.” Now you can have a sticker on their laptop saying “CERTIFIED ROCKSTAR DEVELOPER.” That's rock'n'roll! Moreover, adding comments to Rockstar programs is strongly discouraged because it's up to the audience to find their own meaning. ";
    document.getElementById("resultsInfo").innerText = info;
  }
  else if (match === "Velato") {
    document.getElementById("resultsPre").innerText ="After running the numbers, we think your interests make you a perfect candidate for learning..."
    document.getElementById("resultsName").innerText = (match + "!");
    info = "This exciting programming language uses MIDI files as source code: the pattern of notes determines commands. Programmer-musicians will love Velato because they can compose a musical piece that fills the constraints necessary to compile to a working Velato program. Each song has a secret message, and the program determines when it's compiled as Velato. So, let's make some music and code at the same time!";
    document.getElementById("resultsInfo").innerText = info;
  }
   else if (match === "TrumpScript") {
    document.getElementById("resultsPre").innerText ="After running the numbers, we think your interests make you a perfect candidate for learning..."
    document.getElementById("resultsName").innerText = (match + "!");
    info = "It started as a joke that this is the programming language Trump would approve of - just as he is making America great again, owners hope that this language will make programming great. Although development on this project has stopped, owners want to send a strong message. They think that this joke isn’t funny anymore and want to influence people to actually do something about severe problems in the world. For example, you can donate to charity instead of spending your time beating the “Trump is ridiculous” meme to death.";
    document.getElementById("resultsInfo").innerText = info;
  }
  else if (match === "Chicken") {
    document.getElementById("resultsPre").innerText ="After running the numbers, we think your interests make you a perfect candidate for learning..."
    document.getElementById("resultsName").innerText = (match + "!");
    info = "As crazy as this may sound, it's the truth - this language allows only one world, and this word is “chicken”! Swedish programmer and creator of this language, Torbjörn Söderstedt, was inspired after hearing Doug Zongker's parody of scientific speeches to make Chicken programming language. To write the whole code would take half the page and consist of nothing but the word 'chicken,' so here is just a piece of code:\n\nchicken chicken chicken chicken chicken chicken chicken chicken\nchicken chicken chicken\nchicken chicken chicken chicken chicken chicken";
    document.getElementById("resultsInfo").innerText = info;
  }
  else {
    errorMessage = "You forgot to answer a question! Please fill out all 5 answers and resubmit this quiz."
    document.getElementById("resultsName").innerText = errorMessage
  }
}

window.addEventListener ("load", function() {
  const form = document.getElementById("quiz");
  form.addEventListener("submit", sortingMachine); 
})