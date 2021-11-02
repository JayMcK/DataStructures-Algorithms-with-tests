const twoSum = require("./twoSum");

describe("Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target", () => {
  test("input of ([2,7,11,15],9) returns [0,1]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("input of ([3,2,4], 6) returns [1,2]", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  test("input of ([3,3], 6) to return [0,1]", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
