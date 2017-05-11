var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res){
  res.render('home')
});
router.get('/login', function(req, res){
  res.render('login')
})

router.get('/signup', function(req, res){
  res.render('signup')
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
})
router.get('/index', isLoggedIn, function(req, res){
  res.render('index')
})

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }else{
    res.redirect('/login')
  }
}
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/index', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));
router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/index', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

module.exports = router;
