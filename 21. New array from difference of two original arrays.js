function diffArray(arr1, arr2) {
  var newArr = [];
  let doExistElem;
  for (let i = 0; i < arr1.length; i++) {
    doExistElem = arr2.some(elem => elem == arr1[i]);
    if (doExistElem == false) {
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    doExistElem = arr1.some(elem => elem == arr2[i]);
    if (doExistElem == false) {
      newArr.push(arr2[i]);
    }
  }

 	console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);