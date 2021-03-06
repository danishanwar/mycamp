var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    Campground      = require("./models/campground"),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    seedDB          = require("./seeds")

var campgroundRoutes= require("./routes/campgrounds.js"),
    commentRoutes   = require("./routes/comments.js"),
    indexRoutes     = require("./routes/index")

//seedDB();

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// Passport configuration!
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

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error     = req.flash("error");
    res.locals.success     = req.flash("success");
    next();
});



app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);

// =========================
// Running The Server
// =========================

app.listen(5000, function(){
    console.log("The Yelpcamp server has Started on Port 5000\nVisit http://localhost:5000/ to see!!!");
});
