// https://leetcode.com/problems/base-7/description/

/*

Given an integer num, return a string of its base 7 representation.

Example 1:

Input: num = 100
Output: "202"


Example 2:

Input: num = -7
Output: "-10"
 
*/

import kotlin.math.*

fun main(args: Array<String>) {

    val num = 100; // <- Change this to anything you want
    var tempNum = abs(num);
    var result = "";
    var numResult = 0;
    var quotient = abs(num);
    var remainder = 0;
    var maxNum = 1;

    var j = 0;
    while(tempNum > 1){

        if(tempNum/10 >= 10){

            tempNum = tempNum / 10;
            maxNum++; 

        } else {

            break

        }

        j++;

    }

    for(i in 0..maxNum){

        //println(quotient%7);
        //println(quotient/7);
        remainder = (quotient%7);
        quotient = quotient/7;
        result = remainder.toString() + result;

        if(num < 0){

            numResult = (result.toInt())*(-1);

        } else {

            numResult = (result.toInt());

        }

    }

    //println(result)
    println(numResult);

    println();
    println("@Jay 49/50 (2022)")
	
}