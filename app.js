(function() {

	console.log("coucou");

	var count = 0;

	$(".empty").on("click", function() {
		count = count + 1;
		if (count % 2 === 1) {
			console.log(count);
			$(this).removeClass("empty");
			$(this).addClass("red");
		} else {
			$(this).removeClass("empty");
			$(this).addClass("yellow");
		}
	});


	/*var count = 0;
	var cases = $(".cases");

	var len = cases.length;



	$(".btn-jouer").click(function() {
		count += 1;
		for (i = 0; i < len; i++) {
			var numero_case = ($(cases[i]).data("type"));
			console.log(numero_case);
			if (count === numero_case) {
				console.log("yeah");
				$("#column1>.cases").css("backgroundColor", "red");
			}
		}


	});*/

})();
