// eslint-disable-next-line new-cap
const router = require("express").Router();
const {
  facebookVerifyCallbackController,
} = require("../controllers/webhooks/facebook");

router.get("/facebook", facebookVerifyCallbackController);

module.exports = router;
