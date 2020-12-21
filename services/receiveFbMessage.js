const { returnSuccess, returnFail } = require("./common/serviceResponse");
const { checkForCommand, handleCommand } = require("./commands");
const { saveUser } = require("./users/saveUser");
const { getSimsimiResponse } = require("./simsimi/getSimsimiResponse");
const { sendFbMessage } = require("./sendFbMessage");

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

    const getSimsimiResponseResult = await getSimsimiResponse({
      message: receivedMessage.text,
    });

    let simsimiResponse = `Đã có lỗi xảy ra ${getSimsimiResponseResult.message}`;

    if (getSimsimiResponseResult.success) {
      simsimiResponse = getSimsimiResponseResult.payload;
    }

    await sendFbMessage({
      psid: sender.id,
      message: simsimiResponse,
    });

    return returnSuccess("yo");
  } catch (err) {
    return returnFail(err.message, err);
  }
};

module.exports = { receiveFbMessage };
