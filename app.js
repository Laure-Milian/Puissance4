(function() {

	var count = 0;

	$(".empty").on("click", function() {
		count = count + 1;
		valeur_case = $(this).data("type");

		if (count % 2 === 1 && valeur_case === "clickOK") {
			changeCouleur(this, "red");
		} else if (valeur_case === "clickOK") {
			changeCouleur(this, "yellow");
		} else {
			count = count - 1;
		}

	});

	function changeCouleur(caseVide, couleur) {
			$(caseVide).removeClass("empty");
			$(caseVide).addClass(couleur);
			$(caseVide).data("type", "clickForbidden");			
			$(caseVide).prev().data("type", "clickOK");
	}

})();
