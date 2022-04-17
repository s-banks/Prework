(function(){
	'use strict';

	// TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
	var names = ['Ashley', 'Shane', 'Bob', 'Tom'];
	
	// TODO: Create a log statement that will log the number of elements in the names array.
		console.log('There are ' + names.length + ' names in the list.');
	// TODO: Create log statements that will print each of the names array elements individually.
		/* console.log(names[0]);
		console.log(names[1]);
		console.log(names[2]);
		console.log(names[3]); */

	//Iterating Exersize
		for (var i = 0; i < names.length; i++) {
	console.log('The name at index ' + i + ' is: ' + names[i]);
	}

	names.forEach(function (element, index, array) {
		console.log('The name at index ' + index + ' is: ' + element);
	});

})();