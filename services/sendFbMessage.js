const axios = require("axios");
const { returnSuccess, returnFail } = require("./common/serviceResponse");

const sendFbMessage = async ({ psid, messagingType = "RESPONSE", message }) => {
  try {
    const endpoint =
      process.env.FB_MESSENGER_API_ENDPOINT ||
      "https://graph.facebook.com/v9.0/me/messages";

    const axiosParam = {
      method: "post",
      url: endpoint,
      params: {
        access_token: process.env.FB_MESSENGER_API_ACCESS_TOKEN,
      },
      data: {
        messaging_type: messagingType,
        recipient: {
          id: psid,
        },
        message: {
          text: message,
        },
      },
    };

    const { data } = await axios(axiosParam);

    return returnSuccess(data);
  } catch (err) {
    return returnFail(err.message, err);
  }
};

module.exports = { sendFbMessage };
