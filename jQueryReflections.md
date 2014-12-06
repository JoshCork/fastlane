## 12/5/2014 - Automatically update the page based on an input box

This was my solution:

	$('#input').on('change', function() {
	    var val;
	    val = $(this).val(); // sets val === to the value in the input box
	    $(this).next().text(val); // sets the text inbetween the next tag to be the value that I set in the line above. 
	});