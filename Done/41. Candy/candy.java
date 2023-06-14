/*

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

@Jay 41/50 (2022).

*/

public class candy
{
    public static void main(String[] args) {

        int[] ratings = {1,2,3,1,7,1}; // <- edit this

        System.out.println("Ratings: "+printRatings(ratings));
        System.out.println(calcCandies(ratings)+" minimum candies needed.");
        System.out.println("");
        System.out.println("@Jay 41/50 (2022)");
		
	}

    public static String printRatings(int[] arr){

        String result = "";

        for(int i=0; i<arr.length; i++){

            if(i > 0){

                result += ", ";

            }

            result += ""+arr[i];

        }

        return result;

    }

    public static int calcCandies(int[] arr){

        int total = 0;

        int[] candies = new int[arr.length];

        for(int i=0; i<candies.length; i++){

            candies[i]++;

            if(i < 1){

                if(arr[i] > arr[i+1]){

                    candies[i]++;

                }

            } else if (i > arr.length-2){

                if(arr[i] > arr[i-1]){

                    candies[i]++;

                }

            } else {

                if(arr[i] > arr[i+1]){

                    candies[i]++;

                } else if(arr[i] > arr[i-1]){

                    candies[i]++;

                }

            }

            total += candies[i];

        }

        return total;

    }

}











