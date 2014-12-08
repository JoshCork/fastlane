function getRelationship(x, y) {

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
        var canEvaluate;

        switch (typeof e) {
            case 'string':
                canEvaluate = true;
                break;

            case 'number':
                canEvaluate = true;
                break;

            default:
                canEvaluate = false;
                evaluation = [canEvaluate, e]; // e is null or undefined. 
                break;
        }

        if (canEvaluate) {
            if (e) {
                if (isNaN(e)) {
                    evaluation = [false, e]; // a string that is not a number
                } else {
                    evaluation = [canEvaluate, e]; // these are numbers or strings that will convert to a number.
                }

            } else if (isNaN(e)) {
                evaluation = [false, 'NaN']; // empty string
            } else {
                evaluation = [true, e]; // empty string
                // changed the above from false to true to pass the automated unit tests that evaluate an empty string as valid input. 
            }

        }

        return evaluation;

    }

    if (vOneValidity && vTwoValidity) {
        if (vOne < vTwo) { // true
            myMessage = '<';
        } else if (vOne > vTwo) {
            myMessage = '>';
        } else {
            myMessage = '=';
        }
    } else {
        // something is wrong.  let the user know. 
        if (!vOneValidity && !vTwoValidity) {
            myMessage = "Can't compare relationships because " + vOneMessage + ' and ' + vTwoMessage + ' are not numbers';
        } else if (!vOneValidity) {
            myMessage = "Can't compare relationships because " + vOneMessage + ' is not a number';
        } else {
            myMessage = "Can't compare relationships because " + vTwoMessage + ' is not a number';
        }
    }

    return myMessage;

}

function alphabetizer(names) {
    // You'll notice that these names are listed in the order that they first stepped on the Moon, 
    // not alphabetical order. To alphabetize them, it would make sense to write their names as lastname, 
    // firstname. For example: Neil Armstrong becomes Armstrong, Neil.
    // Finish the alphabetizer(_names) function, which takes in a names array (of length N) containing 
    // strings of names and returns an alphabetized array of names in lastname, firstname format.

    var myNames = names;
    var newNameList = [];


    function reverser(name) {
        var myName = name;
        var myRname = name[1] + ', ' + name[0];
        return myRname;
    }


    for (var name in myNames) {
        newNameList.push(reverser(myNames[name].split(' ')));
    }
    
    return newNameList.sort();    
}




//$("#innerHTML").append(getRelationship('', 0));


var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];


$('#innerHTML').append(alphabetizer(moonWalkers));
