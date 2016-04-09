/*Global Variables*/
	var questionNumber = 0;
	var counter = 0;
	var userAnswers = new Array();
	var correctAnswers = 0;
	var score = [];
	var questions = [
		{question: "Which cat eats all your food?",
		choices: ["Tubbs", "Peaches", "Bandit"],
		correctAnswer: 1, //how do I pair up a value to each answer? ie = Netgear = 1, Apple = 2 etc.
		questionNumber: 0},

		{question: "Which cat leaves the most fish?",
		choices: ["Fred", "Miss Fortune", "Chairman Meow"],
		correctAnswer: 2,
		questionNumber: 1}, 

		{question: "How many cats can fit on the giant cushion?",
		choices: ["1", "2", "3"],
		correctAnswer: 2,
		questionNumber: 2},

		{question: "Which Goodie holds the most cats?",
		choices: ["Tiramisu Cube", "Cardboard Train", "Cat Metropolis"],
		correctAnswer: 3,
		questionNumber: 3},

		{question: "What's the Gold Fish Exchange Rate?'",
		choices: ["10x250", "10x300", "10x500"],
		correctAnswer: 3,
		questionNumber: 4},

		{question: "What Goodie gets Xerxes IX?",
		choices: ["Sashimi", "Zanzibar Cushion", "Royal Bed"],
		correctAnswer: 2,
		questionNumber: 5},
	]
/*Functions*/
//Display the Questions
function displayChoices () {
	for (var i = 0; i <questions[questionNumber].choices.length; i++){
		var currentChoices = questions[questionNumber].choices[i];
	$(".myChoices"+i).text("    "+currentChoices);
	}
}

function displayQuestions() {
	var currentQuestion = questions[questionNumber].question;
	$(".quizQuestions").text(currentQuestion);
}

//Count Question Number
function questionCount() {
	var questionCount = questions[questionNumber].questionNumber+1;
	$(".questionNumber").text("Question "+questionCount+" of "+questions.length);
}

//Display Summary Page
function summaryPage() {
	$(".quiz").hide();
	if(correctAnswers > questions.length/2){
		$(".summary").text("Congratulations! You got "+correctAnswers+" out of "+questions.length+" questions correct!");
	}
	else {
		$(".summary").text("You got "+correctAnswers+" out of "+questions.length+" questions correct. Better luck next time!");
	}
}

/*Document Ready*/
$(document).ready(function(){
	questionCount();
	displayQuestions();
	displayChoices();

	//Submit Button
	$(".submitButton").click(function(){
		
		//Check if end of Quiz
		if (questions[questionNumber].questionNumber < questions.length-1){
		console.log("More Questions to Come");

			//Get user selection
			var userInput = $('input[name=myChoices]:checked').val();
			console.log("userInput is "+userInput)

			//Compare user selection to correct answer
			if (userInput == questions[questionNumber].correctAnswer) {
				correctAnswers++ //increase the correctAnswers count
			}
			console.log("Total correctAnswers are "+correctAnswers);
			console.log("correctAnswer for this question is "+questions[questionNumber].correctAnswer);
			//Increase questionNumber if less than # questions
			//if (questions[questionNumber].questionNumber < questions.length-1){
			//	questionNumber++;
			//}
			//else {
			//	return questionNumber;
			//}
			questionNumber++;
			console.log("questionNumber is "+questionNumber);

			//Display next Questions
			$('input[name=myChoices]').attr('checked',false);
			questionCount();
			displayQuestions();
			displayChoices();
		}
		else {
		console.log("End of Quiz");

			//Get user selection
			var userInput = $('input[name=myChoices]:checked').val();
			console.log("userInput is "+userInput)

			//Compare user selection to correct answer
			if (userInput == questions[questionNumber].correctAnswer) {
				correctAnswers++ //increase the correctAnswers count
			}
			console.log("Total correctAnswers are "+correctAnswers);
			console.log("correctAnswer for this question is "+questions[questionNumber].correctAnswer);
			console.log("questionNumber is "+questionNumber);

			//Display Summary Page
			summaryPage();
		}
	})

})





