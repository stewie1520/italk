const returnSuccess = (data) => ({
  success: true,
  payload: data,
});

const returnFail = (message, innerError = null) => ({
  success: false,
  message,
  innerError,
});

module.exports = { returnSuccess, returnFail };
