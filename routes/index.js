var express = require("express");
var router  = express.Router();
var passport= require("passport");
var User    = require("../models/user");
//===================================
// Home route
//===================================

router.get("/", function(req, res){
   res.render("landing"); 
});

// ============================================
// Auth Routes
//=============================================

router.get("/register", function(req, res){
    res.render("register");
});
// posting !!

router.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function(){
                req.flash("success", "Welcome to YelpCamp " + user.username);
                res.redirect("/campgrounds");
            });
        }
    });
});

// ======================
// LogIn Routes
//=======================

router.get("/login", function(req, res){
    res.render("login");
});
// posting !!
//middleware
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), 
    function(req, res){
});

// ======================
// LogOut Routes
//=======================

router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "LOGGED U OUT");
    res.redirect("/")
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please login first");
    res.redirect("/login");
}

module.exports = router;