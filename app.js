(function() {

	var count = 0;

	$(".empty").on("click", function() {
		count = count + 1;
		valeur_case = $(this).data("type");
		console.log(valeur_case);

		if (count % 2 === 1 && valeur_case === "clickOK") {
			console.log(count);
			$(this).removeClass("empty");
			$(this).addClass("red");
			$(this).prev().data("type", "clickOK");

		} else if (valeur_case === "clickOK") {
			$(this).removeClass("empty");
			$(this).addClass("yellow");
			$(this).prev().data("type", "clickOK");

		} else {
			count = count - 1;
		}

	});

})();
