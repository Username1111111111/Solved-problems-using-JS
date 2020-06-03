function sumPrimes(num) {
  let sum = 0;
  let currentNumber = 2;
  let isPrimeNumber;

  while (currentNumber <= num) {
    isPrimeNumber = true;
    console.log("cur: " + currentNumber);
    for (let i = 2; i <= currentNumber; i++) {
      if (currentNumber % i == 0 && i != currentNumber) {
        isPrimeNumber = false;
        console.log("Prime: " + isPrimeNumber);
        currentNumber++;
        break;
      }
    }
    if (isPrimeNumber == true) {
      sum += currentNumber;
      console.log("Prime: " + isPrimeNumber);
      currentNumber++;
    }
    
    console.log("sum: " + sum + "\n");
  }

  return sum;
}

sumPrimes(100);