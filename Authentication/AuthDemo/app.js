var express 				= require("express"),
	mongoose 				= require("mongoose"),
	passport				= require("passport"),
	User 					= require("./models/user"),
	bodyParser 				= require("body-parser"),
	LocalStrategy			= require("passport-local"),
	passportLocalMongoose	= require("passport-local-mongoose")
mongoose.connect("mongodb://localhost/authDemo")

var app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
	secret: "facebook is shit",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res){
	res.render("home");
});

// ======================
// Auth Routes
//=======================

app.get("/register", function(req, res){
	res.render("register");
});
// posting !!

app.post("/register", function(req, res){
	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/secret");
		});
	});
});

// ======================
// LogIn Routes
//=======================

app.get("/login", function(req, res){
	res.render("login");
});
// posting !!
//middleware
app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function(req, res){});

// ======================
// LogOut Routes
//=======================

app.get("/logout", function(req, res){
	req.logout();
	res.redirect("/")
});


function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

app.get("/secret", isLoggedIn, function(req, res){
	res.render("secret");
});

app.listen(4000, function(){
    console.log("The server has Started on port 4000\n!!!");
});