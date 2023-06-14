// js goes here

var prevType = 0;
var p5Canvas;
var resultsArray = [];
var resultsArray2 = [];
var sortingType;
var sortingNames = ["Counting Sort","Gnome Sort","Odd Even Sort","Cocktail Sort","Double Selection Sort","Comb Sort","Heap Sort","Flash Sort","Insertion Sort","Selection Sort","Bubble Sort","Shell Sort","Quick Sort","Bogo Sort","Cocktail Bogo Sort","Cycle Sort","Insertion Binary Sort","Patience Sort","Pancake Sort"];
var maxSize = 250;
var minSize = 10;
var stripAmount = getStripAmount(minSize,maxSize); 
var myArr = buildArr(stripAmount);
var myArr2 = buildArr(stripAmount);
var maxNum = Math.max(...myArr);
var maxNum2 = Math.max(...myArr2);
var m = 0;
var frames = 60;
var randType;
var randType2;
var newArr = [];
var restArr = [];
var midArr = [];
var arrSize;
var aTimeout;
var rectH;
var myText;
var myText2;
var transitionFlag = false;

function setup(){

    p5Canvas = createCanvas(300,300);
    p5Canvas.parent("p5Div");
    frameRate(frames);

}

function draw(){

    clear();
    noStroke();

    x = p5Canvas.width;
    y = p5Canvas.height-100;

    fill(0);
    rect(0,0,x,y+100);

    noStroke();

    myText = ""+sortingNames[randType];
    myText2 = ""+sortingNames[randType2];
    arrSize = ""+myArr.length;
    arrSize2 = ""+myArr2.length;

    fill(255);
    textSize(20);
    textAlign(LEFT,TOP);
    text(""+myText,5,y-130);

    fill(255);
    textSize(20);
    textAlign(LEFT,TOP);
    text(""+myText2,5,y+10);

    textSize(24);
    textAlign(LEFT,TOP);
    text("Elements: "+arrSize,5,y+63);

    push();
    translate(-20,5);

    fill(65);
    noStroke();
    rect(x-35,y+55,45,25,10,10);

    fill("white");
    textSize(18);
    textAlign(RIGHT,TOP);
    text("Next",x+5,y+60);

    noFill();
    stroke("white");
    rect(x-35,y+55,45,25,10,10);

    pop();

    noStroke();

    push();
    translate(0,0);

    push();
    translate(0,-70);

    for(let k = 0; k<myArr.length; k++){

        var col = "hsl("+Math.floor((resultsArray[m][k]/(myArr.length))*(360))+",100%,50%)";
        stroke(""+col);
        fill(""+col);
        rect((k)*(x/(myArr.length)),(y/2)-25,(x/(myArr.length)),50);

    }

    stroke("white");
    noFill();
    rect(0,(y/2)-25,(x),50);

    pop();

    push();
    translate(0,70);

    for(let k = 0; k<myArr2.length; k++){

        var col = "hsl("+Math.floor((resultsArray2[m][k]/(myArr2.length))*(360))+",100%,50%)";
        stroke(""+col);
        fill(""+col);
        rect((k)*(x/(myArr2.length)),(y/2)-25,(x/(myArr2.length)),50);
        


    }

    stroke("white");
    noFill();
    rect(0,(y/2)-25,(x),50);

    pop();

    pop();

    if(m >= (resultsArray.length-1) || m >= (resultsArray2.length-1)){
        
        if(m >= resultsArray.length-1){

            textSize(30);
            textAlign(RIGHT,TOP);
            text("✅",x,y-130);

        } else {

            textSize(30);
            textAlign(RIGHT,TOP);
            text("✅",x,y+10);

        }

        noLoop();
        transitionFlag = true;
        aTimeout = setTimeout(loadNewDraw,1500);

    } else {

        m++;

    }

}

function loadNewDraw(){

    m = 0;
    frameRate(frames); 
    resultsArray = [];
    resultsArray2 = [];
    newArr = [];
    restArr = [];
    midArr = [];
    randType = Math.floor(Math.random()*sortingType.length);
    if(randType == prevType){ // preventing the new one from being the same as the last one

        randType = (randType+Math.floor(Math.random()*sortingType.length))%sortingType.length;

    }
    randType2 = Math.floor(randType+(Math.random()*sortingType.length-1))%(sortingType.length);

    prevType = randType;
    stripAmount = getStripAmount(minSize,maxSize);
    myArr = buildArr(stripAmount); //buildArr((Math.floor(Math.random()*arrSizes[randType][0]))+arrSizes[randType][1]);
    myArr2 = buildArr(stripAmount);
    maxNum = Math.max(...myArr);
    maxNum2 = Math.max(...myArr2);
    
    resultsArray = sortingType[randType](myArr);
    resultsArray2 = sortingType[randType2](myArr2);
    transitionFlag = false;
    loop();

}

function mouseClicked(){

    if(mouseX > (x-55) && mouseX < (x-10) && mouseY > (y+55) && mouseY < (y+80) && transitionFlag === false){

        noLoop();
        clearTimeout(aTimeout);
        transitionFlag = true;
        loadNewDraw();
        

    }

}


/* -- */

function buildArr(len){

    var arr = new Array(len);

    for(let i=0; i<len; i++){

        var num = Math.floor(Math.random()*len)+1;

        if(arr.indexOf(num) == -1){

            arr[i] = num;

        } else {

            i--;

        }

    }

    return arr;

}

/* -- */

function flashSort(arr) {

    var rArr = [];

    var max = 0, min = arr[0];
    var n = arr.length;
    var z = ~~(0.45 * n);
    var l = new Array(z);

    for (var i = 1; i < n; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > arr[max]) {
            max = i;
        }
    }

    if (min === arr[max]) {
        return arr;
    }

    var c1 = (z - 1) / (arr[max] - min);


    for (var k = 0; k < z; k++) {
        l[k] = 0;
    }
    for (var j = 0; j < n; ++j) {
        k = ~~(c1 * (arr[j] - min));
        ++l[k];
    }

    for (var p = 1; p < z; ++p) {
        l[p] = l[p] + l[p - 1];
    }

    var hold = arr[max];
    arr[max] = arr[0];
    arr[0] = hold;

    //permutation
    var move = 0, t, flash;
    j = 0; 
    k = z - 1;

    while (move < (n - 1)) {
        while (j > (l[k] - 1)) {
            ++j;
            k = ~~(c1 * (arr[j] - min));
        }
        if (k < 0) break;
        flash = arr[j];
        while (j !== l[k]) {
            k = ~~(c1 * (flash - min));
            hold = arr[t = --l[k]];
            arr[t] = flash;
            flash = hold;
            ++move;
            rArr.push(arr.slice(0));
        }

    }

    //insertion
    for (j = 1; j < n; j++) {
        hold = arr[j];
        i = j - 1;
        while (i >= 0 && arr[i] > hold) {
            arr[i + 1] = arr[i--];
            rArr.push(arr.slice(0));
        }
        arr[i + 1] = hold;
    }
    rArr.push(arr.slice(0));
    return rArr;

}

/* -- *** */

function stoogeSort(array) {
    var rArr = [];
    var i = 0;
    var j = 0;
    if (j === undefined) {
        j = array.length - 1;
    }

    if (i === undefined) {
        i = 0;
    }

    if (array[j] < array[i]) {
        var aux = array[i];
        array[i] = array[j];
        array[j] = aux;
        rArr.push(array.slice(0));
    }

    if (j - i > 1) {
        var t = Math.floor((j - i + 1) / 3);
        stoogeSort(array, i, j-t);
        stoogeSort(array, i+t, j);
        stoogeSort(array, i, j-t);
        
    }

    return rArr;
}

/* -- */

function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        heapSwap(input, i, max);
        heap_root(input, max);
    }
}

function heapSwap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    var rArr = [];
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
        heapSwap(input, 0, i);
        array_length--;
    
    
        heap_root(input, 0);
        rArr.push(input.slice(0));
    }

    rArr.push(input.slice(0));
    return rArr;
}

/* -- */

var combSort = (array) => {
    var rArr = [];
    var interval = Math.floor(array.length/1.3);
    while (interval > 0) {
        for(var i=0; i+interval<array.length; i+=1) {
        if (array[i] > array[i+interval]) {
            var small = array[i+interval];
            array[i+interval] = array[i];
            array[i] = small;
            rArr.push(array.slice(0));
        }
        }
        interval = Math.floor(interval/1.3);
        rArr.push(array.slice(0));
    }
    rArr.push(array.slice(0));
    return rArr;
};

/* -- */

function doubleSelectionSort(a) {
    var rArr = [];
    let movm = 0,
        comp = 0;

    let l = 0,
        r = a.length-1;

    while (l<r) {
        // -- MINIMUM -- //
        let min = l;

        for (let i = l; i <= r; i++) {
            if (a[i]<a[min])
                min = i;
            comp++;
        }

        let temp = a[l];
        a[l] = a[min];
        a[min] = temp;

        l++;

        movm+=2;

        // -- MAXMIMUM -- //
        let max = r;

        for (let i = r; i >= l; i--) {
            if (a[i]>a[max])
                max = i;
            comp++;
        }

        temp = a[r];
        a[r] = a[max];
        a[max] = temp;

        r--;

        movm+=2;

       rArr.push(a.slice(0));
    }

    return rArr;
}

/* -- */

let radixSort = (arr) => {
    var rArr = [];
    // Find the max number and multiply it by 10 to get a number
    // with no. of digits of max + 1
    const maxArrNum = Math.max(...arr) * 10;
    let divisor = 10;
    while (divisor < maxArrNum) {
        // Create bucket arrays for each of 0-9
        let buckets = [...Array(10)].map(() => []);

        // For each number, get the current significant digit and put it in the respective bucket
        for (let num of arr) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);

            if(resultsArray[resultsArray.length-1] != arr){
                rArr.push(arr.slice(0));
            }

        }
        // Reconstruct the array by concatinating all sub arrays
        arr = [].concat.apply([], buckets);

        // Move to the next significant digit
        divisor *= 10;
        if(resultsArray[resultsArray.length-1] != arr){
            rArr.push(arr.slice(0));
        }

    }

    return rArr;
}

/* -- */

let cocktailSort = (arr) => {
    var rArr = [];
    let start = 0, end = arr.length, swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = start; i < end - 1; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
                rArr.push(arr.slice(0));
            }
        }

        end--;
        if (!swapped)
            break;
    
        swapped = false;
        for (let i = end - 1; i > start; i--) {
            if (arr[i - 1] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                swapped = true;
                rArr.push(arr.slice(0));
            }
        }

        start++;
    }

    return rArr;
}

/* -- */

let countingSort = (inputArr) => {
    var rArr = [];
    let min = Math.min(...inputArr);
    let max = Math.max(...inputArr);
    let i = min,
        j = 0,
        len = inputArr.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;

    }
    for (i = 0; i < len; i++) {
        count[inputArr[i]] += 1;

    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            inputArr[j] = i;
            j++;
            count[i]--;
            rArr.push(inputArr.slice(0));
        }
        rArr.push(inputArr.slice(0));
    }

    return rArr;
};

/* -- */

let oddEvenSort = (arr) => {
    var rArr = [];
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        rArr.push(arr.slice(0));
    }
    var sorted = false;
    while (!sorted) {
        sorted = true;
        for (var i = 1; i < arr.length - 1; i += 2) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                sorted = false;
                rArr.push(arr.slice(0));
            }                     
        }
        for (i = 0; i < arr.length - 1; i += 2) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                sorted = false;
                rArr.push(arr.slice(0));
            }        
        }
        rArr.push(arr.slice(0));
    }
    return rArr;
}

/* -- */

let gnomeSort = (a) => {
    var rArr = [];
    function moveBack(i) {
        for(i; i > 0 && a[i-1] > a[i]; i--) {
            var t = a[i];
            a[i] = a[i-1];
            a[i-1] = t;
            rArr.push(a.slice(0));
        }
    }
    for (var i = 1; i < a.length; i++) {
        if(a[i-1] > a[i]){
            moveBack(i);
        }
    }
    return rArr;
}

/* -- */

// Merge Sort Implentation (Recursion)
function mergeSort (unsortedArray) {

    var rArr = [];
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
        midArr.push(unsortedArray);

        for(let i=0; i<restArr.length; i++){

            if(restArr.indexOf(restArr[i],(i+1)) != -1 || midArr[midArr.length-1].indexOf(restArr[i],i) != -1){

                restArr.shift();
                i--;

            }

        }

        rArr.push(newArr.slice(0).concat(midArr[midArr.length-1]).concat(restArr.slice(0)));

        newArr.push(unsortedArray[0]);
        return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    restArr = right.concat(restArr);

    if(left.length > 1){

        midArr.push(left);

        for(let i=0; i<restArr.length; i++){

            if(restArr.indexOf(restArr[i],(i+1)) != -1 || midArr[midArr.length-1].indexOf(restArr[i],i) != -1){

                restArr.shift();
                i--;

            }

        }

        rArr.push(newArr.slice(0).concat(midArr[midArr.length-1]).concat(restArr.slice(0)));  

    }

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    );

    }

    // Merge the two arrays: left and right
function merge (left, right) {

    var resultArray = [], leftIndex = 0, rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }

    }

    midArr.push(resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)).slice(0));

    for(let i=newArr.length-1; i>=0; i--){

        if(midArr[midArr.length-1].indexOf(newArr[i]) != -1){

            newArr.pop();

        }

    }

    restArr = right.concat(restArr);

    for(let i=0; i<restArr.length; i++){

        if(restArr.indexOf(restArr[i],(i+1)) != -1 || midArr[midArr.length-1].indexOf(restArr[i],i) != -1){

            restArr.shift();
            i--;

        }

    }

    rArr.push(newArr.slice(0).concat(midArr[midArr.length-1]).concat(restArr.slice(0)));

    if(midArr[midArr.length-1].length > 1){

        newArr = newArr.concat(midArr[midArr.length-1]);

    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));


}

    /* -- */

let insertionSort = (inputArr) => {
    var rArr = [];
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
        rArr.push(inputArr.slice(0));

    }
    return rArr;
};

/* -- */

let selectionSort = (inputArr) => {
    var rArr = [];
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (inputArr[min] > inputArr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
        rArr.push(inputArr.slice(0));

    }
    return rArr;
}

/* -- */

let bubbleSort = (inputArr) => {
    var rArr = [];
    rArr.push(inputArr.slice(0));
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
                rArr.push(inputArr.slice(0));
            }
            
        }
    } while (swapped);
    rArr.push(inputArr.slice(0));
    return rArr;
};

/* -- */

function shellSort(arr) {

    var rArr = [];
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }
    
            arr[j] = temp;
            rArr.push(arr.slice(0));
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
    rArr.push(arr.slice(0));
    return rArr;
}

/* -- */

const defaultComparator = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

const quickSort = (
    unsortedArray,
    comparator = defaultComparator
) => {

    var rArr = [];

    // Create a sortable array to return.
    const sortedArray = [ ...unsortedArray ];

    // Recursively sort sub-arrays.
    const recursiveSort = (start, end) => {

        // If this sub-array is empty, it's sorted.
        if (end - start < 1) {
            return;
        }

        const pivotValue = sortedArray[end];
        let splitIndex = start;
        for (let i = start; i < end; i++) {

            const sort = comparator(sortedArray[i], pivotValue);

            // This value is less than the pivot value.
            if (sort === -1) {

                // If the element just to the right of the split index,
                //   isn't this element, swap them.
                if (splitIndex !== i) {
                    const temp = sortedArray[splitIndex];
                    sortedArray[splitIndex] = sortedArray[i];
                    sortedArray[i] = temp;
                }
                
                rArr.push(sortedArray.slice(0));
                

                // Move the split index to the right by one,
                //   denoting an increase in the less-than sub-array size.
                splitIndex++;
            }

            // Leave values that are greater than or equal to
            //   the pivot value where they are.
        }

        // Move the pivot value to between the split.
        sortedArray[end] = sortedArray[splitIndex];
        sortedArray[splitIndex] = pivotValue;

        // Recursively sort the less-than and greater-than arrays.
        recursiveSort(start, splitIndex - 1);
        recursiveSort(splitIndex + 1, end);
    };

    // Sort the entire array.
    recursiveSort(0, unsortedArray.length - 1);
    rArr.push(sortedArray.slice(0));
    return rArr;
};

/* -- */

function bogoSort(inputArr){

    var rArr = [];
    var inputResult = inputArr.slice(0).sort((a,b) => a - b);

    for(let i=0; i<1000; i++){

        if(inputResult == inputArr){

            rArr.push(inputArr.slice(0));
            return rArr;

        } else {

            rArr.push(inputArr.slice(0));
            inputArr = shuffle(inputArr);

        }

    }

    rArr.push(inputArr.slice(0));
    inputArr = inputArr.sort((a,b) => a - b);
    rArr.push(inputArr.slice(0));

    return rArr;

}

/* -- */

/* -- */

function cycleSort(inputArr) {
    var rArr = [];
    // loop from the beginning of the array to the second to last item
    for (let currentIndex = 0; currentIndex < inputArr.length - 1; currentIndex++) {
        // save the value of the item at the currentIndex
        let item = inputArr[currentIndex];
        rArr.push(inputArr.slice(0));

        let currentIndexCopy = currentIndex;
        // loop through all indexes that proceed the currentIndex
        for (let i = currentIndex + 1; i < inputArr.length; i++){
            if (inputArr[i] < item){
                currentIndexCopy++;
                rArr.push(inputArr.slice(0));
            }

        }

        // if currentIndexCopy has not changed, the item at the currentIndex is already in the correct currentIndexCopy
        if (currentIndexCopy == currentIndex){
            continue;
        }

        // skip duplicates
        while (item == inputArr[currentIndexCopy]){
            rArr.push(inputArr.slice(0));
            currentIndexCopy++;
        }

        // swap
        let temp = inputArr[currentIndexCopy]
        inputArr[currentIndexCopy] = item
        item = temp
        rArr.push(inputArr.slice(0));

        // repeat above steps as long as we can find values to swap
        while (currentIndexCopy != currentIndex) {
            currentIndexCopy = currentIndex
            // loop through all indexes that proceed the currentIndex
            for (let i = currentIndex + 1; i < inputArr.length; i++){
                if (inputArr[i] < item){
                    rArr.push(inputArr.slice(0));
                    currentIndexCopy++;
                }
            }

            // skip duplicates
            while (item == inputArr[currentIndexCopy]){
                rArr.push(inputArr.slice(0));
                currentIndexCopy++;
            }

            // swap
            temp = inputArr[currentIndexCopy];
            inputArr[currentIndexCopy] = item;
            item = temp;
            rArr.push(inputArr.slice(0));
        }
    }

    rArr.push(inputArr.slice(0));
    return rArr;
}

/* -- */

function binInsComparator(a,b){

    return a-b;

}

function insertionBinarySort(inputArr, cmp) {
    var rArr = [];
    cmp = cmp || binInsComparator;
    var current;
    var middle;
    var left;
    var right;
    for (var i = 1; i < inputArr.length; i += 1) {
        current = inputArr[i];
        left = 0;
        right = i;
        middle = Math.floor((left + right) / 2);
        while (left <= right) {
            if (cmp(inputArr[middle], current) <= 0) {
                left = middle + 1;
            } else if (cmp(inputArr[middle], current) > 0) {
                right = middle - 1;
            }
            middle = Math.floor((right + left) / 2);
        }
        for (var j = i; j > left; j -= 1) {
            inputArr[j] = inputArr[j - 1];

        }
        inputArr[j] = current;
        rArr.push(inputArr.slice(0));
    }
    rArr.push(inputArr.slice(0));
    return rArr;
}

/* -- */

const patienceSort = (inputArr) => {
    var rArr = [];
    rArr.push(inputArr.slice(0));
    const piles = [];
    
    for (let i = 0; i < inputArr.length; i++) {
        const num = inputArr[i];
        const destinationPileIndex = piles.findIndex(
        (pile) => num >= pile[pile.length - 1]
        );
        if (destinationPileIndex === -1) {
            piles.push([num]);
        } else {
            piles[destinationPileIndex].push(num);
        }
        rArr.push(inputArr.slice(0));
    }
    
    for (let i = 0; i < inputArr.length; i++) {
        let destinationPileIndex = 0;

        for (let p = 1; p < piles.length; p++) {
            const pile = piles[p];
            if (pile[0] < piles[destinationPileIndex][0]) {
                destinationPileIndex = p;
            }
        }
        const distPile = piles[destinationPileIndex];
        inputArr[i] = distPile.shift();
        rArr.push(inputArr.slice(0));
        if (distPile.length === 0) {
            piles.splice(destinationPileIndex, 1);
        }
    }

    rArr.push(inputArr.slice(0));
    return rArr;
}

/* -- */

function pancakeSort(inputArr) {
    var rArr = [];
    rArr.push(inputArr.slice(0));
    for (var i = inputArr.length - 1; i >= 1; i--) {
        // find the index of the largest element not yet sorted
        var max_idx = 0;
        var max = inputArr[0];
        for (var j = 1; j <= i; j++) {
            if (inputArr[j] > max) {
                max = inputArr[j];
                max_idx = j;
            }
        }

        if (max_idx == i){
            continue; // element already in place
        }

        var new_slice;

        // flip this max element to index 0
        if (max_idx > 0) {
            new_slice = inputArr.slice(0, max_idx+1).reverse();
            for (var j = 0; j <= max_idx; j++){
                inputArr[j] = new_slice[j];
                rArr.push(inputArr.slice(0));
            }
        }

        // then flip the max element to its place
        new_slice = inputArr.slice(0, i+1).reverse();
        for (var j = 0; j <= i; j++){
            inputArr[j] = new_slice[j];
            rArr.push(inputArr.slice(0));
        }
    }
    rArr.push(inputArr.slice(0));
    return rArr;
}

/* -- */

function cocktailBogoSort(inputArr){

    var rArr = [];
    var inputResult = inputArr.slice(0).sort((a,b) => a - b);

    var start = 0;
    var end = inputArr.length-1;
    var inputStart = [];
    var inputEnd = [];

    var tempInputArr;

    for(let i=0; i<2000; i++){

        rArr.push(inputArr.slice(0));

        tempInputArr = shuffle(inputArr.slice(start,end+1));
        inputArr = inputStart.concat(tempInputArr,inputEnd);

        if(inputArr[start] == inputResult[start]){

            inputStart.push(inputArr[start]);
            start++;

        }

        if(start == end){

            break;

        }

        if(inputArr[end] == inputResult[end]){

            inputEnd.unshift(inputArr[end]);
            end--;

        }

        if(start == end){

            break;

        }

    }

    rArr.push(inputResult.slice(0));

    return rArr;

}

/* -- */

function getStripAmount(a,b){

    return Math.ceil(Math.random()*(b-a))+a;

}

sortingType = [countingSort,gnomeSort,oddEvenSort,cocktailSort,doubleSelectionSort,combSort,heapSort,flashSort,insertionSort,selectionSort,bubbleSort,shellSort,quickSort,bogoSort,cocktailBogoSort,cycleSort,insertionBinarySort,patienceSort,pancakeSort];
randType = Math.floor(Math.random()*sortingType.length);
randType2 = Math.floor(randType+(Math.random()*sortingType.length-1))%(sortingType.length);
prevType = randType;
resultsArray = sortingType[randType](myArr);
resultsArray2 = sortingType[randType2](myArr2);

/* 

    Sources:

    Counting Sort => https://medium.com/javascript-algorithms/javascript-algorithms-counting-sort-c94a5fd70c9c
    Gnome Sort => https://rosettacode.org/wiki/Sorting_algorithms/Gnome_sort#JavaScript
    Odd Even Sort => https://mgechev.github.io/javascript-algorithms/sorting_oddeven-sort.js.html
    Cocktail Sort => https://medium.com/weekly-webtips/cocktail-sort-in-javascript-6b645c59ecea
    Radix Sort => https://www.tutorialspoint.com/radix-sort-in-javascript
    Double Selection Sort => ?
    Comb Sort => https://gist.github.com/hiroshi-maybe/4701011
    Stooge Sort => https://rosettacode.org/wiki/Sorting_algorithms/Stooge_sort#JavaScript
    Insertion Sort base code => https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c
    Bogo Sort => Just random every time
    Cycle Sort => 
    Binary Insertion Sort => https://mgechev.github.io/javascript-algorithms/sorting_insertion-binary-sort.js.html
    Patience Sort => https://rosettacode.org/wiki/Sorting_algorithms/Patience_sort#JavaScript
    Pancake Sort => https://rosettacode.org/wiki/Sorting_algorithms/Pancake_sort#JavaScript

    Proposed New Sorts:

    Smooth Sort - https://github.com/jasondavies/smoothsort.js/blob/master/smoothsort.js
    Tournament Sort - ?
    In-Place Merge Sort - ?
    Batcher's Bitonic Sort - ?
    Hybrid Comb Sort - ?
    Weave Merge Sort - ?
    Bad Sort - ?
    Recursive Inertion Sort - https://mgechev.github.io/javascript-algorithms/sorting_recursive-insertionsort.js.html

    https://github.com/MusicTheorist/ArrayVisualizer

*/

/* idea:

    - Stripes (so maybe a rectangle with a long width split into stripes) (done)
    - Multiple stripes of code sorting algorithms vs each other (done)

    - Add in enough sorting algos to reach 30 of them (including: mergesort, stoogesort and Radix Sort)
    - Add Dynami Range Random Sort (Source: https://youtu.be/GIvjJwzrHBU?t=640, it is a sort where you pick a random element and another random element (by mod range), compare them and then swap them if one is bigger than the other

*/