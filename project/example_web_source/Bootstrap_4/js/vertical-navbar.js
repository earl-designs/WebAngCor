/* must be imported after JQuery */

// Left navbar button actions
$('.navbar-left-toggler').click(function(e) {
				$('.navbar-left').toggleClass('collapsed');
				$('.navbar-left').toggleClass('expanded');
});	
$('.navbar-left-collapse').click(function(e) {
				$('.navbar-left').addClass('collapsed');
				$('.navbar-left').removeClass('expanded');
});
$('.navbar-left-expand').click(function(e) {
				$('.navbar-left').removeClass('collapsed');
				$('.navbar-left').addClass('expanded');
});

// Right navbar button actions
$('.navbar-right-toggler').click(function(e) {
				$('.navbar-right').toggleClass('collapsed');
				$('.navbar-right').toggleClass('expanded');
});	
$('.navbar-right-collapse').click(function(e) {
				$('.navbar-right').addClass('collapsed');
				$('.navbar-right').removeClass('expanded');
});
$('.navbar-right-expand').click(function(e) {
				$('.navbar-right').removeClass('collapsed');
				$('.navbar-right').addClass('expanded');
});