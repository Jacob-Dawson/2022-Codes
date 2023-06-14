/*
https://leetcode.com/problems/integer-break/

Integer Break:

Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.

Example 1:

Input: n = 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.

Example 2:

Input: n = 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

2 <= n <= 58

@Jay 15/50 (2022)

*/

public class integerBreak
{
    public static void main(String[] args) {

        for(int i = 2; i <= 58; i++){

            System.out.println(i+": " +mainFunc(i));

        }
        
    }

    public static int mainFunc(int n){

        int result = 0;
        
        if(n == 2){

            result = 1;

        } else if(n == 3){

            result = 2;

        } else if(n%3 == 0){

            result = (int)Math.pow(3,(n/3));

        } else if(n%3 == 1){

            result = 2*2*(int)Math.pow(3,(n-4)/3);

        } else {

            result = 2*(int)Math.pow(3,(n/3));

        }

        return result;

    }
}
