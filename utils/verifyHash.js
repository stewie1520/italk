const crypto = require("crypto");

const isValidFacebookWebhookRequest = (hashed, payload, secret) => {
  const base64Hased = crypto.createHmac('sha1', secret)
    .update(payload)
    .digest('base64');

  return `sha1=${base64Hased}` === hashed;
};

module.exports = { isValidFacebookWebhookRequest };

