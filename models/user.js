import pkg from "mongoose";
const { model, models, Schema, Types } = pkg;

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    default: "male",
  },
  mobile: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  story: {
    type: String,
    default: "",
    maxlength: 200,
  },
  website: {
    type: String,
    default: "",
  },
  profilePic: {
    type: String,
  },
  followers: [
    {
      type: Types.ObjectId,
      ref: "Users",
    },
  ],
  following: [
    {
      type: Types.ObjectId,
      ref: "Users",
    },
  ],
  saved: [
    {
      type: Types.ObjectId,
      ref: "user",
    },
  ],
  isActive: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
  },
  expiredDate: {
    type: Date,
    expires: 3600, // expire in 1 hour
    default: Date.now,
  },
  role: {
    type: String,
    default: "student",
  },
});

const Users = models.Users || model("Users", userSchema);

export default Users;
