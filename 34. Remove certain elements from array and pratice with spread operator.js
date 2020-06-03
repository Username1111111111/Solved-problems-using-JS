function destroyer([...arr], ...args) {
  let innerArray = [...arr];
  let innerArguments = [...args];
  let newArr = [];
  console.log(innerArray);
  console.log(innerArguments);
  
  let doExistElem;
  for (let i = 0; i < innerArray.length; i++) {
    doExistElem = innerArguments.some(elem => elem == innerArray[i]);
    if (doExistElem == false) {
      newArr.push(innerArray[i]);
    }
  }
  console.log(newArr);
  
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);