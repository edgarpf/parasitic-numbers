module.exports = function(n, k, precision = 1000) {
	return fractionToDecimal(k, 10*n - 1, precision);
}
	
function fractionToDecimal(n, d, precision) {
	var prime_factors = require('prime-factors')
    var pFS = prime_factors(d);
	
    for (var i = 0; i < pFS.length; i++) {

        if (pFS[i] !== 2 && pFS[i] !== 5) {
            return generateNumber(n,d, precision);           
        }
    }
}

function generateNumber(n,d, precision){
	var output = new Array();
    var ns = new Array();
	for (var i = 0; i < precision; i++) {
		var temp2 = parseInt(n / d);
		
		if (ns[n] === undefined) {
			ns[n] = i;
		} else {
			return output.slice(ns[n]).join('');
		}
		
		output.push(temp2);
		
		var n = n % d;
		
		n += "0";
	}
}