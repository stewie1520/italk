const facebookVerifyCallbackController = (req, res) => {
  const VERIFY_TOKEN = process.env.WEBHOOK_FACEBOOK_VERIFY_KEY;

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    }

    return res.sendStatus(403);
  }

  return res.sendStatus(404);
};

module.exports = { facebookVerifyCallbackController };
