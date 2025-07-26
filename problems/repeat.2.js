function twoSum(sums, target) {
  const seen = {};
  for (let i = 0; i < sums.length; i++) {
    const current = sums[i];
    const remaining = target - current;

    if (remaining in seen) {
      return [seen[remaining], i];
    }
    seen[current] = i;
  }
  return [];
}
console.log(twoSum([8, 9, 6, 52, 7, 2, 5], 12));
