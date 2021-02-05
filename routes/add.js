var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var name1 = request.query.name;
	var description1 = request.query.description;
	var newFriend = {
		"name" : name1,
		"description" : description1,
		"imageURL" : "https://lorempixel.com/400/400.people"
	}
	data.friends.push(newFriend);
	response.render('index', data);
 }