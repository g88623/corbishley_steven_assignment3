// Steven Corbishley
// SDI 1307
// Project 3
// My SDI Project 3 JavaScript file.

// JSON Data
var jsonWorkers = {
	"workers": [
		{
			"name": "Bob",
			"numberOfCases": 0
		},
		{
			"name": "Chris",
			"numberOfCases": 0
		},
		{
			"name": "Steven",
			"numberOfCases": 0
		}
	]
};

// Global Variables
var coworkers = [];
var casesInQueue = 10;


var getWorkers = function(workers){							// Argument: Object
	var isOutOfOffice = false;								// Local Variable
	var workersWithQueues = {
		"name": workers.name,								// Property: String
		"outOfOffice": false,								// Property: Boolean
		"numberOfCases": 0,									// Property: Number
		"primaryQueue": {
			"name": (this.name + "\'s Queue"),
			"numberOfCases": 0
		},								// Property: Object
		"queuesAssigned": [primaryQueue],					// Property: Array
		"workCase": function (){
			if(this.numberOfCases > 0){
				this.numberOfCases--;
				console.log(this.name + " has worked and closed one case.");
			}
		},						// Method: Procedure, Math, Output, Back
		"setOutOfOffice": function(isOutOfOffice){
			if(isOutOfOffice===true){              // Conditional
				if(this.numberOfCases>0){          // Nested Conditional
					console.log(this.name + " has " + this.numberOfCases + " cases that need to be closed before time off can be taken.");
				} else {
					this.outOfOffice = true;
					console.log(this.name + " has no cases, and is free to take time off.");
				}
			} else {
				this.outOfOffice = false;
				console.log(this.name + " has returned to the office.");
			}
		},		// Method: Mutator, Argument: Boolean, Conditional, Nested Conditional
		"isOutOfOffice": function(){
			return this.outOfOffice;
		},					// Method: Function, Return Boolean
		"getStatus": function(){
			var statusMessage = (this.name + " currently has " + this.numberOfCases + " cases.");
			console.log(statusMessage);
			return statusMessage;
		}						// Method: Accessor, Return String
	}
};

for(var key in jsonWorkers){
	coworker = getWorkers(key);
	coworkers.push(coworker);
}; // For loop, parses through JSON and sends to getWorkers function.



console.log(jsonQueues);