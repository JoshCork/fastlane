function getRelationship(x,y) {

    var vOne = x;
    var vTwo = y;

    var vOneType = typeof vOne;
    var vTwoType = typeof vTwo;


    console.log('val1 typeOf returns: ' + vOneType);
    console.log('val2 typeOf returns: ' + vTwoType);

    // console.log('val1 isNan() returns: ' + isNaN(vOne));
    // console.log('val2 isNan() returns: ' + isNaN(vOne));

    function evalMe(z) {
        var e = z;
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
                break;
        };

        if (canEvaluate) {
            if (e) {
            	if (isNaN(e)) {
            		canEvaluate = false; // a string that is not a number
            	} else {
            		canEvaluate = true;                	
            	}
                
            } else {
                canEvaluate = false; // empty string                
            };

        };
        
        return canEvaluate;

    };

    console.log('x is valid?: ' + evalMe(vOne) + '; y is valid?: ' + evalMe(vTwo));

}

var myOutput = getRelationship();
//$("#innerHTML").append(myOutput);
