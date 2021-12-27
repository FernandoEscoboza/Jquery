
//verifica que todos los elementos esten cargados
$(document).ready(() =>{

	//selector id
	var red = $("#red").css('background','red')
						.css("color", "white");

	var green = $("#green").css('background','green')
						.css("color", "white");

	var yellow = $("#yellow").css('background','yellow')
						.css("color", "white");

	//selector class
	var myclass = $('.zebra').css('padding', '5px');

	$('.sin_borde').click(function() {
		console.log("Click presionado");
		$(this).addClass('zebra');
	});
     // 40235626534

	// Selectore de etiquetas
	var parrafos = $('p').css('cursor', 'pointer');

	parrafos.click(function(){
		var that = $(this);

		if(!that.hasClass('grande')){
			that.addClass('grande');
		}else{
			that.removeClass('grande');
		}
		// $(this).removeClass('zebra');
	});

	// Selector pde atributo
	$('[tittle="Google"]').css('background','orange');
	$('[tittle="Facebook"]').css('background','yellow');

	// Otros selectores
	// $('p, a').addClass('margen-superior');

	// eq() : indica en que elemento te posicionas
	var find = $('#caja .resaltado').eq(0).parent().find('[tittle="Google"]');

});