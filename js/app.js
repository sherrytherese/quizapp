$(document).ready(function(){
	var score = [];
	var questions = [{
		q: "What kind of router do you currently use?",
		s: ["Netgear", "Apple", "Securifi", "I'm not sure"]
	} , {
		q: "How large is your home?",
		s: ["Apartment", "Small Home", "Large Home"]
	} , {
		q: "What do you want from your router?",
		s: ["No more dead spots", "Always connected", "Look beautiful"]
	}]
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
