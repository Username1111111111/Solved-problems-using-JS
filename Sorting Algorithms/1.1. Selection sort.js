//Algorithm								Time Complexity			 Space Complexity
//										 Best	 	 Average	Worst				Worst
//Selection Sort			Ω(n^2)	 Θ(n^2)		O(n^2)		 	O(1)

// 0, 1, 2, 3, 4, 5 	n 		6
// 1, 2, 3, 4, 5 			n-1 	5
// 2, 3, 4, 5 				n-2 	4
// 3, 4, 5 						n-3 	3
// 4, 5 							n-4 	2
// 5 									n-5 	1

// 6 + 5 + 4 + 3 + 2 + 1 = 21

function findSmallest(arr) {
	let smallest = arr[0];
	let smallestIndex = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	return smallestIndex;
}

function selectionSort(arr) {
	let defArr = [...arr];
	let newArr = [];
	let smallest;
	let swapper;
	
	while (defArr.length > 0) {
		smallest = findSmallest(defArr);
		// console.log("Smallest index: " + smallest);
		swapper = defArr.splice(smallest, 1);
		newArr.push(...swapper);
		// console.log("arr.splice: " + swapper);
	}
	
	console.log(arr);
	console.log(newArr);
	return newArr;
}


let testArr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 0, -13, 0];

selectionSort(testArr);