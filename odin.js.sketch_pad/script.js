
var input = 128;

$(document).ready(function(){
	var body_width = $('body').width();
	var square_size = (body_width - input*2)/input;

	for(var i = 1; i <= input; i++){
		for(var j = 1; j <= input; j++){
			$('body').append('<div class="grid_square"></div>');
		}
		$('body').append('<div class="new_row"></div>');
	}
	$('.grid_square').css('width',square_size);
	$('.grid_square').css('height',square_size);

	$('.grid_square').mouseenter(function(){
		$(this).addClass('grid_square_lit');
	});
});