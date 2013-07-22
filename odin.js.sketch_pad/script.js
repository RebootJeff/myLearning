var prompt_size = function(){
	$('#container').html("");

	var input = prompt('Type an integer between 1 and 128');

	if (input >= 1 && input <= 128){
		var body_width = $('body').width();
		var square_size = (body_width - input*2)/input;

		for(var i = 1; i <= input; i++){
			for(var j = 1; j <= input; j++){
				$('#container').append('<div class="grid_square"></div>');
			}
			$('#container').append('<div class="new_row"></div>');
		}
		$('.grid_square').css('width',square_size);
		$('.grid_square').css('height',square_size);

		$('.grid_square').mouseenter(function(){
			$(this).addClass('grid_square_lit');
		});
	}
	else{

	}
}