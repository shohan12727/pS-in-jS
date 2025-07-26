function twoSum (nums, target) {
  const seen = {};
  for(i = 0; i < nums.length; i++){
    const current = nums[i];
    const remaining = target - current;

   if(remaining in seen){
    return [seen[remaining],i];
   }
   seen[current] = i;
  }
  return [];
}

console.log(twoSum([1,58,8,4,5], 9));
