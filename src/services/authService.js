const User = require('../models/User');

const googleAuthCallback = async (accessToken, refreshToken, profile, cb) => {
  const email = profile.emails[0].value;
  const provider = profile.provider;

  const user = await User.findOrCreateUser(email, provider);

  if (!user) {
    return cb(null, false);
  }

  return cb (null, user);
};

module.exports = {
  googleAuthCallback
}