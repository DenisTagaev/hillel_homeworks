let arr = [1, 2, 3, 1, 0, 10, 7];

function sortFn(array, callback) {

  for (let i = 0; i < array.length; i++) {

     for (var e = 0; e < array.length; e++) {

         if (callback(array[i], array[e] ) < 0) { 
           [array[i], array[e]] = [array[e], array[i]];
         }
     }
  }
  return array;
}

console.log(sortFn(arr, (a, b) => a - b) );


// function sortFn(array) {
    
//      for (let i = 0; i < array.length; i++) {

//         for (var e = 0; e < array.length - i; e++) {

//             if (array[e] > array[e + 1] ) {
//               [array[e], array[e + 1] ] = [array[e + 1], array[e] ];
//             }
//         }
//      }
//      return array;
// }

// console.log(sortFn(arr) );
