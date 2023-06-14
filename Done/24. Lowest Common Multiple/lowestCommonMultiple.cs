// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// lowest common multiple instead
//#include <iostream>
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program{

        static void Main(string[] args){

            int myNum = 30;
            int[] nums = {2,3,4,5,6}; // <- edit this, no 1s please, in numerical order

            Console.WriteLine("This is C#. I am "+myNum);
            Console.WriteLine(calculateLCM(nums));

        }

        static int calculateLCM(int[] arr){

            var totalProduct = 1;

            for(int i=0; i<arr.Length; i++){

                totalProduct = totalProduct*arr[i];

            }

            Console.WriteLine(totalProduct);

            int j=0;
            int nextProduct = 0;
            while(j >= 0){

                nextProduct = totalProduct / arr[arr.Length-1];

                for(int i=0; i<arr.Length; i++){

                    if(nextProduct%arr[i] == 0){

                        continue;

                    } else {

                        j = -1;
                        break;

                    }

                }

                if(j == -1){

                    break;

                } else {

                    nextProduct = totalProduct;
                    totalProduct = totalProduct / arr[arr.Length-1];
                    
                }

            }

            return totalProduct;

        }

    }

}