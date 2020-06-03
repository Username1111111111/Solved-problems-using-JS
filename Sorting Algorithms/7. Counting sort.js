//Algorithm					Time Complexity				Space Complexity
//								Best	 Average	Worst				Worst
//Counting Sort		Ω(n+k)	Θ(n+k)	O(n+k)			 O(k)


function countingSort(array) {
	console.log(array);
	let indexCountBank = Array(array.length).fill(0);
	let resultArray = [];
	
	//Calculating for each element of array, how much elements are bigger than current element
	for (let i = 0; i < array.length-1; i++) { 
		for (let j = i+1; j < array.length; j++) { 
			//If current element are bigger - increment
			if (array[i] > array[j]) {
				indexCountBank[i]++;
			} 
			//if the element that are being compared with current element - increment for being compared
			else {
				indexCountBank[j]++;
			}
		}
	}

	//Every element comparison and following incrementing are equal to index in resulting array
	for (let i = 0; i < array.length; i++) {
		resultArray[indexCountBank[i]] = array[i];
	}

	console.log(resultArray);
	return resultArray;
}

let testArr = [0, 0, 105, 22, 1, 54, 52, -53, 12, -444, 0, 1000, 23, 22, 95, 78, -52];

countingSort(testArr);