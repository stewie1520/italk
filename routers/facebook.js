// eslint-disable-next-line new-cap
const router = require("express").Router();
const { validateFacebookWebhook } = require("../middlewares/validateFacebookWebhook");
const {
  verifyCallbackController,
} = require("../controllers/webhooks/facebook");

const { webhookEventController } = require("../controllers/webhooks/facebook");

router.get("/", verifyCallbackController);
router.post("/", validateFacebookWebhook, webhookEventController);

module.exports = router;
