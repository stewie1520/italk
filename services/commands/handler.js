const constants = require("./constants");
const { sendFbMessage } = require("../sendFbMessage");
const { returnSuccess, returnFail } = require("../common/serviceResponse");

const checkForCommand = (text) => Object.values(constants).includes(text);

const handleCommand = async ({ sender, recipient, message }) => {
  try {
    if (message.text === constants.START_CONVERSATION) {
      await sendFbMessage({ psid: sender.id, message: "Hello" });
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
