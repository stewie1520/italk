const axios = require("axios");
const { returnSuccess, returnFail } = require("../common/serviceResponse");

const getSimsimiResponse = async ({ message }) => {
  try {
    const endpoint = process.env.SIMSIMI_API_ENDPOINT;

    const axiosParam = {
      method: "post",
      url: endpoint,
      headers: {
        "x-api-key": process.env.SIMSIMI_API_ACCESS_TOKEN,
      },
      data: {
        lang: "vn",
        utext: message,
      },
    };

    const { data } = await axios(axiosParam);
    const { atext } = data;

    return returnSuccess(atext);
  } catch (err) {
    return returnFail(err.message, err);
  }
};

module.exports = { getSimsimiResponse };
