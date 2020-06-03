function smallestCommons(arr) {
  let mult = arr[0] * arr[1];
  let numArr = [];
  
  //if range starts with smaller number then fill array starting from smaller to bigger
  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++ ) {
      numArr.push(i);
    }
  }
  
  else {
    for (let i = arr[1]; i <= arr[0]; i++ ) {
      numArr.push(i);
    }
  }
  
  let smallestMultiple = numArr[numArr.length - 1];
  while (smallestMultiple / numArr[0] > 1 && smallestMultiple % numArr[0] == 0) {
    smallestMultiple /= numArr[0];
  }

  let trigger = false;

  for (let i = 1; trigger != true; i++) {
    for (let j = 0; j < numArr.length; j++) {
      if (mult % numArr[j] !== 0) {
         mult = numArr[0] * i * smallestMultiple;
         trigger = false;
         break;
      }
      else {
        trigger = true;
      }
    }
    
  }

  console.log(mult);
  return mult;
}

smallestCommons([23, 18]);