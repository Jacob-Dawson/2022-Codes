# https://leetcode.com/problems/trapping-rain-water/
# @Jay 20/50 (2022)

# Refresh to get new results

import math;
import random;

nums = [4,2,0,3,2,5];

def calculate(arr):

    maxNum = max(arr);
    structureArr = [];

    for i in range(len(arr)):
        structureArr.append(0);

    for i in range(maxNum):

        level = i+1;

        #print(level);

        for j in range(len(arr)-1):

            if(level > arr[j] and j > 0):

                # look behind and ahead for small gaps
            
                if(arr[j-1] >= level and arr[j+1] >= level):

                    #print("hi");
                    structureArr[j] = structureArr[j]+1;

                elif(arr[j-1] >= level): # look ahead multiple

                    #print("hi2");

                    val = j;
                    counter = 0;
                    while val < len(arr)-1:
                        #print("test"+str(val));

                        if(arr[val+1] >= level and val < len(arr)-1):
                            #print("hi4");

                            for k in range(counter+1):

                                structureArr[j+k] = structureArr[j+k]+1;

                            j = counter + j;
                            break;
                            
                        val = val + 1;
                        counter = counter + 1;

    #print(structureArr); # Structural array
    createImage(arr.copy(),structureArr.copy());
    return reduceArr(structureArr);

def createArray(maxNum,amount):

    result = [];

    for i in range(amount):
        result.append(random.randint(0,maxNum));

    return result;

def reduceArr(arr):

    result = 0;

    for i in arr:

        result = result + i;

    return result;

def createImage(arr,arr2):

    obs = '#';
    water = 'x';
    nothing = ' ';
    result = [];
    maxNum = max(arr);

    for i in range(maxNum): # levels
        tempResult = [];
        for j in range(len(arr)): # columns
            if(arr[j] > 0):
                outcome = obs;
                arr[j] = arr[j] - 1;
            elif(arr[j] == 0 and arr2[j] > 0):
                outcome = water;
                arr2[j] = arr2[j] - 1;
            else:
                outcome = nothing;
            tempResult.append(outcome);
        result.insert(0,''.join(tempResult));

    for i in result:
        print(i);

    print("");


######

nums = createArray(random.randint(3,7),random.randint(4,15));
print(nums);
print("");
print("Total rain water collected: "+str(calculate(nums)));
print("");
print("Key: ");
print("# = Obstacle");
print("x = Rainwater");
print("");
print("@Jay 20/50 (2022)")