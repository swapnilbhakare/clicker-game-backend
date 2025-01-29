export const calculateReward = () => {
  const random = Math.random();
  if (random < 0.25) {
    return { points: 0, prize: 1 }; // 25% chance for a prize
  } else if (random < 0.75) {
    return { points: 10, prize: 0 }; // 50% chance for 10 points
  }
  return { points: 0, prize: 0 }; // No reward
};
