# https://leetcode.com/problems/maximal-square/
# Given an m x n binary matrix filled with 0's and 1's, 
# find the largest square containing only 1's and return its area.

# Example 1:
# Input: matrix = 
# [["1","0","1","0","0"],
# ["1","0","1","1","1"],
# ["1","1","1","1","1"],
# ["1","0","0","1","0"]]
# Output: 4

# Example 2:
# Input: matrix = [["0","1"],["1","0"]]
# Output: 1

# Example 3:
# Input: matrix = [["0"]]
# Output: 0

# Strategy
# Loop through array(s) Done
# Check if entry is a 1 (function?) Done
# If it is then Declare adding variable assigned with value of 1, if not then move onto the next entry
# Check if the entry is at the end of its sub array / if its sub array is the last array (function?)
# If it is then move onto next entry, if not then do a check

# @Jay 32/50 (2022)

myList = [["1","0","1","0","0"],["1","1","0","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
# Edit This^

def calcMatrix(arr):

    boxes = [];

    for i in range(0,len(arr)):
        
        boxesSub = [];
        arr2 = arr[i];

        for j in range(0,len(arr2)):
            strAdd = "";
            if(arr2[j] == "1"):
                strAdd = "-";
                posnX = i;
                posnY = j;
                boxNum = oneCheck(arr,arr2,posnX,posnY);
                strAdd = strAdd + str(posnX)+str(posnY);
            else:
                boxNum = 0;
            boxesSub.append(boxNum);

        boxes.append(boxesSub);

    return max(max(boxes))*max(max(boxes));

def oneCheck(arr,arrAlt,pX,pY):

    size = 0; # how large the size of the 1s square is

    maxX = len(arr)-pX;
    maxY = len(arr[0])-pY;
    
    sqLimit = min(maxX,maxY);

    for m in range(1,sqLimit+1):

        conditions = True;
        for k in range(pX,pX+m):

            arr2 = arr[k];

            for l in range(pY,pY+m):

                if(l > m | k > m):
                    break;
                elif(arr2[l] != "1"):
                    conditions = False;
                    break;

        if(conditions == True):
            size = size + 1;

    return size;


for n in range(0,len(myList)):

    print(myList[n]);

print(calcMatrix(myList));