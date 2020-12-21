const constants = require("./constants");
const { sendFbMessage } = require("../sendFbMessage");
const { returnSuccess, returnFail } = require("../common/serviceResponse");
const { translate } = require("tratu-core");

const checkForCommand = (text) =>
  Object.values(constants).includes(text) ||
  text.startsWith(constants.TRANSLATE_ENV_VI);

const handleCommand = async ({ sender, recipient, message }) => {
  try {
    if (message.text === constants.START_CONVERSATION) {
      await sendFbMessage({ psid: sender.id, message: "Hello" });
    }

    if (message.text.startsWith(constants.TRANSLATE_ENV_VI)) {
      const words = message.text
        .substring(constants.TRANSLATE_ENV_VI.length)
        .trim();
      const meaning = await translate(words);
      await sendFbMessage({ psid: sender.id, message: meaning });
    }

    return returnSuccess("yo");
  } catch (err) {
    return returnFail(err.message, err);
  }
};

module.exports = {
  checkForCommand,
  handleCommand,
};
