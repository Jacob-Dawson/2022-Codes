/* Increasing Triplet Subsequence

    Given an integer array nums, 
    return true if there exists a triple of indices (i, j, k) such that i < j < k and 
    nums[i] < nums[j] < nums[k]. If no such indices exists, 
    return false.

    Example 1:

    Input: nums = [1,2,3,4,5]
    Output: true
    Explanation: Any triplet where i < j < k is valid.

    Example 2:

    Input: nums = [5,4,3,2,1]
    Output: false
    Explanation: No triplet exists.

    Example 3:

    Input: nums = [2,1,5,0,4,6]
    Output: true
    Explanation: The triplet (3, 4, 5) is valid because 
    nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

    @Jay 37/50 (2022)

*/

//let nums = [2,1,5,0,4,6];

var arrayBuilder = function(){

    var result = [];
    var maxNum = 10;
    var minAmount = 3;
    var amount = Math.ceil(Math.random()*(10-minAmount))+minAmount;

    for(let i=0; i<amount; i++){

        var randNum = Math.floor(Math.random()*(maxNum+1));
        result.push(randNum);

    }

    return result;

}

var increasingTriplet = function(nums){

    var result = [];

    for(let i=0; i<nums.length-2; i++){

        if(nums[i] < nums[i+1] && nums[i+1] < nums[i+2]){

            result.push(nums[i],nums[i+1],nums[i+2]);
            console.log("true");
            return result;

        }

    }

    return "false";

};

var arr = arrayBuilder();
console.log(arr);
console.log(increasingTriplet(arr));
console.log("");
console.log("Jay 37/50 (2022)");