const axios = require("axios");
const { returnSuccess, returnFail } = require("./common/serviceResponse");

const getSimsimiResponse = async ({ message }) => {
  try {
    const endpoint = process.env.SIMSIMI_API_ENDPOINT;

    const axiosParam = {
      method: "get",
      url: endpoint,
      params: {
        key: process.env.SIMSIMI_API_ACCESS_TOKEN,
        lc: "vn",
        text: message,
      },
    };

    const { data } = await axios(axiosParam);
    const { response } = data;

    return returnSuccess(response);
  } catch (err) {
    return returnFail(err.message, err);
  }
};

module.exports = { getSimsimiResponse };
