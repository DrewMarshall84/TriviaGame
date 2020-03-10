var panel = $("#quiz-area");
// Question set
var questions = [{
  question: "When the Doctor first meets little Amelia outside after he crashes the TARDIS, what food does he ask her for?",
  answers: ["A Apple", "A Pear ", "Grapes", "A Cookie"],
  correctAnswer: "A Apple"
}, {
  question: "How many episodes of Classic Who aired prior to the movie with Paul McGann?",
  answers: ["694", "154", "541", "964"],
  correctAnswer: "694"
}, {
  question: "Professors Yana and Thascalos were aliases used by which villain??",
  answers: ["The Master", "The Doctor", "Missy", "Davros"],
  correctAnswer: "The Master"
}, {
  question: "Which volcano does the Doctor and his companion watch explode in season 4",
  answers: ["Mount Vesuvius", "Makian ", "Morne Garu", "Kaikata"],
  correctAnswer: "Mount Vesuvius"
}, {
  question: "What enemy do the Doctor and Rose face in the episode Rose?",
  answers: ["Autons", "Scaroth", "Daleks", "The Silence"],
  correctAnswer: "Autons"
}, {
  question: "What is the most invaded planet in the galaxy?",
  answers: ["Tivoli", "29th Galaxy", "Ogidi Galaxy", "Crab Galaxy"],
  correctAnswer: "Tivoli"
}, {
  question: "How long was it between the air dates of the finale of the last Classic Who series Survival and the premiere of the New Who episode Rose?",
  answers: ["15 Years", "51 Years", "17 Years", "12 Years"],
  correctAnswer: "15 Years"
}, {
  question: "Head of Scientific Research at UNIT, this cunning lady has met The Doctor multiple times. She helped him deal with small black cubes, the Zygons and even the terrifying Daleks!",
  answers: ["River Song", "Martha Jones", "Clara Oswald", "Kate Stewart"],
  correctAnswer: "Kate Stewart"
}, {
    question: "Which one of the following is given the nickname 'Potato Heads'?",
    answers: ["Ood", "Daleks", "Cyber Men", "Sontarans"],
    correctAnswer: "Sontarans"
}, {
    question: "Which of these was NOT the name of a Carrionite?",
    answers: ["Mother Doomfinger", "Mother Bloodtide", "They were all Carrionite names", "Mother Scaretoe"],
    correctAnswer: "Mother Scaretoe"
  },];
// Variable that will hold the setInterval
var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append("<button id='done'>Done</button>");
  },
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
        if ($(this).val() === questions[8].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-9']:checked"), function() {
        if ($(this).val() === questions[9].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};
// CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});