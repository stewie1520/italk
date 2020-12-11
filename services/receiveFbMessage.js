const { returnSuccess, returnFail } = require("./common/serviceResponse");
const { checkForCommand, handleCommand } = require("./commands");
const { saveUser } = require("./users/saveUser");

const receiveFbMessage = async ({ sender, recipient, message }) => {
  try {
    const { success, message } = await saveUser({
      psid: sender.id,
      asid: recipient.id,
    });

    if (!success) {
      return returnFail(message);
    }

    if (checkForCommand(message)) {
      return handleCommand({ sender, recipient, message });
    }

    return returnSuccess("yo");
  } catch (err) {
    return returnFail(err.message, err);
  }
};

module.exports = { receiveFbMessage };
