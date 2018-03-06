(function ($) {

    var newArray = [];
    var booleanArray = [];

    publicFunc1 = function () {
        console.log("my func");
    };

    log = function (value) {
        console.log(value)
    };

    checkTwoarguments = function (arguments) {
        if (arguments.length === 0) {
            throw 'provide both parameters to the method'
        } else if (arguments.length === 1) {
            throw 'one parameter missing, provide both parameters'
        } else if (arguments.length === 2) {
            return true;
        } else {
            return false;
        }
    }

    checkTrueObj = function(val) {
            if (val === null) { return false;}
            return ( (typeof val === 'function') || (typeof val === 'object') );
    }

    eqlStr = function (a, b) {
        if (checkTwoarguments(arguments)) {
            if (typeof a !== 'string') {
                throw 'the eqlStr method expects strings as parameters. first parameter is not a string'
            } else if (typeof b !== 'string') {
                throw 'the eqlStr method expects strings as parameters. second parameter is not a string'
            } else {
                return a === b;
            }
        } else {
            throw 'provided more arguments than expected.'
        }
    }

    eqlNum = function (a, b) {
        if (checkTwoarguments(arguments)) {
            if (typeof a !== 'number') {
                throw 'the eqlNum method expects numbers as parameters. first parameter is not a number'
            } else if (typeof b !== 'number') {
                throw 'the eqlNum method expects numbers as parameters. second parameter is not a number'
            } else {
                return a === b;
            }
        } else {
            throw 'provided more arguments than expected.'
        }
    }

    isInArray = function (array, value) {
        // Object.prototype.toString.call( someVar ) === '[object Array]'
        // check length of arguments as well
        // typeof value === 'object' && value.constructor === Array;
        // add new features to an array.
        // look at jquery development version
        // create a symbol for your library
        // empty, null, undefined, false
        // typeof value === string && value
        // jquery loaded or not
        log(arguments);
        if (arguments.length === 0) {
            throw 'provide parameters to isInArray'
        } else if (arguments.length === 1) {
            throw 'one parameter missing, provide both parameters'
        } else if (arguments.length === 2) {
            if (typeof array === 'object' && array.constructor.name === "Array") {
                if (array.length === 0) {
                    return false;
                } else {
                    return array.indexOf(value.toLowerCase()) > -1; // to be solved only for strings what if array of objects.
                }
            } else {
                throw 'the given parameter is not an array.'
            }
        } else {
            throw 'provided more arguments than expected.'
        }
    }

    isInObject = function (obj, value) {
        if(checkTwoarguments(arguments)){
           if(checkTrueObj(obj)){
            newArray = Object.values(obj)
            return newArray.indexOf(value.toLowerCase()) > -1; // to be solved
           } else {
               throw 'the given first argument is not a object literal'
           }
        } else {
            throw 'provided more arguments than expected.'
        }
    }

    isInArrayObj = function (array, value) {
        if(checkTwoarguments(arguments)) {
            if (typeof array === 'object' && array.constructor.name === "Array") {
                if (array.length === 0) {
                    return false;
                } else {
                    _.each(array, function (item, key) {
                        booleanArray.push(isInObject(item, value)); // to be solved what if objects in objects
                    });
                    return _.some(booleanArray, function (item) {
                        return item;
                    });
                }
            } else {
                throw 'the given first parameter is not an array.'
            }
        } else {
            throw 'provided more arguments than expected.'
        }
    }

    myAlert = function (msg, selector, type) {
        if(!$) {
            throw 'jQuery not loaded'
        }
        if (typeof msg === 'string' && typeof selector === 'string' && typeof type === 'string') {
            if(msg && selector && type) {
                $(selector).html('<div class="alert alert-' + type + ' alert-dismissible fade in">' +
                '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
                msg + '</div>');
            } else {
                throw 'message, selector and type cannot be empty'
            }
        } else {
            throw 'all the srguments should be strings'
        }
    }

    randNum = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    return { // we can expose only the functions that we want to expose.
        "publicFuncName": publicFunc1,
        "log": log,
        "eqlStr": eqlStr,
        "eqlNum": eqlNum,
        "isInArray": isInArray,
        "isInObject": isInObject,
        "isInArrayObj": isInArrayObj,
        "myAlert": myAlert,
        "randNum": randNum
    }

})(jQuery);