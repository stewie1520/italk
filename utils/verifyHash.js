const crypto = require("crypto");

const isValid = (hashed, payload, secret) => {
  crypto.createHmac('sha1', secret)
    .update(payload)
    .digest('hex')
};

