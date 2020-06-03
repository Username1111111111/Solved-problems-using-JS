function sumAll(arr) {
  let sum = 0;
  let insideArr = [...arr];
  let arrLength = insideArr.length;
  let differenceBetweenElems;
  let justSumOfTwo = insideArr[0] + insideArr[arrLength - 1];
  
  if (insideArr[0] > insideArr[arrLength - 1]) {
    differenceBetweenElems = insideArr[0] - insideArr[arrLength - 1];
    let startPoint = insideArr[arrLength - 1];
    for (let i = 1; i <= differenceBetweenElems - 1; i++ ) {
      sum += startPoint + i;
    }
    sum += justSumOfTwo;
  }
 
  else if (insideArr[0] < insideArr[arrLength - 1]) {
    differenceBetweenElems = insideArr[arrLength - 1] - insideArr[0];
    let startPoint = insideArr[0];
    for (let i = 1; i <= differenceBetweenElems - 1; i++ ) {
      sum += startPoint + i;
    }
    sum += justSumOfTwo;
  }
  
  else if (insideArr[0] == insideArr[arrLength - 1]) {
    sum = justSumOfTwo;
  }
	
	console.log(sum);
  return sum;
}

sumAll([1, 4]);