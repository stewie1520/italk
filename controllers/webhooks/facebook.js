const { get } = require("lodash");

const facebookVerifyCallbackController = (req, res) => {
  const VERIFY_TOKEN = process.env.WEBHOOK_FACEBOOK_VERIFY_KEY;

  const { mode, verify_token: token, challenge } = get(req, "query.hub", {});

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    }

    return res.sendStatus(403);
  }

  return res.sendStatus(404);
};

module.exports = { facebookVerifyCallbackController };
