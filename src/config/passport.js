const dotenv = require('dotenv');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

dotenv.config({ path: './src/config/.env' });

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_REDIRECT_URL,
  scope: ['email']
}, (accessToken, refreshToken, profile, cb) => {
  console.log(profile.emails[0].value);

  cb (null, profile);
}));

module.exports = passport;