function unfoldArray(arr, unfoldedArr) {
	if (unfoldedArr == undefined) {
		unfoldedArr = [];
	}
	for (let i = 0; i < arr.length; i++) {
		
		if ( Array.isArray(arr[i]) ) {
			unfoldArray(arr[i], unfoldedArr);
		}
		else {
			unfoldedArr.push(arr[i]);
		}
		if (i == arr.length - 1) {
			return unfoldedArr;
		}
	}
}


// let testArray = [ [1, 2, 3, [4, 5] ], [6, 7, [8, 81] ], [9, 91], [10], [1,[1,[11]]], 12, 13, 14, 15];
// console.log(testArray);
// console.log('-----------------------------------');
// console.log(unfoldArray(testArray));


// --------------------------------------------

function countdown(n) {
	console.log(n + "... ");
	if (n <= 0) {
		return;
	}
	else {
		countdown(n - 1);
	}
}

// countdown(10);

// --------------------------------------------

function sum(arr) {
	let x;
	if (arr.length == 0) {
		return 0;
	}
	else if (arr.length == 1) {
		console.log("--- \narr[0] = " + arr[0]);
		return arr[0];
	}
	else {
		console.log("arr[0] = " + arr[0] + " | arr.slice(1) = " +  arr.slice(1));
		x = arr[0] + sum( arr.slice(1) );
		console.log("arr[0] + " + arr[0] + " = " +  x);
	  return x;
	}

}

// let testArray2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// sum(testArray2);

// --------------------------------------------

function arrLength(arr) {
	let count;
	if (arr.length == 0) {
		console.log("0");
		return 0;
	}
	else if (arr.length == 1) {
		console.log("1");
		return 1;
	}
	else {
		count = arrLength(arr.slice(1));
		console.log(1 + count);
		return 1 + count;
	}
}

// let testArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// arrLength(testArray3);

// --------------------------------------------
 
function biggestValue(arr) {
	let bufArr = arr.slice();
	if (bufArr.length == 0) {
		console.log(undefined);
		return undefined;
	}
	else if (bufArr.length == 1) {
		console.log(bufArr[0]);
		return bufArr[0];
	}
	else {
		if (bufArr[0] > bufArr[1]) {
			bufArr.splice(1, 1);
		}
		else if (bufArr[0] == bufArr[1]) {
			bufArr.splice(1, 1);
		}
		else {
			bufArr.splice(0, 1);
		}

		console.log(bufArr);
		return biggestValue(bufArr);
	}
}

// let testArray4 = [1, 2, 3, 4, 5, 6, 6, 6, -7, 8, 9, 10, -11];

// biggestValue(testArray4);
// console.log(testArray4); //not mutated

// --------------------------------------------


function recursiveBinarySearch(arr, value, lowIndex, highIndex) {
	if (lowIndex == undefined) {
		lowIndex = 0;
	}
	if (highIndex == undefined) {
		highIndex = arr.length - 1;
	}

	midIndex = Math.floor((lowIndex + highIndex) / 2);
	console.log("\nmidIndex: " + midIndex);
	guessedValue = arr[midIndex];
	console.log("guessedValue: " + guessedValue + " (" + value + ")");
	
	
	if (guessedValue < value) {
		console.log("Guessed Value is too small");
		return recursiveBinarySearch(arr, value, midIndex + 1, highIndex);
	}
	else if (guessedValue > value) {
		console.log("Guessed Value is too big");
		return recursiveBinarySearch(arr, value, lowIndex, midIndex - 1);
	}
	else if (guessedValue == value) {
		console.log("Deserved index: " + midIndex);
		return midIndex;
	}
	
}

let testArray5 = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22];
console.log(recursiveBinarySearch(testArray5, 12));