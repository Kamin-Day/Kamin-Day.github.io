window.addEventListener("load", function(){
	

	resumeView = document.getElementsByClassName("resume")[0];
	aboutView = document.getElementsByClassName("about")[0];

	var aboutButton = document.getElementById("aboutme");
	aboutButton.addEventListener("click", function(){
		resumeView.style.display = "none";
		aboutView.style.display = "block";
	});

	var resumeButton = document.getElementById("myresume");
	resumeButton.addEventListener("click", function(){
		resumeView.style.display = "block";
		aboutView.style.display = "none";
	});
	
});
