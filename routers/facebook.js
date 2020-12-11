// eslint-disable-next-line new-cap
const router = require("express").Router();
const {
  verifyCallbackController,
} = require("../controllers/webhooks/facebook");

const { webhookEventController } = require("../controllers/webhooks/facebook");

router.get("/", verifyCallbackController);
router.post("/", webhookEventController);

module.exports = router;
