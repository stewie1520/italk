const { returnSuccess, returnFail } = require("./common/serviceResponse");
const { checkForCommand, handleCommand } = require("./commands");
const { saveUser } = require("./users/saveUser");

const receiveFbMessage = async ({
  sender,
  recipient,
  message: receivedMessage,
}) => {
  try {
    const { success, message } = await saveUser({
      psid: sender.id,
      asid: recipient.id,
    });

    if (!success) {
      return returnFail(message);
    }

    if (checkForCommand(receivedMessage.text)) {
      return handleCommand({ sender, recipient, message: receivedMessage });
    }

    return returnSuccess("yo");
  } catch (err) {
    return returnFail(err.message, err);
  }
};

module.exports = { receiveFbMessage };
