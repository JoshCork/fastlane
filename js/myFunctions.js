function getRelationship(x,y) {

    var vOne = x;
    var vTwo = y;  
    var myMessage;  

    vOneValidity = evalMe(vOne)[0];
    vOneMessage = evalMe(vOne)[1];
    vTwoValidity = evalMe(vTwo)[0];
    vTwoMessage = evalMe(vTwo)[1];

    function evalMe(z) {
        var e = z;
        var evaluation = [];
        var canEvaluate = undefined;

        switch (typeof e) {
            case 'string':
                canEvaluate = true;
                break;

            case 'number':
                canEvaluate = true;
                break;

            default:
                canEvaluate = false;
                evaluation = [canEvaluate,e]; // e is null or undefined. 
                break;
        };

        if (canEvaluate) {
            if (e) {
            	if (isNaN(e)) {
            		evaluation = [false,e]; // a string that is not a number
            	} else {
            		evaluation = [canEvaluate,e];  // these are numbers or strings that will convert to a number.               	
            	}
                
            } else {
                evaluation = [false,'an empty string']; // empty string                
            };

        };
        
        return evaluation;

    };

    if (vOneValidity && vTwoValidity) {
    	if (vOne < vTwo) { // true
		  myMessage = vOne + ' is less than ' + vTwo;
		} else if (vOne > vTwo) {
		  myMessage = vOne + ' is greater than ' + vTwo;
		} else {
		  myMessage = vOne + ' and ' + vTwo + ' are equal.';
		}
    } else {
    	// something is wrong.  let the user know. 
    	if (!vOneValidity && !vTwoValidity) {
    		myMessage = "Can't compare relationship because " + vOneMessage + ' and ' + vTwoMessage + ' are not numbers.'
    	} else if (!vOneValidity) {
    		myMessage = "Can't compare relationship because " + vOneMessage + ' is not a number.'
    	} else {
    		myMessage = "Can't compare relationship because " + vTwoMessage + ' is not a number.'
    	}
    };

    return myMessage;

}

var myOutput = getRelationship(1,1);
$("#innerHTML").append(myOutput);
