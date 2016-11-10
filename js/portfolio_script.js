function hideMenu () {
			$("#portfolioList").fadeOut();
			$("#navs").idleTimer("destroy");
			$("#portfolioNav").css("opacity","0.6");
			$("#portfolioNav").hover(function(){
				$("#portfolioNav").css("opacity","1");
			}, function(){
				$("#portfolioNav").css("opacity","0.6");
			});
}
$("#menu").click(function () {
	$("#navs").idleTimer(2000);
	$("#portfolioList").fadeIn();
	$("#portfolioNav").css("opacity","1");
	$("#portfolioNav").hover(function(){
		$("#portfolioNav").css("opacity","1");
	});
	$("#navs").bind("idle.idleTimer", function(){
		hideMenu();
	});
});
$("#portfolioDescription").click(function () {
		hideMenu();
});
$("#imgContainer").click(function () {
		hideMenu();
});