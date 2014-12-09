
/**
 *  
 * @param  {number} x first value to be compared.
 * @param  {number} y second value to be compared. 
 * @return {string}   Returns the relationship between x and y showing if x is >,<, or = to y. If it can not be evaluated it 
 * returns a string telling the user why.
 */
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

/**
 * This function will return a list of names in the lastName, firstName format and sort them alphabetically.
 * @param  {array} names - an array of strings, containing names in "firstName lastName" format.
 * @return {array}       returns an array of names in "lastName, firstName" format and sorts that list alphabetically.
 */
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

function totalBytes(results) {

    var myPageStats = results.pageStats;
    var loadBytes = 0;

    for (var key in myPageStats) {
        if (myPageStats.hasOwnProperty(key)) {
            if (key.indexOf('ResponseBytes') > -1) {
                loadBytes = loadBytes + parseInt(myPageStats[key], 10);
            }
        }
    }
    return loadBytes;

}


// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    // Your code goes here!

    var myRuleList = results.formattedResults.ruleResults;
    var myRuleNames = [];

    for (var key in myRuleList) {
        myRuleNames.push(myRuleList[key].localizedRuleName);
    }    
    return myRuleNames;

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


var psinsights; // holds the JSON - that was returned from Google below

psinsights = {
    "kind": "pagespeedonline#result",
    "id": "/speed/pagespeed",
    "responseCode": 200,
    "title": "PageSpeed Home",
    "score": 90,
    "pageStats": {
        "numberResources": 22,
        "numberHosts": 7,
        "totalRequestBytes": "2761",
        "numberStaticResources": 16,
        "htmlResponseBytes": "91981",
        "cssResponseBytes": "37728",
        "imageResponseBytes": "13909",
        "javascriptResponseBytes": "247214",
        "otherResponseBytes": "8804",
        "numberJsResources": 6,
        "numberCssResources": 2
    },
    "formattedResults": {
        "locale": "en_US",
        "ruleResults": {
            "AvoidBadRequests": {
                "localizedRuleName": "Avoid bad requests",
                "ruleImpact": 0.0
            },
            "MinifyJavaScript": {
                "localizedRuleName": "Minify JavaScript",
                "ruleImpact": 0.1417,
                "urlBlocks": [{
                    "header": {
                        "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
                        "args": [{
                            "type": "BYTES",
                            "value": "1.3KiB"
                        }, {
                            "type": "INT_LITERAL",
                            "value": "0"
                        }]
                    },
                    "urls": [{
                        "result": {
                            "format": "Minifying $1 could save $2 ($3% reduction).",
                            "args": [{
                                "type": "URL",
                                "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
                            }, {
                                "type": "BYTES",
                                "value": "717B"
                            }, {
                                "type": "INT_LITERAL",
                                "value": "1"
                            }]
                        }
                    }, {
                        "result": {
                            "format": "Minifying $1 could save $2 ($3% reduction).",
                            "args": [{
                                "type": "URL",
                                "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
                            }, {
                                "type": "BYTES",
                                "value": "258B"
                            }, {
                                "type": "INT_LITERAL",
                                "value": "0"
                            }]
                        }
                    }]
                }]
            },
            "SpriteImages": {
                "localizedRuleName": "Combine images into CSS sprites",
                "ruleImpact": 0.0
            }
        }
    },
    "version": {
        "major": 1,
        "minor": 11
    }
};

$('#innerHTML').append(ruleList(psinsights));

