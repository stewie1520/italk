const { createLogger, format, transports } = require("winston");

const level = process.env.LOG_LEVEL || "debug";

const formatParams = (info) => {
  const { timestamp, level, message, ...args } = info;
  const ts = timestamp.slice(0, 19).replace("T", " ");
  return `${ts} ${level}: ${message} ${
    Object.keys(args).length ? JSON.stringify(args, "", "") : ""
  }`;
};

const developmentFormat = format.combine(
  format.colorize(),
  format.timestamp(),
  format.align(),
  format.printf(formatParams)
);

const productionFormat = format.combine(
  format.timestamp(),
  format.align(),
  format.printf(formatParams)
);

let logger;

if (process.env.NODE_ENV !== "production") {
  logger = createLogger({
    level,
    format: developmentFormat,
    transports: [new transports.Console()],
  });
} else {
  logger = createLogger({
    level,
    format: productionFormat,
    transports: [
      new transports.Console(),
      new transports.File({ filename: "error.log", level: "error" }),
      new transports.File({ filename: "combined.log" }),
    ],
  });
}

logger.stream = {
  write: function (message) {
    logger.info(message);
  },
};

module.exports = logger;
