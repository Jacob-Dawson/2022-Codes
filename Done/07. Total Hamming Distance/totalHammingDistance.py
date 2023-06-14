# Source: https://leetcode.com/problems/total-hamming-distance/

# Made By Jay 7/50 2022

# Example 1:

# Input: nums = [4,14,2]
# Output: 6
# Explanation: In binary rpresentation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
# showing the four bits relevant in this case).
# The answer will be:
# HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
 
# Example 2:

# Input: nums = [4,14,4]
# Output: 4

import math;
import random;

nums = [4,14,4];

def createNumArray(amount,maxNum):
    result = [];

    for i in range(amount):
        randNum = random.randint(0,maxNum);
        result.append(randNum);

    return result;

def checkDist(a,b):
    dist = 0;
    for j in range(len(a)):
        if(a[j] != b[j]):
            dist += 1;
    
    return dist;

def convertToBinary(num):
    result = "";

    while num >= 1:
        if(num%2 == 1):
            result = "1"+result;
        else:
            result = "0"+result;
        num = math.floor(num/2);

    while len(result) < 4:
        result = "0"+result;
        
    return result;

def totalHammingDistance(self,nums):
    totalDist = 0;
    i = 1;
    for x in nums:

        for y in nums[i:len(nums)]:

            result = convertToBinary(x);
            result2 = convertToBinary(y);
            totalDist += checkDist(result,result2);

        i+=1;
    return totalDist;

nums = createNumArray(random.randint(1,6),15);
print(nums);
print("Total Distance: " + str(totalHammingDistance(totalHammingDistance,nums)));
print("@Jay 7/50 (2022)")