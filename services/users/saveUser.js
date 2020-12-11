const User = require("../../models/users");
const { returnSuccess, returnFail } = require("../common/serviceResponse");

const saveUser = async ({ psid, asid }) => {
  try {
    const dbNewUser = await User.findOneAndUpdate(
      {
        psid,
        asid,
      },
      {
        psid,
        asid,
      },
      {
        new: true,
        upsert: true,
        useFindAndModify: false,
      }
    );

    return returnSuccess(dbNewUser);
  } catch (err) {
    return returnFail(err.message, err);
  }
};

module.exports = { saveUser };
