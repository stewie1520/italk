const { isValidFacebookWebhookRequest } = require("../utils/verifyHash");

const validateFacebookWebhook = (req, res, next) => {
  const rawBody = req.rawBody;
  const key = process.env.WEBHOOK_FACEBOOK_VERIFY_KEY;
  const hashed = req.headers['x-hub-signature'];

  if (isValidFacebookWebhookRequest(hashed, rawBody, key)) {
    return next();
  }

  return res.status(401).send();
};

module.exports = { validateFacebookWebhook };

