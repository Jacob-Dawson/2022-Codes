/*

You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them 
is that adjacent houses have security systems connected and it will 
automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400

@Jay 3/50 (2022)

*/
import java.util.Arrays;

public class houseRobber
{
    public static void main(String[] args) {

        int maxAmount = 20;

        int amount = (int)Math.floor(Math.random()*maxAmount);

        int[] nums = new int[amount];

        nums = buildStreet(amount);

        System.out.println("Your Street: " +Arrays.toString(nums));
        System.out.println("You can rob a total of "+rob(nums) + " money from this street.");
		
	}

    public static int rob(int[] nums){

        int result = 0;

        if(nums == null || nums.length == 0){

            result = 0;

        } else if (nums.length == 1){

            result = nums[0];

        } else {

            for (int i = 2; i < nums.length; i++) {

                int nums3 = 0;

                if(i - 3 >= 0){

                    nums3 = nums[i-3];

                } 

                nums[i] += Math.max(nums[i-2], nums3);

            }
            result = Math.max(nums[nums.length-2], nums[nums.length-1]);

        }

        return result;

    }

    public static int[] buildStreet(int amount){

        int[] result = new int[amount];
        int maxNum = 20;

        if(amount == 0){

            result[0] = 0;

        } else {

            for(int i = 0; i<amount; i++){

                int randNum = (int)Math.floor(Math.random()*maxNum);

                result[i] = randNum;

            }

        }

        return result;

    }
}