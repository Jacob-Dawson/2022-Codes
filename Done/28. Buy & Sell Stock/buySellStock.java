// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/*Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104

@Jay 28/50 (2022)

*/
import java.util.Arrays;


public class buySellStock
{
    public static void main(String[] args) {

        int[] prices = {1,2,3,4,5}; // <--- edit this

        System.out.println("Stock information:");
        System.out.println("-------------------- \n");
        System.out.println("Stock Projection: "+Arrays.toString(prices));
        System.out.println("Low: "+findLow(prices));
        System.out.println("High: "+findHigh(prices));
        System.out.println("Max profit (Buy + Hold): "+calcMostProfit(prices));
        System.out.println("Max profit (Multibuy): "+calcMostProfit2(prices));
        System.out.println("\n");
        System.out.println("@Jay 28/50 (2022)");
		
	}

    public static int findLow(int[] arr){

        int result = arr[0];

        for(int i=1; i<arr.length; i++){

            if(result > arr[i]){

                result = arr[i];

            }

        }

        return result;

    }

    public static int findHigh(int[] arr){

        int result = arr[0];

        for(int i=1; i<arr.length; i++){

            if(result < arr[i]){

                result = arr[i];

            }

        }

        return result;

    }

    public static int calcMostProfit(int[] arr){

        int result = 0;

        // loop through prices

        for(int j=0; j<arr.length-1; j++){

            // find best profit for each price

            for(int i=j+1; i<arr.length; i++){

                int profit = arr[i] - arr[j];

                if(profit > result){

                    result = profit;

                }

            }

        }

        return result;

    }

    public static int calcMostProfit2(int[] arr){

        int result = 0;

        // find best profit for each price

        for(int i=0; i<arr.length-1; i++){

            int profit = arr[i+1] - arr[i];

            if(arr[i+1] > arr[i]){

                result += profit;

            }

        }

        return result;
            
    }

}




























