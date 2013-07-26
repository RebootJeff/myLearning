var start = function(option){
	$('#container').html("");

	var input = prompt('Type an integer between 1 and 128');

	if (input >= 1 && input <= 128){	// Check for non-ridiculous input
		var square_size = $('body').width()/input - 2;	// The -2 accounts for border size

		for(var i = 1; i <= input; i++){
			for(var j = 1; j <= input; j++){
				$('#container').append('<div class="grid_square"></div>');
			}
			$('#container').append('<div class="new_row"></div>');
		}
		$('.grid_square').css('width',square_size);
		$('.grid_square').css('height',square_size);

		$('.grid_square').mouseenter(function(){
			switch(option){
				case 1:
					$(this).addClass('grid_square_lit');
					break;
				case 2:

					break;
				case 3:
					// animate to 0% opacity over 200ms, then back to 100%
					// opacity over 800ms when cursor leaves square
					$(this).fadeTo(200,0);
					$(this).mouseleave(function(){
						$(this).fadeTo(800,1);
					});
					break;
			}
		});
	}
	else{
		alert('No. You are crazy.');
	}
}