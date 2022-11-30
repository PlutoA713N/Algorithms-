## Iterative Approach

BinarySearch = (sortedArray, value) => {
    
    let length = sortedArray.length;
    let start = 0;           // First index of an array
    let end = length - 1;    // Last index of an array
    
    while(start <= end) {. 
       // Here the condition will compare until it founds the element
       // Start && end will search for a value in the whole array by searching each half
       // When the condition evaluates to true it defines it searched the whole array
       let midInd = Math.floor((start + end)/2); // Middle element index value
       let midElement = sortedArray[midInd];     // Middle element which will be compared with the value
       // By using ternary we updates the (start || end) index and we continue our search
       value > midElement ? start = midInd + 1 : end = midInd - 1;
       // If we found the value, we return it
       if(midElement === value)
        return midInd;
       //console.log(midInd); // Use it to display the value
       
    }
    return -1; // Else we return -1 indicates there's no such value in the array
}

BinarySearch( [2, 6, 9, 13, 58,66, 81, 92, 444], 92) // 7 

// Process:-
// It takes an Sorted array & 'value' to be searched in the array 
// It searches for the value by comparing with middle elem to find out the element lies on which side (left | right)
// It updated the starting and ending index until it finds the element exact position
// Once the element is equal to the value 
// We will return the index of the value || we will return -1;

## Recursive Approach

BinarySearch = (sortedArray, start, end, value) => {
      
      if(start > end) return -1;
      
      let midInd = Math.floor((start + end) / 2);
      let midElem = sortedArray[midInd];
      
      if(value > midElem) { BinarySearch(sortedArray, midInd + 1, end, value)
      }
      if (value < midElem) { BinarySearch(sortedArray,start, midInd - 1, value)
      }
      
      if(value === midElem) { console.log(midInd);
          return midInd;
      }
    
}

let ar = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170] ;
let len = ar.length
BinarySearch( [10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 0, len - 1, 170);

// Here we use recursive approach to find the value in array 
// we call the function number of times recusrively to find the value, if not found it returns -1
