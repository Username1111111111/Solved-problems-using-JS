function binarySearch(arr, value) {
	let lowIndex = 0; 
	let highIndex = arr.length - 1;
	let midIndex, guessedValue;
	let loopCount = 0;

	let bigO = Math.log2( arr.length );
	
	while (lowIndex <= highIndex) {
		midIndex = Math.floor((lowIndex + highIndex) / 2);
		guessedValue = arr[midIndex];
		
		if (guessedValue == value) {
			loopCount++;
			// console.log("Simple search: O(n) = " + arr.length);
			// console.log("Binary search: O(log2 n) = " + bigO);
			// console.log("Number of operations = " + loopCount);
			// console.log(value + ": position in array is " + midIndex + "\n");
			return midIndex;
		}
		else if (guessedValue < value) {
			lowIndex = midIndex + 1;
		}
		else if (guessedValue > value) {
			highIndex = midIndex - 1;
		}
		loopCount++;
	}

}
							// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
let testArray = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22];

binarySearch(testArray, 3);
binarySearch(testArray, 14);