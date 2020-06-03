//Algorithm									Time Complexity						   Space Complexity
//										Best		  	Average			  Worst					Worst
//Quicksort				Ω(n log(n))		Θ(n log(n))			O(n^2)			O(log(n))

function quicksort(arr) {
	// console.log('Start');
	// console.log("length: " + arr.length);

	if (arr.length < 2) {
		// console.log("");
		return arr;
	}

	else if (arr.length == 2) {
		if (arr[0] > arr[1]) {
			
			// https://jsben.ch/WkXiU
			// fastest swap (100% of work done during certain time period) 
  		// arr[0] = arr[0] + arr[1];  
  		// arr[1] = arr[0] - arr[1];  
  		// arr[0] = arr[0] - arr[1];
			
			// 96.45%
  		// arr[0] = [arr[1], arr[1] = arr[0] ][0];
			
			// 96.41%
			// let temp = arr[0];
			// arr[0] =  arr[1];
			// arr[1] = temp;
				
			// https://kangax.github.io/compat-table/es6/
			// 95.76% BEST in terms of readability
			[arr[0], arr[1]] = [arr[1], arr[0]];
			
			// 75.13%
			// arr[1] = arr.splice(0,1, arr[1])[0];
		}
		// console.log("");
		return arr;
	}

	else if (arr.length >= 3) {
		let left = [];
		let right = [];
		let middleIndex = Math.floor((arr.length - 1) / 2);
		let pivot = arr[middleIndex];
		// console.log("Middle index: " + middleIndex);
		// console.log("Pivot: " + pivot);
		
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < pivot) {
				// console.log("left: " + arr[i] + " < " + pivot);
				left.push( arr[i] );
			}
			else if (arr[i] > pivot) {
				// console.log("right: " + arr[i] + " > " + pivot);
				right.push( arr[i] );
			}
			else if (arr[i] == pivot && middleIndex != i) {
				// console.log("equal: " + arr[i] + " = " + pivot);
				left.push( arr[i] );
			}
		}
		// console.log("[" + left + "] " + pivot + " [" + right + "]\n");
		return [...quicksort(left), pivot, ...quicksort(right)];
	}
	
}

let testArr = [0, 0, 105, 22, 1, 54, 52, -53, 12, -444, 0, 765475, 23, 22, 95, 78, -52];

let sorted = quicksort(testArr);

console.log(testArr);
console.log(sorted);

// console.log(testArr.sort()); 
