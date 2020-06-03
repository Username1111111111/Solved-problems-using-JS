function dropElements(arr, func) {
  // Drop them elements.
  let newArr = [...arr];
  console.log("Arr: [" + newArr + "]");
  let passedFunction = func;
  let retArr = [];
  
  for (let i = 0; i < newArr.length; i++) {
    console.log("i:" + i + "\t [" + newArr[i] + "] " + passedFunction(newArr[i]) );
    if (passedFunction(newArr[i]) == true) {
      retArr = newArr.slice(i);
      console.log("return: " + retArr);
      return retArr;
    }
    if (i == newArr.length - 1 && passedFunction(newArr[i]) == false) {
      return retArr;
    }
    
  }
 
}

dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
dropElements([1, 2, 3, 4], function(n) {return n > 5;});
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});