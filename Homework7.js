let arr = [1, 2, 3, 1, 0, 10, 7];

function sortFn(array) {
  let arr2 = [];

  for (let i = 0; array.length; i++) { 
        arr2.push(array.splice (array.indexOf (Math.min (...array) ), 1) [0] );
  }

  return console.log(arr2);
}
sortFn(arr);


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