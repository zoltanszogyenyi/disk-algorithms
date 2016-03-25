$(document).ready(function() {
	// if user presses enter
	$('#diskMainInput').keypress(function(e) {
		if(e.which == 13) {
	        // generate span inside input
	        var inputValue = $('#diskMainInput').val();

	        $('.disk-values-for-chart').append('<button class="button large-button">' + inputValue + '</button>');
	        $('#diskMainInput').val('')
	    }
	})
})