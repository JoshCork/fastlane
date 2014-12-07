## 12/6/2014 - Replacing all the paragraphs with that same text but the length appended to it:
My Solution:

	$('p').each(function(){ 
		var myText = $(this).text(); 
		var myLength = myText.length; 
		myNewText = myText.concat(myLength); 

		$(this).text(myNewText)
	});
Alternatively I could have created the function and passed that in by name:

	function numberAdder () {
		var text, number;

		text = $(this).text();
		number = text.length;

		$(this).text(text + " " + number); // didn't realize i could add a space at the end. 
	}

	$('p').each(numberAdder); // callss the numberAdder function for each p

## 12/6/2014 - DOM Manipulation - creating another family
My solution:
	
	$("<div id='family2'></div>").insertAfter('#family1');
	$('#family2').append("<div id='bruce'></div>");
	$('#bruce').append("<div id='madison'></div>");
	$('#bruce').append("<div id='hunter'></div>");

## 12/5/2014 - Automatically update the page based on an input box

This was my solution:

	$('#input').on('change', function() {
	    var val;
	    val = $(this).val(); // sets val === to the value in the input box
	    $(this).next().text(val); // sets the text inbetween the next tag to be the value that I set in the line above. 
	});