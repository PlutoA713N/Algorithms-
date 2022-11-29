// Merge Sort Algorithm
const mergeSort = (arr) => {
  
  if (arr.length < 2) {
      return arr;
  }
  
  const mid = Math.floor(arr.length/ 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  return merge (mergeSort(left), mergeSort(right))
}

const merge = (left,  right) => {
  var stack = [];
  
  while (left.length && right.length) {
      
     stack.push(left[0] < right[0] ? left.shift() : right.shift())
     
  }
  
  var array = [...stack, ...left, ...right]
  
  console.log(array)
  return array;
  
}

mergeSort([2,10,5,3,9,8,7,0,1])
// [ 0, 1, 2, 3, 5, 7, 8, 9, 10 ]
