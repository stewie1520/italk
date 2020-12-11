// eslint-disable-next-line new-cap
const router = require("express").Router();
const { validateFacebookWebhook } = require("../middlewares/validateFacebookWebhook");

router.use("/facebook", validateFacebookWebhook, require("./facebook"));

module.exports = router;
