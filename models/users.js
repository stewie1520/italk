const { Schema, model } = require("mongoose");

const name = "users";

const userSchema = new Schema(
  {
    psid: {
      type: String,
      required: true,
      index: true,
    },
    asid: {
      type: String,
      required: true,
      index: true,
    },
    // TODO: more fields
  },
  {
    timestamps: true,
  }
);

module.exports = model(name, userSchema);
