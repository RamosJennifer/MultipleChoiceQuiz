(function () {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    var output = []; // for each question...

    myQuestions.forEach(function (currentQuestion, questionNumber) {
      // we'll want to store the list of answer choices
      var answers = []; // and for each available answer...

      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push("<label>\n            <input type=\"radio\" name=\"question".concat(questionNumber, "\" value=\"").concat(letter, "\">\n            ").concat(letter, " :\n            ").concat(currentQuestion.answers[letter], "\n          </label>"));
      } // add this question and its answers to the output


      output.push("<div class=\"question\"> ".concat(currentQuestion.question, " </div>\n        <div class=\"answers\"> ").concat(answers.join(""), " </div>"));
    }); // finally combine our output list into one string of HTML and put it on the page

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers"); // keep track of user's answers

    var numCorrect = 0; // for each question...

    myQuestions.forEach(function (currentQuestion, questionNumber) {
      // find selected answer
      var answerContainer = answerContainers[questionNumber];
      var selector = "input[name=question".concat(questionNumber, "]:checked");
      var userAnswer = (answerContainer.querySelector(selector) || {}).value; // if answer is correct

      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++; // color the answers green

        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    }); // show number of correct answers out of total

    resultsContainer.innerHTML = "".concat(numCorrect, " out of ").concat(myQuestions.length);
  }

  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");
  var myQuestions = [{
    question: "What island does this movie take place in?",
    answers: {
      a: "Sri Lanka",
      b: "Hawaii",
      c: "Long Island",
      d: "Tahiti"
    },
    correctAnswer: "b"
  }, {
    question: "Stitch is experiment #______",
    answers: {
      a: "262",
      b: "123",
      c: "626",
      d: "007"
    },
    correctAnswer: "c"
  }, {
    question: "Who is Lilo and Stitch's idol?",
    answers: {
      a: "Elvis Presley",
      b: "Ella Fitzgerald",
      c: "Jerry Lee Lewis",
      d: "Michael Sheen"
    },
    correctAnswer: "a"
  }, {
    question: "Why does Lilo bring pudge the fish a peanut butter sandwich every Thursday?",
    answers: {
    a: "Because you can't give a fish tuna!",
    b: "(Do you know what tuna is made of)?",
    c: "He asked for one.",
    d: "He controls the weather"
    }, 
    correctAnswer: "d"
 }, {
    question: "What endangered species is the earth a refuge for?",
    answers: {
    a: "Monarchs",
    b: "Fleas",
    c: "Mosquitos",
    d: "Bees"
    },
    correctAnswer: "c"
  }, {
    question: "When did Cobra Bubbles meet the Grand Councilwoman?",
    answers: {
    a: "Roswell, 1973",
    b: "Orwell, 1984",
    c: "Senate Floor. March 15, 44B.C.",
    d: "Russia, 1917"
    },
    correctAnswer: "a"
  }, 
  {
    question: "What was Jumba's profession before getting arrested?",
    answers: {
    a: "Mad Scientist",
    b: "Lead Scientist of Galaxy Defense Industries",
    c: "Grand Supreme Little Darling",
    d: "Doctor of Intergalactic Studies"
    },
    correctAnswer: "b"
  }, 
  {
    question: "What children's story did Stitch connect with?",
    answers: {
    a: "Charlottes Webb",
    b: "The Miraculous Journey of Edward Tulane",
    c: "The Three Little Pigs",
    d: "The Ugly Duckling"
    },
    correctAnswer: "d"
  }, {
    question: "This is my family. I foud it all on my own. It's _____ .",
    answers: {
    a: "little and broken, but still good.",
    b: "time to go now.",
    c: "finished.",
    d: "full of love."
    },
    correctAnswer: "a"
  }, {
    question: "What does *Ohana* mean?",
    answers: {
    a: "Family",
    b: "And that means",
    c: "Nobody gets left behind",
    d: "Or forgotten."
    },
    correctAnswer: "a"
  }, 
]; // display quiz right away

  buildQuiz(); // on submit, show results

  submitButton.addEventListener("click", showResults);
})();