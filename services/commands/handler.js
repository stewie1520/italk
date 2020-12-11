const constants = require("./constants");
const { sendFbMessage } = require("../sendFbMessage");
const { returnSuccess, returnFail } = require("../common/serviceResponse");

const checkForCommand = (message) => Object.values(constants).includes(message);

const handleCommand = async ({ sender, recipient, message }) => {
  try {
    if (message === constants.START_CONVERSATION) {
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
