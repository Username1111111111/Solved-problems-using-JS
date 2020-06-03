//Algorithm								Time Complexity			 Space Complexity
//										 Best	 	 Average	Worst				Worst
//Selection Sort			Ω(n^2)	 Θ(n^2)		O(n^2)		 	O(1)

function selectionSort(array) {
	let arr = [...array];
	console.log(arr);

	for (let i = 0, smallestIndex, smallest; i < arr.length; i++) {
		smallestIndex = i;
		smallest = arr[i];
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < smallest) {
				smallest = arr[j];
				smallestIndex = j;
			}
		}
		// console.log();
		// console.log(i + ":\t[" + arr[i] + "]\n" + smallestIndex + ":\t[" +  arr[smallestIndex] + "]");
		
		// let temp = arr[i];
		// arr[i] = arr[smallestIndex];
		// arr[smallestIndex] = temp;

		[arr[smallestIndex], arr[i]] = [arr[i], arr[smallestIndex]];

		// console.log(arr);
	}

	console.log(arr);
	return arr;
}

let testArr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 0, -13, 0];

selectionSort(testArr);
