import express from "express";
import User from "../models/User.js";
import { calculateReward } from "../jobs/gameLogic.js";

const router = express.Router();

// Get User Data
router.get("/:username", async (req, res) => {
  try {
    let user = await User.findOne({ username: req.params.username });
    if (!user) {
      user = new User({ username: req.params.username });
      await user.save();
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Click Button Logic
router.post("/:username/click", async (req, res) => {
  try {
    let user = await User.findOne({ username: req.params.username });

    if (!user) {
      user = new User({ username: req.params.username });
    }

    const { points, prize } = calculateReward();
    user.counter += 1 + points;
    user.rewards += prize;

    await user.save();

    res.json({ counter: user.counter, rewards: user.rewards, points, prize });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
