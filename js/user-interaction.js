"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var name = "";
while (name === "") {
	name = prompt("What is your name?")
}

// TODO: Show an alert message that welcomes the user based on their input.
alert("Hey there " + name + ", welcome!");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
let pizza = prompt("Hey " + name + ", do you like pizza?" );
	let result = pizza.toLowerCase();
switch(result) {
	case "yes":
		alert("Awesome! It's great stuff!");
		break;
	case "no":
		alert("That's ok. I think it's really good though");
		break;
	default:
		alert("Sorry, but I'm looking for a yes or no answer.");
		location.reload();
} 