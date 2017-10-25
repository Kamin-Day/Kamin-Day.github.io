window.addEventListener("load", function(){

	resumeView = document.getElementsByClassName("resume")[0];
	aboutView = document.getElementsByClassName("about")[0];

	var aboutButton = document.getElementById("aboutme");
	aboutButton.addEventListener("click", function(){
		resumeView.style.display = "none";
		aboutView.style.display = "block";
		resumeButton.style.color = "rgb(244,242,240)";
		aboutButton.style.color = "rgb(119, 211, 239)";

	});

	var resumeButton = document.getElementById("myresume");
	resumeButton.addEventListener("click", function(){
		resumeView.style.display = "block";
		aboutView.style.display = "none";
		resumeButton.style.color = "rgb(119, 211, 239)";
		aboutButton.style.color = "rgb(244,242,240)";
	});
	
});

