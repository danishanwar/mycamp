var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
	{
		name: "Cloud Rest's",
	 	image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg",
	 	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		name: "Desert Mesa",
	 	image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg",
	 	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		name: "Canon Fort",
	 	image: "https://farm4.staticflickr.com/3290/3753652230_8139b7c717.jpg",
	 	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
]

function seedDB(){
	//Remove all Campgrounds
	Campground.remove({},function(err){
		if(err){
			console.log(err);
		} else {
			console.log("removed campgrounds!!");
			//Create new Campgrounds
			// data.forEach(function(seed){
			// 	Campground.create(seed, function(err, campground){
			// 		if(err){
			// 			console.log(err);
			// 		} else {
			// 			console.log("added a new data");
			// 			campground.save();
			// 			// Comment.create(
			// 			// 	{
			// 			// 		text: "This Place is great, but I wish there was internet",
			// 			// 		author: "Homer"

			// 			// 	}, function(err, comment){
			// 			// 		if(err){
			// 			// 			console.log(err);
			// 			// 		} else {
			// 			// 		campground.comments.push(comment);
			// 			// 		campground.save();
			// 			// 		console.log("Created new comment");
			// 			// 		}
			// 			// 	});
			// 		}
			// 	});
			// });
		}
	});
}

module.exports = seedDB;