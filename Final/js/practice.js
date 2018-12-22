$(document).ready(function() {

	var vid = document.getElementById("video1");
	$(".sound").click(function() {
		vid.muted = true;
		$(".sound").toggleClass("test");

	});

	$(".hover").mouseenter(function() {
		$(".menuarea").fadeIn();
	});

	$(".hover").mouseleave(function() {
		$(".menuarea").fadeOut();
	});

	

	
	// $ (".video").delay(2000).fadeIn("slow");
		



	});



