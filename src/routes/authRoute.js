const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const { createToken } = require('../controllers/authController');

router.use(passport.initialize());

router.get('/google', passport.authenticate('google'));

router.get('/google/callback', 
  passport.authenticate('google', { session: false, failureRedirect: '/auth/google' }),
  createToken
);

module.exports = router;