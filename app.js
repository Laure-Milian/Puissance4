(function() {

	var count = 0;

	$(".empty").on("click", function() {
		count = count + 1;
		valeur_case = $(this).data("type");

		if (count % 2 === 1 && valeur_case === "clickOK") {
			$(this).removeClass("empty");
			$(this).addClass("red");
			$(this).data("type", "clickForbidden");			
			$(this).prev().data("type", "clickOK");

		} else if (valeur_case === "clickOK") {
			$(this).removeClass("empty");
			$(this).addClass("yellow");
			$(this).data("type", "clickForbidden");
			$(this).prev().data("type", "clickOK");

		} else {
			count = count - 1;
		}

	});

})();
