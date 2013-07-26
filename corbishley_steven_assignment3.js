// Steven Corbishley
// SDI 1307
// Project 3
// My SDI Project 3 JavaScript file.

// JSON Data
var json = {
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


var getWorkers = function(workers){								// Argument: Object
	var isOutOfOffice = false;									// Local Variable
	var myCoworker = {
		"name": workers.name,									// Property: String
		"outOfOffice": false,									// Property: Boolean
		"numberOfCases": workers.numberOfCases,					// Property: Number
		"primaryQueue": {
			"name": (this.name + "\'s Queue"),
			"numberOfCases": 0
		},									// Property: Object
		"queuesAssigned": [],									// Property: Array
		"workCase": function (){
			if(this.numberOfCases > 0){
				this.numberOfCases--;
				console.log(this.name + " has worked and closed one case.");
			}
		},							// Method: Procedure, Math, Output, Back
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
		},			// Method: Mutator, Argument: Boolean, Conditional, Nested Conditional
		"isOutOfOffice": function(){
			return this.outOfOffice;
		},						// Method: Function, Return Boolean
		"getStatus": function(){
			var statusMessage = (this.name + " currently has " + this.numberOfCases + " cases.");
			console.log(statusMessage);
			return statusMessage;
		},							// Method: Accessor, Return String
		"getQueueNames": function(){
			return queuesAssigned;
		},						// Return Array
		"getNumberOfCases": function(){
			return numberOfCases;
		}	,					// Return Number
		"addQueueToAssignedList": function(queueToAdd){
			queuesAssigned.push(queueToAdd);
		}	,	// Argument: Array
		"say": function(message){
			console.log(this.name + " says " + message);
		}							// Argument: String
	}
	return myCoworker;
};


for(var key in json.workers){									// For Loop
	coworker = json.workers[key];
	coworkers.push(coworker);
	console.log(coworker.name);
	console.log(coworker);
	console.log(coworkers);
}; // For loop, parses through JSON.

while(casesInQueue > coworkers.length) {						// While Loop
	console.log(casesInQueue + " cases are currently in the queue.");
	for(var i = 0; i < coworkers.length; i++){					// Nested Loop
		var myCoworker = getWorkers(coworkers[i]);
		myCoworker.numberOfCases++;
		casesInQueue--;
		console.log(myCoworker.name + " took one case. There are now " + casesInQueue + " cases in the queue.");
		myCoworker.workCase();
	}
};

console.log(json);