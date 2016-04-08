//Variables
	var questionNumber = 0;
	var counter = 0;
	var userAnswers = new Array();
	var correctAnswers = 0;

$(document).ready(function(){
	var score = [];
	var questions = [
		{question: "What kind of router do you currently use?",
		choices: ["Netgear", "Apple", "Securifi", "I'm not sure"],
		correctAnswer: 2, //how do I pair up a value to each answer? ie = Netgear = 1, Apple = 2 etc.
		questionNumber: 1},


		{question: "How large is your home?",
		choices: ["Apartment", "Small Home", "Large Home"],
		correctAnswer: 2,
		questionNumber: 2}, 

		{question: "What do you want from your router?",
		choices: ["No more dead spots", "Always connected", "Look beautiful"],
		correctAnswer: 2,
		questionNumber: 3},
	];
	//First Question
	$(".quizQuestions").text(questions[questionNumber].question);
	var multChoice = $.each(questions[questionNumber].choices,function(index,value){value});
	$.each(multChoice,function(index,value){
		$(".quizAnswers").append("<label class='radio'><ul><input type='radio' name='check' data-ans=" + index +">"+ "    "+ value+"</label></ul>");
	});

	//Question Number
	$(".questionNumber").text("Question "+ questions[0].questionNumber + " of" +questions.length);

	//Get User Answers
	$(".radio").on("click", function getCheckedValue() {
		var radio = document.getElementsByName('check');
		var val = "";
		for (var i = 0, length = radio.length; i <length; i++){
			if (radio[i].checked){
				val = radio[i].value;
				console.log(val);
			}
		}
	})
		
	//Check answer 
	function checkAnswer(){
		var userAnswers = $("input[type=radio]:checked").data("ans");
		userAnswers.push(userAnswers);
		console.log(userAnswers);

		if (userAnswers === questions[counter].correctAnswer){
			correctAnswers++;
		}
		counter++;
		console.log(counter);
		console.log(correctAnswers);
	}

	//On Submit Button
	$(".submitButton").on("click", function(){
		questionNumber++;
		if (questionNumber == questions.length){
			$(this).css("display","none");
		}
		else {
			nextQuestion();
		};
	});


	//Next Question
	function nextQuestion(){
		$(".questionNumber").text("Question "+ questions[0].questionNumber + " of" +questions.length);
		$(".quizQuestions").text(questions[questionNumber].question);
		
		//previous choices to remove
		var multChoice = $.each(questions[questionNumber-1].choices,function(index,value){value});
		console.log(multChoice);
		multChoice.splice(0);
		console.log(multChoice);

		//attach next set of choices
		$.each(multChoice,function(index,value){
		$(".quizAnswers").append("<label class='radio'><ul><input type='radio' name='check' data-ans=" + index +">"+ "    "+ value+"</label></ul>");
		});				                  
	}

	

})



/*
	$("#question1").show();
	$("#choices1").show();
	$("#question2").hide();
	$("#choices2").hide();
	$("#question3").hide();
	$("#choices3").hide();

	//question 2
	$(document).on("click",":submit",function(){
		event.preventDefault();
		$("#question1").hide();
		$("#choices1").hide();
		$("#question2").show();
		$("#choices2").show();

		//question 3
		$(document).on("click",":submit",function(){
			event.preventDefault();
			$("#question2").hide();
			$("#choices2").hide();
			$("#question3").show();
			$("#choices3").show();
		})
	})

	
}); 
*/
