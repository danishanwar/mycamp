var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post")
var User = require("./models/user")

Post.create({
	title: "fgklkjdghjk ydfujiko : part ",
	content: "AAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDEEEEEEEEEE"
}, function(err, post){
	User.findOne({email: "bob@bob.com"},function(err, foundUser){
		if(err){
			console.log(err);
		}else{
			foundUser.posts.push(post);
			foundUser.save(function(err, data){
				if(err){
					console.log(err);
				} else{
					console.log(data);
				}
			});
		}
	});
});

// User.findOne({email: "bob@bob.com"}).populate("posts").exec(function(err, user){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });



// User.create({
// 	email: "bob@bob.com",
// 	name: "Bob Pelchatta"
// });