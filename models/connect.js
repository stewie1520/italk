const mongoose = require("mongoose");
const logger = require("../utils/logger");

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err !== null) {
      logger.error(err);
    }
    logger.info("Database connected");
  }
);
