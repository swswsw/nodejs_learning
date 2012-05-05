
// need to use ./ for it to find the module.
var fish_module = require("./fish_module");

var swimming = fish_module.swim();
console.log("outside of module.  swimming="+swimming);
swimming = fish_module.swimStatus();

var swimming = fish_module.stopSwim();
console.log("outside of module.  swimming="+swimming);
swimming = fish_module.swimStatus();
console.log("outside of module.  swimming="+swimming);

var swimming = fish_module.swim();
console.log("outside of module.  swimming="+swimming);
swimming = fish_module.swimStatus();
console.log("outside of module.  swimming="+swimming);


// fish_module is only run once.  we try to run it again, it still run only once.  
var fish_module2 = require("./fish_module");
swimming = fish_module.swimStatus();
console.log("outside of module.  swimming="+swimming);
