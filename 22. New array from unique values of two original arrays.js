function uniteUnique(...args) {
  
  let argArr = [...arguments]; 

  console.log("Values: " + argArr);
  console.log("Length: " + argArr.length);
  console.log("Keys:\t" + Object.keys(argArr));
  
  function pushIfNotExist(element, arr) {
    if (arr.indexOf(element) < 0) {
      return arr.push(element);
    }
  }

  let retArr = [];
  
  for (let i = 0; i < argArr.length; i++) {
    argArr[i].map(elem => pushIfNotExist(elem, retArr));
  }
  
  console.log("retArr: " + retArr + "\n");
  return retArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);