function sumFibs(num) {
  //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711...
  let oddSum = 2;
  let sum = 1;
  let prev = 1;
  let next = 1;
  
  while (oddSum <= num) {
    prev = next;
    console.log("prev:\t" + prev);
    next = sum;
    console.log("next:\t" + next);
    sum = prev + next;
    console.log("sum:\t" + sum + "\n");
    
    if (sum % 2 == 1 && sum <= num) {
      oddSum += sum;
      console.log("oddSum:\t" + oddSum + "\n");
    }

    if (sum >= num) {
    	break;
    }
    
  }
  console.log(oddSum);
  return oddSum;
}

sumFibs(75024);
sumFibs(4000000);
