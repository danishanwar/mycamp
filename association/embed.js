var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post",postSchema);

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
// 	email: "tom@cruise.edu",
// 	name: "Michael Jackson"
// });

// newUser.posts.push({
// 	title: "How to win an oscar",
// 	content: "No NO Just kidding !!!! If i don't get oscar that means oscar doesn't deserve me"
// });

// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

// var newPost = new Post({
// 	title: "Reflections on Mangoes",
// 	content: "They Are awesome.!!!"
// });

// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });


User.findOne({name: "Michael Jackson"}, function(err, user){
	if(err){
		console.log(err);
	} else{
		user.posts.push({
			title: "Yo Madar Faaker",
			content: "lorem lhbdchjcvbx jx vhgcjklhnkldcgykhlj;asbcklc idvubln;po gohij"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			} else {
				console.log(user);
			}
		});
	}
});