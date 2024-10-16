const GoogleStrategy = require('passport-google-oauth20');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config({ path: './src/config/.env' });

const googleStrategy = new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_REDIRECT_URL,
  scope: ['email']
}, async (accessToken, refreshToken, profile, cb) => {
  const email = profile.emails[0].value;
  const provider = profile.provider;

  const user = await User.findOrCreateUser(email, provider);

  if (!user) {
    return cb(null, false);
  }

  return cb (null, user);
});

module.exports = googleStrategy;