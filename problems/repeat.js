function twoSum (nums, target) {
  const seen = {};
  for(let i=0; i < nums.length; i++){
    const current = nums[i];
    const remaining = target - current;

    if(remaining in seen){
      return [seen[remaining],i];
    }
    seen[current] = i;
  }
  return [];
}

console.log(twoSum([5,3,9,6,5],11));
