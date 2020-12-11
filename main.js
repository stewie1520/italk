const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const logger = require("./utils/logger");
const webhookRouter = require("./routers/webhook");

dotenv.config();

const app = express();
app.use(morgan("combined", { stream: logger.stream }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({
  verify: (req, res, buf) => {
    if (req.path.includes("/webhooks/facebook")) {
      req.rawBody = buf;
    }
  }
}));

app.use("/webhooks", webhookRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
