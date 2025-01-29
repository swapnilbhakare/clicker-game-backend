import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  counter: { type: Number, default: 0 },
  rewards: { type: Number, default: 0 },
});

export default mongoose.model("User", userSchema);
