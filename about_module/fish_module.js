var swimming = false;

// the property that put under exports are exported outside of the module.
exports.swim = function() {
	swimming = true;
	console.log("start swimming.  swimming="+swimming);
	return swimming;
};

exports.stopSwim = function() {
	swimming = false;
	console.log("stop swimming.  swimming="+swimming);
	return swimming;
};

exports.swimStatus = function() {
	console.log("swimming="+swimming);
	return swimming;
};


// we could also do it this way
function test() {
};
exports.test = test;

// caveat:  
// for primitive, it is pass-by-value.  so if you change this outside, it does not work.  
// so this does not work.  so people don't do this.  they have to use  
// get and set method.
exports.swimming = swimming;