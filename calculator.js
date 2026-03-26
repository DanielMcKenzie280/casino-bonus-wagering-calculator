function calculateWagering(bonusAmount, wageringMultiplier) {
  if (bonusAmount <= 0 || wageringMultiplier <= 0) {
    throw new Error("Values must be positive numbers");
  }

  const wageringRequired = bonusAmount * wageringMultiplier;

  return {
    bonus: bonusAmount,
    multiplier: wageringMultiplier,
    wageringRequired: wageringRequired
  };
}

// Example
const result = calculateWagering(100, 35);

console.log("Bonus:", result.bonus);
console.log("Multiplier:", result.multiplier + "x");
console.log("Total Wagering Required:", result.wageringRequired);
