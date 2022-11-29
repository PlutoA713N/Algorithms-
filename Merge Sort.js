// Merge Sort Algorithm
const mergeSort = (arr) => {
  //Base condition && also returns arr if it's length < 2
  if (arr.length < 2) {
      return arr;
  } 
  // Variables to divide array until each elem is divided
  const mid = Math.floor(arr.length/ 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // Here func wil be invoked when it receives both parameters
  return merge (mergeSort(left), mergeSort(right))
}

const merge = (left,  right) => {
  var stack = [];
  // When func is called, it compares the elem from both parameters
  while (left.length && right.length) {
      
     stack.push(left[0] < right[0] ? left.shift() : right.shift())
     
  }
  // Left over elements are added to array variable
  var array = [...stack, ...left, ...right]
  
  console.log(array)
  return array;
  
}

mergeSort([2,10,5,3,9,8,7,0,1]) // Input
// [ 0, 1, 2, 3, 5, 7, 8, 9, 10 ] // Output


// Here ima explain the Merge Sort Alogirthm based on my Understanding, my aplogies if there's any mistakes in my explanation
// We create two functions , first function takes an input and also it divides the array until there's one sub array in each
// For example:-
/* Here, arr.length == 9 
   it divides the arr into 2 parts by using floor(9/2 = 4)
   1st function does it until each element is separted individually 
   we divide it by calling the same func on those variables until every elem is divided by using base condition of 1st func
   we break every elem into single elem by using 1st function 
   [2,10,5,3] => 
   [2,10] = L , [5,3] = R // Here 2nd func should be invoked but it will be invoked later, when the below are invoked this one will be invoked after them
   [2] = L, [10] = R, 2nd func again invoked here
   [5] = L, [3] = R, 2nd func again invoked here
   same process will be occured to rest of the elements
/*
/* 2nd function will compare the elements when function is called by the first function
   it stores the least values and left over values
   finally we get the Sorted Array.
/*
