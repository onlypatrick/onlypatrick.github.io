$(".navLink").click(function () {
	if ($(this).hasClass("inactive")) {
		$(".navLink").toggleClass("inactive");
		$(".navLink").toggleClass("active");
		$(".arrow").toggleClass("rightSide");
		$("#contentContainer").removeClass("clearAnim");
		$("#contentContainer").toggleClass("showWhat");
		$("#contentContainer").toggleClass("showWho");
	}
});