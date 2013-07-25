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
var jsonQueues = {
	"queues": [
		{
			"name": "Security Cases",
			"numberOfCases": 0
		},
		{
			"name": "Performance Cases",
			"numberOfCases": 0
		},
		{
			"name": "Technical Cases",
			"numberOfCases": 0
		},
		{
			"name": "Out Of Office Cases",
			"numberOfCases": 0
		}
	]
};

// Global Variables
var coworkers = {};


var getWorkers = function(workers){
	// Argument: Object
	var isOutOfOffice = false;          // Local Variable
	var workersWithQueues = {

		"name": workers.name,         // Property: String
		"outOfOffice": false,         // Property: Boolean
		"numberOfCases": 0,           // Property: Number
		"queuesAssigned": [],         // Property: Array
		"primaryQueue": {},           // Property: Object
		"workCase": function (){  // Method: Procedure
			if(this.numberOfCases > 0){
				this.numberOfCases--;
			}
		},
		"toggleOutOfOffice": function(isOutOfOffice){
			if(isOutOfOffice===true){              // Conditional
				if(this.numberOfCases>0){          // Nested Conditional
					this.numberOfCases = 0;
					
					//  Also assign the cases to the queue here.
					
					this.outOfOffice = true;
					console.log(this.name + " had " + this.numberOfCases + " cases that needed to be assigned.");
				} else {
					this.outOfOffice = true;
					console.log(this.name + " has no cases, and is free to take time off.");
				}
			} else {
				this.outOfOffice = false;
				console.log(this.name + " has returned to the office.");
			}
		}, // Method: Mutator
		"isOutOfOffice": function(){
			return this.outOfOffice;
		} // Return Boolean
	}
};

for(var key in jsonWorkers){
	coworkers = getWorkers(key);
}
console.log(jsonQueues);