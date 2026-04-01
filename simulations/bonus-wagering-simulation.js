function simulateWagering(bonus, multiplier, betSize) {
  const wageringRequired = bonus * multiplier;
  let totalWagered = 0;
  let spins = 0;

  while (totalWagered < wageringRequired) {
    totalWagered += betSize;
    spins++;
  }

  return {
    bonus,
    multiplier,
    betSize,
    spinsNeeded: spins,
    totalWagered
  };
}

// example
const result = simulateWagering(100, 35, 2);

console.log(result);
