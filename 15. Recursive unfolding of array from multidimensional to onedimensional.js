function steamrollArray(arr) {
  // 1) Make new empty array;
  // 2) New Function that takes array as input 
  // and loops through every array element;
  // 3) If element is an array recursively access to
  // function and loop through insides of element-array
  // infinitely until we reach to the element that is not
  // an array;
  // 4) If element is not an array - push element to the new made
  // array;
  // 5) Call a function with our input array;
  // 6) Return flatten array.
  let newArr = [];

  function recursiveFlattenOfArray(array) {
    for (let i = 0; i < array.length; i++){
      let element = array[i];
      if ( Array.isArray(element) ) {
        recursiveFlattenOfArray(element); 
      }
      else {
        newArr.push(element);
      }
    }
  }
  recursiveFlattenOfArray(arr);

  console.log(newArr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);