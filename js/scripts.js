window.addEventListener ("load", runOnLoad);

function runOnLoad () {
  // console.log(addQuestions(gatherFormData()));
  const form = document.getElementById("quiz");
  form.addEventListener("submit", gatherFormData)

}

function gatherFormData (event) {
  event.preventDefault();
  const question1 = parseInt(document.querySelector("input[name='question1']:checked").value);
  const question2 = parseInt(document.querySelector("input[name='question2']:checked").value);
  const question3 = parseInt(document.querySelector("input[name='question3']:checked").value);
  const question4 = parseInt(document.querySelector("input[name='question4']:checked").value);
  const question5 = parseInt(document.querySelector("input[name='question5']:checked").value);
  console.log(question5);

  let score = scoreQuestions(question1, question2, question3, question4, question5);

  console.log(score);

  return score
}

function scoreQuestions (q1, q2, q3, q4, q5) {
  let score = q1 + q2 + q3 + q4 + q5
  return score
}

