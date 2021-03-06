{
  /*
    PSUEDOCODE:
      1. If input array is empty, return null.
      2. Create 3 variables. tempMax = 0, maxSum and let i = 0 (the counter);
      3. Loop through input array n times and add each value to the tempSum.
      4. Set the maxSum to be the value of the tempSum.
      5. Loop through the rest of the input array
        - Re-set the tempMax on every loop to slide the window over by 1 element ie subtracting the furthest left number and adding the currently pointed at number.
        - On every loop, reset the maxSum to either be the current tempSum or stay as the current maxSum - depending on which is larger, using Math.max() method.
      6. Return maxSum.
    */
}

//TIME COMPLEXITY = 0 (n) - LINEAR TIME
//SPACE COMPLEXITY = 0 (1) - CONSTANT SPACE

//SOLUTION
function maxSubArraySum(nums, n) {
  if (!nums.length) return null;

  let i = 0,
    tempMax = 0,
    maxSum;

  while (i < n) {
    tempMax += nums[i];
    i++;
  }

  maxSum = tempMax;

  while (i < nums.length) {
    tempMax = tempMax - nums[i - n] + nums[i];
    maxSum = Math.max(tempMax, maxSum);
    i++;
  }

  return maxSum;
}

module.exports = maxSubArraySum;
